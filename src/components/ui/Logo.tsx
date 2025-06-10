import Link from 'next/link';
import React from 'react';

type SizeVariant = 'md' | 'lg';
const LOGO_SIZES: Record<SizeVariant, string> = {
  md: 'text-[32px]',
  lg: 'text-[52px]',
};
function Logo({ size }: { size: 'md' | 'lg' }) {
  return <Link  className={`text-slate-gray font-volkhov leading-none ${LOGO_SIZES[size]} `} href="/">ZAYRA</Link>;
}

export default Logo;
