import { cn } from "@/utils/cn";


export default function Container({className,children}:{className?:string,children:React.ReactNode}) {
  return (

    <div    className={cn(
        "p-6 bg-secondary",
        className
      )}>
        {children}
    </div>
  );
}
