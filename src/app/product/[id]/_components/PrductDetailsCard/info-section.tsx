import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { IconButton } from "@/components/Iconbutton";
import { Separator } from "@/components/Separator";
import { Typography } from "@/components/typography";
import { cn } from "@/utils/cn";
import { Rating } from "react-custom-rating-component";
import { useState } from "react";
import { Product } from "@/types/productTypes";
import Image from "next/image";
import SectionContainer from "@/container/sectionContainer";

export const InfoSection = ({ product }: { product: Product }) => {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <SectionContainer >
      <div className={cn(["flex flex-col gap-3 px-2"])}>
        <div className="flex justify-between">

        <Typography variant={"p2"}>{product?.title}</Typography>
        <div className="flex gap-4">
              <Icon
                icon="Share2"
                size={"lg"}
                className="cursor-pointer text-text-dark hover:text-primary"
              />
              <Icon
                icon="Heart"
                size={"lg"}
                className="cursor-pointer hover:text-primary  text-text-dark"
              />
              <Icon
                icon="QrCode"
                size={"lg"}
                className="cursor-pointer hover:text-primary  text-text-dark"
              />{" "}
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Rating
                count={Math.ceil(product?.rating)}
                readOnly
                defaultValue={product?.rating}
                spacing="2px"
                size={"12px"}
              />
              <Typography className="text-link" variant={"p5"}>
                {product?.rating} Ratings {product?.reviews?.length} Answered
                Questions
              </Typography>
            </div>
           
          <div className="flex gap-2 items-center">
            <Typography className="text-text-dark" variant={"p5"}>
              {product?.brand}
            </Typography>
            <Typography className="" variant={"p5"}>
              {product?.description}
            </Typography>
          </div>
        </div>
      </div>
      <Separator className="w-full  mt-2 bg-secondary" />
      <div className="flex gap-4 items-baseline">
        <Typography className="font-normal text-primary" variant={"h2"}>
          Rs.{product?.price}
          /-
        </Typography>

        <Typography
          variant={"h4"}
          className="dark:text-text-dark font-bold line-through"
        >
          Rs.{" "}
          {((product?.price * product?.discountPercentage) / 100).toFixed(2)}
        </Typography>
      </div>
      <div className="flex gap-3 items-center">
        <Typography className="text-black/50" variant={"p5"}>
          Quantity:
        </Typography>
        <IconButton
          disabled={orderQuantity === 1}
          onClick={() => {
            if (orderQuantity > 1) {
              setOrderQuantity(orderQuantity - 1);
            }
          }}
          size={"md"}
          className="rounded-none"
          icon="Minus"
          variant={"outline"}
        />
        <Typography variant={"p3"}>{orderQuantity}</Typography>
        <IconButton
          disabled={orderQuantity === 10}
          onClick={() => {
            //avaliable quantity is missing add from be
            if (orderQuantity < 10) {
              setOrderQuantity(orderQuantity + 1);
            }
          }}
          size={"md"}
          className="rounded-none"
          icon="Plus"
          variant={"outline"}
        />
      </div>

      <div className="flex gap-3 items-center">
        <Typography className="text-text-body " variant={"p5"}>
          Dimension:
        </Typography>

        <Typography
          variant={"p4"}
        >{`${product?.dimensions?.height}" * ${product?.dimensions?.width}" * ${product?.dimensions?.depth}"`}</Typography>
      </div>

      <div className="flex gap-3 items-center">
        <Typography className="text-text-body " variant={"p5"}>
          Available:
        </Typography>
        <Typography variant={"p4"}>{product?.availabilityStatus}</Typography>
      </div>
      <Separator className="w-full bg-secondary mt-2 " />

      <div className="flex gap-4 items-center">
        <Button className="w-1/2" variant={"secondary"}>
          <Typography variant={"p5"}> Add to cart</Typography>
        </Button>
        <Button className="w-1/2">
          <Typography variant={"p5"} className="text-white">
            Buy
          </Typography>
        </Button>
      </div>
    </SectionContainer>
  );
};
