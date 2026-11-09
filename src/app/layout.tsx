import './globals.css';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Inicio', icon: '⌂' },
  { href: '/mobs', label: 'Info de Mobs', icon: '♟' },
  { href: '/items', label: 'Guía de Ítems', icon: '◆' },
  { href: '/structures', label: 'Estructuras', icon: '▦' },
  { href: '/pociones', label: 'Pociones', icon: '⚗' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="wiki-body">
        <aside className="wiki-sidebar">
          <Link href="/" className="wiki-brand">
            <span className="brand-mark">M</span>
            <span> MINECRAFT <small>WIKI</small></span>
          </Link>
          <div className="sidebar-caption">EXPLORAR</div>
          <nav className="wiki-nav">
            {links.map((link) => (
              <Link href={link.href} key={link.href} className="wiki-nav-link">
                <span className="nav-icon">{link.icon}</span>{link.label}
              </Link>
            ))}
          </nav>
          <div className="sidebar-footer">Una enciclopedia hecha por fans.<br/>Explora, aprende y construye.</div>
        </aside>
        <main className="wiki-main">
          <div className="wiki-topbar"><span>WIKI MINECRAFT</span><span className="topbar-status"><i /> ENCICLOPEDIA</span></div>
          <div className="wiki-content">{children}</div>
          <footer className="wiki-footer">MINECRAFT WIKI <span>•</span> Proyecto informativo no oficial</footer>
        </main>
      </body>
    </html>
  );
}
