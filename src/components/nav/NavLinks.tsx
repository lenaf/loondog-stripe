'use client'

import Link from '../common/Link'
import siteData from '@/data/siteData';
import LinkAsButton from '../common/LinkAsButton';
import { usePathname } from 'next/navigation';

const NavLinks = ({ linkClass, ...rest }: React.HTMLProps<HTMLElement> & { linkClass?: string }) => {
  const pathname = usePathname()

  return (
    <nav {...rest}>
      {siteData.routes.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={`${linkClass ?? ''} ${pathname === link.href ? 'underline underline-offset-8 decoration-primary' : ''}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks
