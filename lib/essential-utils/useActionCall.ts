import { toast } from "sonner";
import { useLoader } from "@/lib/essential-utils/useLoader";

export const useActionCall = <T extends (...args: any[]) => Promise<any> | any>(
  Fn: T,
) => {
  return async (...data: Parameters<T>): Promise<ReturnType<T> | undefined> => {
    try {
      // Set loader state to true before execution
      useLoader?.setState?.({ loading: true });

      // Call the provided function with arguments
      return await Fn(...data);
    } catch (error) {
      // Handle errors and show toast notifications
      if (error instanceof Error) {
        toast.error(error.message || "An unexpected error occurred.");
        console.error("Error in useActionCall:", error);
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      // Reset loader state to false
      useLoader?.setState?.({ loading: false });
    }
  };
};
