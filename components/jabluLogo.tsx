import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

interface JabluLogoProps {
  className?: string;
  size?: number | `${number}` | undefined;
}

export function JabluLogo({ className, size = 50 }: JabluLogoProps) {
  return (
    <div className={cn("text-xl font-bold    relative z-[22]", className)}>
      <Link
        href="/"
        className="flex flex-wrap font-bold text-center h-full shadowhand justify-evenly"
      >
        <Image
          className="invertsvg h-full"
          src={"/static/logo/jablu4.svg"}
          alt={"jablu.in logo"}
          width={size}
          height={size}
        ></Image>
      </Link>
    </div>
  );
}
