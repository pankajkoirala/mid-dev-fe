import { cn } from "@/utils/cn";
import { Typography } from "../typography";
import Image from "next/image";
import { Button } from "../Button";
import { Icon } from "../Icon";
import Link from "../Link";

const LowerFooter = () => {
  return (
    <div
    className="flex flex-wrap w-full justify-between gap-6"
    //   className={cn([
    //     "flex flex-col  gap-6 w-full h-auto",
    //     "md:flex md:flex-col md:gap-8  md:w-full md:h-auto",
    //     "lg:flex lg:flex-row lg:gap-12   lg:w-full lg:h-auto",
    //   ])}
    >
      <div
        className={cn([
          " w-full flex flex-col gap-4 max-w-[300px] ",
          
        ])}
      >
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            height={0}
            width={0}
            priority
            sizes="100vw"
            className={"w-[200px] h-[50px]"}
          />
        </div>

        <Typography variant={"p4"} className="max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi
          cupiditate aliquam cumque, modi nesciunt nobis cum ea fugiat neque
        </Typography>
        <div className="flex gap-2">
          <Image
            src="/instagram.png"
            alt="instagram"
            height={0}
            width={0}
            priority
            sizes="100vw"
            className="min-h-8 max-h-8 min-w-8 max-w-8"
          />
          <Image
            src="/facebook.png"
            alt="facebook"
            height={0}
            width={0}
            priority
            sizes="100vw"
            className="min-h-8 max-h-8 min-w-8 max-w-8"
          />
          <Image
            src="/x.png"
            alt="x"
            height={0}
            width={0}
            priority
            sizes="100vw"
            className="min-h-8 max-h-8 min-w-8 max-w-8"
          />
        </div>
      </div>
      {/* <div
        className={cn([
          "flex flex-wrap w-full justify-between gap-6",
         
        ])}
      > */}

        <div
          className={cn([
            "w-full flex flex-col gap-3 max-w-[300px] ",
          
          ])}
        >
          <Typography variant={"h4"} className="font-bold">
            Quick Links
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant={"p4"} className="font-semibold text-text-dark hover:underline cursor-pointer">
              <Link href="/contactUs">
              Contact Us
              </Link>
            </Typography>
            <Typography variant={"p4"} className="font-semibold text-text-dark hover:underline cursor-pointer">
            <Link href="/contactUs">

              FAQs
              </Link>

            </Typography>{" "}
            <Typography variant={"p4"} className="font-semibold text-text-dark hover:underline cursor-pointer">
            <Link href="/contactUs">

              Blogs
              </Link>

            </Typography>{" "}
            <Typography variant={"p4"} className="font-semibold text-text-dark hover:underline cursor-pointer">
            <Link href="/contactUs">

              Gallery
              </Link>

            </Typography>
            <Typography variant={"p4"} className="font-semibold text-text-dark hover:underline cursor-pointer">
            <Link href="/contactUs">

              Pricing
              </Link>

            </Typography>
          </div>
        </div>
        <div
          className={cn([
            "w-full flex flex-col gap-3 max-w-[300px] ",

          ])}
        >
          <Typography variant={"h4"} className="font-bold">
            Work Hours
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant={"p4"} className="font-semibold text-text-dark">
              7 AM -5 PM, Mon - Sat
            </Typography>
            <Typography variant={"p4"} className="text-text-dark max-w-[300px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quo
              exercitationem deleniti!
            </Typography>
          </div>
        </div>
        <div
          className={cn([
            "w-full flex flex-col gap-3 max-w-[300px] ",

          ])}
        >
          <Typography variant={"h4"} className="font-bold">
            Contact
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant={"p4"} className="text-text-dark">
              Manamaiju-12, Kathmandu
            </Typography>
            <Typography variant={"p4"} className="text-text-dark">
              9843765501/9843625254
            </Typography>
            <Button className="w-fit rounded-full">
              <Icon icon="Phone" className="h-6 w-6" />
               Call us</Button>
          </div>
        </div>
      </div>
    // </div>
  );
};
export default LowerFooter;
