import { cn } from "@/utils/cn"
import Image from "next/image"

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      height={0}
      width={0}
      priority
      sizes="100vw"
      className={cn([
        "object-cover min-h-[28px] max-h-[28px] min-w-[130px] max-w-[130px]",
        "md:min-h-[28px] md:max-h-[28px] md:min-w-[130px] md:max-w-[130px]",
        "lg:min-h-[28px] lg:max-h-[28px] lg:min-w-[130px] lg:max-w-[130px]",
      ])}
    />
  )
}

export default Logo
