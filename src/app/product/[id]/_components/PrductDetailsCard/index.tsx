'use client';

import { ImageSection } from './image-section';
import { InfoSection } from './info-section';

import { cn } from '@/utils/cn';
import { Typography } from '@/components/typography';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Separator } from '@/components/Separator';
import { IconButton } from '@/components/Iconbutton';
import { Product } from '@/types/productTypes';
import SectionContainer from '@/container/sectionContainer';

export const ProductDetailCard = ({product}:{product:Product}) => {
 
  return (
    <SectionContainer
      className={cn([
        [
          'flex w-full bg-white p-0 ',
          'flex flex-col  ',
          'md:flex md:flex-col gap-6 md:p-0',
          'lg:flex  lg:flex-row lg:p-0 ',
        ],
      ])}
    >
      <div className={cn(['w-full ', 'md:w-full ', 'lg:w-[73%] '])}>
        <SectionContainer
          className={cn([
            'flex flex-col gap-6 w-full p-0',
            'md:flex md:gap-6 md:flex-row md:p-0',
            'lg:flex lg:gap-6 lg:flex-row lg:p-0',
          ])}
        >
          <ImageSection product={product as Product} />
          <InfoSection product={product as Product} />
        </SectionContainer>
      </div>
      <div
        className={cn([
          'w-full bg-primary ',
          'md:w-full ',
          'lg:w-[27%] lg:block lg:py-3 ',
        ])}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 ">
            <Typography
              variant={'p5'}
              className="text-white  px-3 font-semibold"
            >
              Delivery
            </Typography>
            <div className="flex justify-between px-3">
              <div className="flex gap-2 items-center">
                <Icon
                  className="text-white "
                  icon="MapPin"
                />
                <Typography variant={'p5'}>With in ringroad</Typography>
              </div>
              <Button variant={'link'} size={'sm'}>
                <Typography variant={'p5'}> CHANGE</Typography>
              </Button>
            </div>
            <Separator className="bg-gray-400 w-[95%] mx-2" />
            <div className="flex justify-between px-3 items-center">
              <div className="flex gap-2 ">
                <Icon
                  icon="Truck"
                  className="text-white "
                />
                <div>
                  <Typography variant={'p5'}>
                    Delivery with in 2/3 days
                  </Typography>
                </div>
              </div>
              <Typography variant={'p5'} className="font-semibold">
                Rs. 100 /-
              </Typography>
            </div>
            <div className="flex gap-2 px-3 ">
              <Icon
                icon="HandCoins"
                className="text-white "
              />
              <Typography variant={'p5'}>Cash on delivery available</Typography>
            </div>
          </div>
          <Separator className="bg-gray-400 w-[95%] mx-2" />
          <div className="flex flex-col gap-3 ">
            <Typography
              variant={'p5'}
              className="text-white  px-3 font-semibold"
            >
              Services
            </Typography>
            <div className="flex justify-between px-3">
              <div className="flex gap-2 ">
                <Icon
                  className="text-white "
                  icon="RefreshCcw"
                />
                <div>
                  <Typography variant={'p5'}>
                    14 days free & easy return
                  </Typography>
                  <Typography
                    variant={'p6'}
                    className="text-text-dark "
                  >
                    Change of mind is not applicable
                  </Typography>
                </div>
              </div>
              <IconButton
                icon="Info"
                variant={'ghost'}
                className="text-white "
                iconClassName='text-white'
                size={'sm'}
              />
            </div>

            <div className="flex gap-2 px-3 ">
              <Icon
                icon="Shield"
                className="text-white "
                
              />
              <Typography variant={'p5'}>
                {product?.warrantyInformation} 
              </Typography>
            </div>
          </div>
          <Separator className="bg-gray-400 w-[95%] mx-2" />
          <div className="flex flex-col gap-3 ">
            <Typography
              variant={'p5'}
              className="text-white  px-3 font-semibold"
            >
              Sold by
            </Typography>
            <div className="flex justify-between px-3">
              <div className="flex gap-2 ">
                <Icon
                  className="text-white "
                  icon="Store"
                />
                <div>
                  <Typography variant={'p5'}>Ram lal Store </Typography>
                  <Typography
                    variant={'p6'}
                    className="text-text-dark "
                  >
                    Kathandu, Manamaiju-3
                  </Typography>
                </div>
              </div>
              <IconButton
                icon="MapPin"
                variant={'ghost'}
                className="text-white "
                size={'sm'}
                iconClassName='text-white'

              />
            </div>
            <div className="flex gap-2 px-3">
              <Icon
                icon="Footprints"
                className="text-white "
              />
              <div>
                <Typography variant={'p5'}>
                  Only 3 km from your location.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
