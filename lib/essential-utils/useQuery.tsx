"use client";
import {useCallback, useEffect, useRef, useState} from "react";


interface UseAsyncResult<T> {
    execute: (...args: any[]) => Promise<T>;
    loading: boolean;
    error: Error | null;
    data: T | null;
}

export function useQuery<T>(asyncFunction: (...args: any[]) => Promise<T>, immediate = true): UseAsyncResult<T> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<T | null>(null);

    const isMounted = useRef(true); // To track component mount status

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false; // Set to false on unmount
        };
    }, []);

    const execute = useCallback(async (...args: any[]): Promise<T> => {
        setLoading(true);
        setError(null);

        try {
            const result = await asyncFunction(...args);
            if (isMounted.current) {
                setData(result);
            }
            return result;
        } catch (err) {
            if (isMounted.current) {
                setError(err as Error);
            }
            throw err;
        } finally {
            if (isMounted.current) {
                setLoading(false);
            }
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute().catch(() => {}); // Ignore unhandled rejections
        }
    }, [immediate, execute]);

    return { execute, loading, error, data };
}
