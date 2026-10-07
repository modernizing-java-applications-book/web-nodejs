'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header role="banner" className="pf-c-page__header">
      <div className="pf-c-page__header-brand">
        <Link href="/" className="pf-c-page__header-brand-link">
          <Image
            className="pf-c-brand"
            src="/imgs/logo.png"
            alt="Red Hat Logo"
            width={200}
            height={40}
            priority
          />
        </Link>
      </div>
      <div className="pf-c-page__header-nav">
        <nav
          className="pf-c-nav pf-m-end"
          aria-label="Global"
        >
          <ul className="pf-c-nav__horizontal-list">
            <li className="pf-c-nav__item">
              <Link href="/" className="pf-c-nav__link pf-m-current" aria-current="page">
                Red Hat Cool Store
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
