import { Typography } from "@/components/typography";
import { cn } from "@/utils/cn";

export default function Section({
  className,
  children,
  sectionHeading,
}: {
  className?: string;
  children: React.ReactNode;
  sectionHeading?: string;
}) {
  return sectionHeading ? (
    <div className="w-full">
      <Typography variant={"h4"} className="pb-4">{sectionHeading}</Typography>

      <div
        className={cn(
          [
            [
              "grid w-full",
              "gap-2 grid-cols-1",
              "sm:gap-2 sm:grid-cols-2",
              "md:grid md:gap-x-2 gap-y-2 md:grid-cols-3",
              "lg:grid lg:gap-x-2 gap-y-2 lg:grid-cols-4",
            ],
          ],
          className
        )}
      >
        {children}
      </div>
    </div>
  ) : (
    <div
      className={cn(
        [
          [
            "grid w-full",
            "gap-2 grid-cols-1",
            "sm:gap-2 sm:grid-cols-2",
            "md:grid md:gap-x-2 gap-y-2 md:grid-cols-3",
            "lg:grid lg:gap-x-2 gap-y-2 lg:grid-cols-4",
          ],
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
