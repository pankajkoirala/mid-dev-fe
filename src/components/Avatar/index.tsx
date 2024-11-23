import { AvatarProps as ShadcnAvatarProps } from "@radix-ui/react-avatar"

import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "./AvatarComponentindex"
import { generateAvatarName } from "@/utils/avatar-name"

export interface AvatarProps extends ShadcnAvatarProps {
  shape?: "circle" | "square"
  name?: string
  src?: string
  alt?: string
}

export const Avatar = ({ name, src, alt, ...rest }: AvatarProps) => {
  return (
    <ShadcnAvatar {...rest}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="text-black dark:text-white">
        {generateAvatarName(name as string)}
      </AvatarFallback>
    </ShadcnAvatar>
  )
}
