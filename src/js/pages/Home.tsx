import { TextRotate } from "../components/animations/TextRotate/text-rotate";
import { LayoutGroup, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-28 sm:pt-[100px]">
      {" "}
      <div>
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
                  "choices",
                  "gifts",
                  "🐾🐾🐾",
                  "treasures",
                  "treats",
                  "😺😺",
                  "additions",
                  "surprises",
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
    </div>
  );
}
