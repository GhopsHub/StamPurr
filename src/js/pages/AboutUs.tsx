export default function AboutUs() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={""}
          alt="Product 1"
          loading="lazy"
          className="w-[300px] sm:w-[320px] md:w-[310px] lg:w-[380px] xl:w-[400px] h-auto rounded-xl"
        />
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiénes somos</h2>
          <p className="font-serif text-base sm:text-lg md:text-xl">
            Somos una marca que apuesta por lo único y lo personalizado. Nos
            encanta combinar creatividad, calidad y estilo para ofrecerte
            productos que reflejan tu gusto por lo estético y diferente. Si te
            gusta lo original, este es tu lugar.
          </p>
        </div>
      </section>
    </div>
  );
}
