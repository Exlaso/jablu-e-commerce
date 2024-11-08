import { HTMLMotionProps } from "framer-motion";

declare global {
  interface HTMLMotionDivProps extends HTMLMotionProps<"div"> {
    className?: string;
  }
}
