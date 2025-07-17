import { TextRotate } from '../components/animations/TextRotate/text-rotate'
import { LayoutGroup, motion } from 'framer-motion'
import logo from '../../assets/images/stampurr.png'

export default function Home() {
    return (
        <div>
            <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">

                <LayoutGroup>
                    <motion.div
                        className="flex flex-wrap justify-center items-center gap-2 text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl"
                        layout
                    >
                        <motion.span
                            className="pt-1"
                            layout
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        >
                            These products are&nbsp;<span className="text-amber-900">purr-fect</span>
                        </motion.span>

                        <TextRotate
                            texts={[
                                'choices',
                                'gifts',
                                '🐾🐾🐾',
                                'treasures',
                                'treats',
                                '😺😺',
                                'additions',
                                'surprises',
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
                </LayoutGroup>
            </div>

            <div className="min-h-[calc(100vh-56px)] w-full flex items-center justify-center text-center">
                <div className="flex flex-col items-center gap-4 text-7xl">
                    <img src={logo} alt="Stampurr logo" className="h-44" />
                    <p className="font-AntonSC">StamPurr</p>

                    <img src={logo} alt="Stampurr logo" className="h-44" />
                    <p className="font-Ultra">StamPurr</p>
                </div>
            </div>

        </div>
    )
}
