import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { NavDropdown } from './NavDropdown';

export async function SiteHeader() {
  const t = await getTranslations('Nav');

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={siteConfig.name}>
          {/* Amblem (ME) — mobil ve masaüstünde görünür */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/emblem.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
          />
          {/* Wordmark — marka adı; çevrilmesin (translate="no") ve satır bölünmesin */}
          <span
            translate="no"
            className="hidden whitespace-nowrap font-brand text-lg font-semibold leading-none tracking-tight text-primary sm:inline min-[1200px]:text-base"
          >
            Urology Clinic
          </span>
        </Link>

        {/* Masaüstü menü — xl+ (1280px). Altında hamburger.
            "Ana Sayfa" logoya bağlı olduğundan masaüstü menüde tekrarlanmaz.
            Kompakt aralık/padding ile 1280px'e sığacak biçimde. */}
        <nav aria-label="Ana menü" className="hidden min-[1200px]:block">
          <ul className="flex items-center gap-0">
            {navItems
              .filter((item) => item.href !== '/')
              .map((item) =>
                item.children ? (
                  <NavDropdown key={item.href} item={item} />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium text-fg/85 transition-colors hover:bg-surface-2 hover:text-fg"
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                )
              )}
          </ul>
        </nav>

        {/* WhatsApp: header'da yer kaplamaması için sabit (floating) buton ve
            mobil menüde sunuluyor; üst çubukta dil + tema + (dar ekranda) menü. */}
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
      <nav aria-label="Ana menü" className="border-t border-border/80 min-[1200px]:hidden">
        <ul className="mx-auto flex max-w-[1600px] items-center gap-1 overflow-x-auto px-3 py-2 sm:px-5">
          {navItems
            .filter((item) => item.href !== '/')
            .map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-fg/85 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
