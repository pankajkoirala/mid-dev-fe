"use client";

import { useDisclosure } from "@/app/hooks/use-disclosure";
import { cn } from "@/utils/cn";

import { Product } from "@/types/productTypes";
import { Skeleton } from "../skeletons";
export interface ProductCardProps {
  className?: string;
  product: Product;
}
const CardSkeleton: React.FunctionComponent = () => {
  return (
    <div
      className={cn([
        "group bg-white min-h-[240px] w-full rounded-sm shadow-base hover:shadow-md cursor-pointer",
        "dark:bg-foreground overflow-hidden relative ",
      ])}
    >
      <Skeleton className=" min-h-[180px] max-h-[180px] w-full" />

      <div className="flex py-2 w-full  ">
        <div className=" flex flex-col gap-1 w-full">
          <Skeleton className=" min-h-[30px] w-full min-w-full" />
          <Skeleton className=" min-h-[30px] w-full min-w-full" />
          <Skeleton className=" min-h-[30px] w-full min-w-full" />


     
        
        </div>
  
      </div>
    </div>
  );
};

export default CardSkeleton;
