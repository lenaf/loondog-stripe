import Link from './Link'
import MobileNav from './MobileNav'
import Logo from './Logo'
import siteData from '@/data/siteData';
import LinkAsButton from './LinkAsButton';
import CartModal from './cart/modal';
import { Suspense } from 'react';
import Cart from './cart';
import OpenCart from './cart/open-cart';

const Header = () => {
  return (
    <header className="bg-base-100 sticky top-0 z-10 h-20 py-4 px-4">
      <div className='flex justify-between items-center'>
        <Link href="/" >
          <Logo width={80} />
        </Link>
        <div className='hidden sm:block'>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            {siteData.routes.map((link) => (
              <Link
                key={link.title}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
        {/* <MobileNav /> */}
      </div>
    </header>
  )
}

export default Header
