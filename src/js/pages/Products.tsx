import gorra from "../../assets/images/products/gorra.webp";
import ProductCard from "../components/ui/ProductCard";
import ComingSoonCard from "../components/ui/ComingSoonCard";

type Product = {
  id: number;
  name: string;
  price?: string;
  img?: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Gorra StamPurr", price: "$18.00", img: gorra },
  // { id: 2, name: "Sticker pack", price: "$5.00" },
  // { id: 3, name: "Taza purr", price: "$12.00" },
  // { id: 4, name: "Collar cat", price: "$9.50" },
];

const COMING_SOON: Product[] = [
  // { id: 101, name: "Sudadera edición limitada" },
  // { id: 102, name: "Juguete interactivo" },
  // { id: 103, name: "Bolso estampado" },
];

export default function Products() {
  return (
    <main className="pt-28 sm:pt-[100px] px-4 sm:px-8 bg-slate-50 min-h-screen">
      {/* Sección: Productos */}
      <section className="max-w-7xl mx-auto mb-20">
        <header className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 mb-3 tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-gray-600 text-lg">
            Diseñados para los amantes de lo único y lo personalizado.
          </p>
        </header>

        {PRODUCTS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No hay productos disponibles por ahora.
          </p>
        )}
      </section>

      {/* Sección: Próximos productos */}
      <section className="max-w-7xl mx-auto mb-24">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">
            Próximamente
          </h2>
          <span className="text-sm text-gray-500 italic">
            ¡Nuevos diseños en camino!
          </span>
        </header>

        {COMING_SOON.length > 0 ? (
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-6 w-max">
              {COMING_SOON.map((c) => (
                <ComingSoonCard key={c.id} item={c} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Estamos trabajando en nuevos productos. ¡Vuelve pronto!
          </p>
        )}
      </section>
    </main>
  );
}
