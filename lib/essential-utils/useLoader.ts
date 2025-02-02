import { create } from "zustand";

/**
 * Zustand store for managing loading state.
 */
export const useLoader = create<{
  loading: boolean;
}>((set) => ({
  loading: false,
}));
