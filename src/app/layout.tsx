import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-stone-900 text-stone-900 h-screen flex overflow-hidden">
        
        {/* SIDEBAR LATERAL BÁSICO */}
        <aside className="w-72 bg-[#d3cfc8] border-r-4 border-stone-500 overflow-y-auto flex flex-col">
          <div className="p-4 border-b-2 border-stone-400">
            <h1 className="text-2xl font-bold tracking-widest uppercase">WIKI MINECRAFT</h1>
          </div>
          <nav className="p-4 flex flex-col gap-4 text-lg">
            <div>
              <ul className="pl-2 flex flex-col gap-2">
                <li><Link href="/" className="hover:text-black hover:bg-stone-300 px-1 block">&gt; Inicio</Link></li>
                <li><Link href="/mobs" className="hover:text-black hover:bg-stone-300 px-1 block">&gt; Info de Mobs</Link></li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* CONTENEDOR PRINCIPAL */}
        <main className="flex-1 p-8 overflow-y-auto bg-stone-800">
          <div className="max-w-5xl mx-auto border-[8px] border-[#3e2910] rounded-sm bg-[#c6b497] min-h-full">
            {children}
          </div>
        </main>
        
      </body>
    </html>
  );
}
