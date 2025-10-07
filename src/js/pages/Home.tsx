import { TextRotate } from "../components/animations/TextRotate/text-rotate";
import { LayoutGroup, motion } from "framer-motion";
// import product1 from "../../assets/images/products/product1.webp";
// import product2 from "../../assets/images/products/product2.webp";

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <LayoutGroup>
          <motion.div
            className="flex justify-center items-center gap-2 text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl"
            layout
          >
            <motion.span
              className="pt-1"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              &nbsp;
              <span className="text-amber-900">purr-fect</span>
            </motion.span>

            <motion.div layout>
              <TextRotate
                texts={[
                  // "choices",
                  // "gifts",
                  // "🐾🐾🐾",
                  // "treasures",
                  // "treats",
                  // "😺😺",
                  // "additions",
                  // "surprises",
                  "test",
                ]}
                mainClassName="text-white bg-amber-900 px-3 py-1.5 rounded-lg overflow-hidden flex justify-center items-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </div>

      <div className="px-4 sm:px-6 md:px-10 py-12 space-y-24">
        {/* Quiénes somos */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src={""}
            alt="Product 1"
            loading="lazy"
            className="w-[300px] sm:w-[320px] md:w-[310px] lg:w-[380px] xl:w-[400px] h-auto rounded-xl"
          />
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quiénes somos
            </h2>
            <p className="font-serif text-base sm:text-lg md:text-xl">
              Somos una marca que apuesta por lo único y lo personalizado. Nos
              encanta combinar creatividad, calidad y estilo para ofrecerte
              productos que reflejan tu gusto por lo estético y diferente. Si te
              gusta lo original, este es tu lugar.
            </p>
          </div>
        </section>

        {/* Nuestro propósito */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">
          <img
            src={""}
            alt="Product 2"
            loading="lazy"
            className="w-[300px] sm:w-[320px] md:w-[310px] lg:w-[380px] xl:w-[400px] h-auto rounded-xl"
          />
          <div className="flex-1 max-w-2xl text-center md:text-right">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro propósito
            </h3>
            <p className="font-serif text-base sm:text-lg md:text-xl">
              Queremos crear experiencias que conecten con la vida cotidiana de
              las personas. Nuestro propósito es inspirar alegría, estilo y
              buena vibra en cada producto, mientras promovemos el bienestar
              emocional y el amor por los animales.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
