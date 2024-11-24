"use client";

import Image from "next/image";
import { Typography } from "../typography";
import { Icon } from "../Icon";
import { IconButton } from "../Iconbutton";
import { useDisclosure } from "@/hooks/use-disclosure";
import Link from "../Link";
import { cn } from "@/utils/cn";

import { Product } from "@/types/productTypes";
export interface ProductCardProps {
  className?: string;
  product: Product;
}
const Card: React.FunctionComponent<ProductCardProps> = ({
  className,
  product,
}) => {
  const viewState = useDisclosure();
  const {
    title,
    price,
stock,
 
    images,
    // discountPercentage,
    rating,
    // tags,
    discountPercentage
  } = product;

  return (
      <div
        className={cn([
          "group bg-white min-h-[240px] w-full rounded-sm shadow-base hover:shadow-md ",
          "dark:bg-foreground overflow-hidden relative ",
          className,
        ])}
      >
         <Link href={`/product/${product.id}`}>
         
        <Image
          src={images?.[0]?? ""}
          alt="product-card"
          sizes="100vh"
          height={0}
          width={0}
          className="rounded-t-sm min-h-[180px] max-h-[180px] w-full object-cover cursor-pointer group-hover:scale-95 ease-in-out duration-75"
        />
         </Link>
        <div className="flex p-3 justify-between bg-primary ">
          <div className=" flex flex-col gap-1">
          <Link href={`/product/${product.id}`}>
              <Typography
                variant={"h5"}
                className="dark:text-white  cursor-pointer"
              >
                {title ?? "Product Name"}
              </Typography>
            </Link>
            <div className="flex gap-1">
              <Icon icon="Star" className="text-red-700 dark:text-white " />
              <Typography
                variant={"p6"}
                className="text-text-dark"
              >
                {Math.ceil(rating)}/5 (456) {stock ?? 100} sold
              </Typography>
            </div>
            <div className="flex gap-2">
              <div className="border border-border dark:border-white rounded py-0.5 px-1 w-fit">
                <Typography variant={"p6"} className="dark:text-white ">
                  free delivery
                </Typography>
              </div>
              <div className="border border-border  dark:border-white  rounded py-0.5 px-1 w-fit">
                <Typography variant={"p6"} className="dark:text-white">
                  2 voucher
                </Typography>
              </div>
            </div>
            <div className="flex gap-2 items-baseline">
              <Typography variant={"h5"} className="font-bold dark:text-white ">
                Rs.{price}
              </Typography>
          
                <Typography
                  variant={"s1"}
                  className=" font-bold text-text-body line-through"
                >
                  Rs{((price * discountPercentage) / 100).toFixed(2)}

                </Typography>
            
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <IconButton
              className=" rounded-full p-0 dark:text-white "
              icon="ShoppingCart"
              variant={"unstyled"}
              strokeWidth={2}
              iconClassName="hover:text-primary dark:hover:text-white"
            />
            <IconButton
              className="rounded-full p-0 dark:text-white hover:text-primary"
              icon="Heart"
              variant={"unstyled"}
              strokeWidth={2}
              iconClassName="hover:text-primary dark:hover:text-white"
            />
            <IconButton
              className="rounded-full p-0 dark:text-white hover:text-primary"
              icon="Share"
              variant={"unstyled"}
              strokeWidth={2}
              onClick={(e)=>{
                e.stopPropagation()
                viewState.onOpen()}}
              iconClassName="hover:text-primary dark:hover:text-white"
            />
          </div>
        </div>
        {/* new info */}
        <div className=" h-20 w-20 rounded-full bg-red-500 flex justify-start items-end absolute top-[-30px] right-[-30px] pl-[14px] pb-[22px]">
          <Typography className="font-bold text-white" variant={"s2"}>
            NEW
          </Typography>
        </div>
     


      </div>
  );
};

export default Card;
