'use client';
import NextLink, { type LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, ...props }: CustomLinkProps) {
  return <NextLink href={href} {...props} />;
}
