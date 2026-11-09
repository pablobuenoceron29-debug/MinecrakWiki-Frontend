import Link from "next/link";

const sections = [
  { href: "/mobs", title: "Mobs", description: "Conoce las criaturas del mundo", icon: "🐲", tag: "CRIATURAS" },
  { href: "/items", title: "Ítems", description: "Bloques, herramientas y materiales", icon: "⛏️", tag: "INVENTARIO" },
  { href: "/structures", title: "Estructuras", description: "Descubre lugares y construcciones", icon: "🏰", tag: "EXPLORACIÓN" },
  { href: "/pociones", title: "Pociones", description: "Efectos, ingredientes y recetas", icon: "🧪", tag: "ALQUIMIA" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-label"><span /> GUÍA DE MINECRAFT</div>
        <h1>Explora el mundo<br/><span>de Minecraft</span></h1>
        <p>Todo lo que necesitas saber sobre criaturas, objetos, estructuras y pociones en un solo lugar.</p>
        <Link href="/mobs" className="hero-button">EXPLORAR WIKI <span>→</span></Link>
        <div className="hero-decoration" aria-hidden="true">✦</div>
      </section>
      <div className="section-heading"><div><span className="eyebrow">EMPIEZA A EXPLORAR</span><h2>Contenido de la wiki</h2></div><span className="section-count">04 CATEGORÍAS</span></div>
      <section className="home-grid">
        {sections.map((section, index) => <Link href={section.href} key={section.href} className="home-card">
          <div className="home-card-top"><span>{section.tag}</span><b>0{index + 1}</b></div>
          <div className="home-card-icon">{section.icon}</div>
          <h3>{section.title}</h3><p>{section.description}</p>
          <div className="home-card-link">VER CATEGORÍA <span>↗</span></div>
        </Link>)}
      </section>
    </div>
  );
}
