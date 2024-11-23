import { cn } from "@/utils/cn";


export default function SectionContainer({className,children}:{className?:string,children:React.ReactNode}) {
  return (
    <div    className={cn(
        "p-6 flex flex-col gap-6 w-full",
        className
      )}>
        {children}
    </div>
  );
}
