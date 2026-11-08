import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <h1 className="text-5xl font-bold text-stone-800 mb-6 drop-shadow-md">
        Bienvenido a la Wiki Minecraft
      </h1>
      <p className="text-xl text-stone-700 mb-8">
        Explora toda la información sobre criaturas, objetos y estructuras.
      </p>
      
      <Link 
        href="/mobs" 
        className="bg-[#3e2910] text-white px-6 py-3 border-4 border-[#8c7e68] text-2xl hover:bg-[#5c3d18] transition-colors"
      >
        Entrar a la Enciclopedia de Mobs
      </Link>
    </div>
  );
}
