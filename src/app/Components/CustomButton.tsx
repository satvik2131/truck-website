import { Button } from "@/components/ui/button";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});

export function CustomButton({
  transparent,
  text,
  className,
}: {
  transparent: boolean;
  text: string;
  className?: string;
}) {
  const bgType = transparent ? "bg-transparent" : "bg-primary";

  return (
    <Button
      variant={transparent ? "outline" : "default"}
      className={`${className} ${bgType} px-7 py-6 font-semibold w-full sm:w-auto sm:text-lg text-foreground hover:text-secondary-foreground hover:${bgType}`}
    >
      <p className={`${jakarta.className}  text-center text-base`}>{text}</p>
    </Button>
  );
}
