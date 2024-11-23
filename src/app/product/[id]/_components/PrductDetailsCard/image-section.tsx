import { IconButton } from "@/components/Iconbutton";
import SectionContainer from "@/container/sectionContainer";
import { Product } from "@/types/productTypes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";


export const ImageSection = ({product}:{product:Product}) => {
  const [imgIndex,setImgIndex]=useState(0)
  return (
    <SectionContainer  >
      <Image
        src={product?.images[imgIndex]}
        className={cn([
          'min-w-screen w-screen h-[300px] ',
          'sm:min-w-screen sm:w-screen  sm:h-[400px]',
          'md:w-[300px] md:h-[400px] md:min-w-[300px] md:min-h-[400px]',
          'lg:w-[300px] lg:h-[400px] lg:min-w-[300px] lg:min-h-[400px]',
        ])}
        height={0}
        width={0}
        sizes="100vh"
        alt="as"
     
      />
      <div className="flex gap-2 items-center">
        <IconButton
          variant={'ghost'}
          icon="ChevronLeftIcon"
          className="rounded-none"
          size={'md'}
        />
        {product?.images?.map((i,index) => (
          <Image
          onClick={()=>{
           setImgIndex(index)
          }}
            src={i}
            key={i}
            alt="as"
            sizes="100vh"
            height={0}
            width={0}
            className="min-h-10 min-w-10 max-h-10 max-w-10 h-10 w-10 border border-gray-200 cursor-pointer" 
          />
        ))}
        <IconButton
          variant={'ghost'}
          icon="ChevronRightIcon"
          className="rounded-none"
          size={'md'}
        />
      </div>
    </SectionContainer>
  );
};
