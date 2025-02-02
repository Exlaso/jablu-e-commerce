

export const getActionCall = <T extends (...args: any[]) => Promise<any>>(Fn: T) => {
    return async (...data: Parameters<T>): Promise<Awaited<ReturnType<T>> | null> => {
        try {
            return await Fn(...data);
        } catch (error) {
            // Handle errors and show toast notifications
            if (error instanceof Error) {
                console.error("Error in useActionCall:", error);
            } else {
                console.error("Unexpected error:", error);
            }
            return null;


        } finally {

        }
    };
};
