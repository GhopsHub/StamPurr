type Product = {
  id: number;
  name: string;
  price?: string;
  img?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="h-44 bg-gray-100 flex items-center justify-center">
        {product.img ? (
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-gray-400">Imagen no disponible</div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          {product.price && (
            <p className="text-amber-900 mt-2">{product.price}</p>
          )}
        </div>

        <div className="mt-4">
          <button className="w-full bg-amber-900 text-white py-2 rounded-md hover:opacity-95 transition">
            Ver producto
          </button>
        </div>
      </div>
    </article>
  );
}
