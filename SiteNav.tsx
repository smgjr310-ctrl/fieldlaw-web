"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", shortLabel: "Home", icon: "HM" },
  { href: "/charges", label: "Charges", shortLabel: "Code", icon: "UC" },
  { href: "/checklists", label: "Checklists", shortLabel: "Lists", icon: "CL" },
  { href: "/warrants", label: "Warrants", shortLabel: "Warr", icon: "SW" },
  { href: "/reports", label: "Reports", shortLabel: "Rpt", icon: "RP" },
  { href: "/dui", label: "DUI/SFST", shortLabel: "DUI", icon: "DU" },
  { href: "/about", label: "About", shortLabel: "Info", icon: "AB" }
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <>
      <header className="mobile-app-topbar">
        <Link className="app-brand" href="/">
          <span className="brand-mark">FL</span>
          <span>
            <strong>FieldLaw</strong>
            <small>Utah field reference</small>
          </span>
        </Link>
      </header>

      <aside className="desktop-sidebar" aria-label="FieldLaw navigation">
        <Link className="app-brand sidebar-brand" href="/">
          <span className="brand-mark">FL</span>
          <span>
            <strong>FieldLaw</strong>
            <small>Utah field reference</small>
          </span>
        </Link>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link className={isActive(pathname, item.href) ? "nav-item active" : "nav-item"} href={item.href} key={item.href}>
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <p className="sidebar-disclaimer">Reference tool only. Verify current Utah Code and agency policy.</p>
      </aside>

      <nav className="mobile-tabbar" aria-label="Bottom tab navigation">
        {navItems.map((item) => (
          <Link className={isActive(pathname, item.href) ? "tab-item active" : "tab-item"} href={item.href} key={item.href}>
            <span className="tab-icon">{item.icon}</span>
            <span>{item.shortLabel}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
