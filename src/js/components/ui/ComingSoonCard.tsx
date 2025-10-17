type Coming = {
  id: number;
  name: string;
};

export default function ComingSoonCard({ item }: { item: Coming }) {
  return (
    <div className="min-w-[220px] bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div className="h-28 bg-gray-50 rounded flex items-center justify-center mb-3">
        <span className="text-gray-400">Imagen</span>
      </div>
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-amber-100 text-amber-900 rounded">
          Próximamente
        </span>
      </div>
    </div>
  );
}
