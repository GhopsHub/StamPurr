export default function Footer() {
  return (
    <footer
      className="border-t mt-12"
      style={{ backgroundColor: "rgb(241, 90, 41)" }}
    >
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-white flex flex-col md:flex-row items-center justify-between">
          <span>
            © {new Date().getFullYear()} StamPurr. Todos los derechos
            reservados.
          </span>
          <span className="mt-2 md:mt-0">Hecho con ❤️ en Colombia</span>
        </div>
      </div>
    </footer>
  );
}
