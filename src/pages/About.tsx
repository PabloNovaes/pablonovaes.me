import { PageInnitalText } from "@/components/PageInittialText";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import tcc from "../assets/tcc.jpg";

export function About() {
    return (
        <div className="grid gap-8 ">
           
            <div className="grid-gap-4">
                <PageInnitalText
                    title="Experiências" />
                <Reveal>
                    <motion.div initial={{ opacity: 0, x: -40 }} className="item grid justify-items-center gap-2">
                        <Timeline />
                    </motion.div>
                </Reveal>
            </div>
            <PageInnitalText
                title="Inicio na área"
                content={`
                    Comecei a estudar programação a pouco mais de 1 ano e seis meses, 
                    tenho formação Técnica em Desenvolvimento de Sistemas pela ETEC Uirapuru. Lá eu participei do desenvolvimento de um projeto full-stack
                    destinado ao meu TCC, onde fui responsavel por toda codifição do projeto, da prototipagem de média e alta definição, e do design.
                `} />
            <Reveal>
                <motion.div initial={{ opacity: 0, x: -40 }} className="item grid justify-items-center gap-2">
                    <div className="card w-full border overflow-hidden shadow-md rounded-lg relative text-zinc-50">
                        <img src={tcc} className="object-cover w-full" />
                    </div>
                    <p className="italic">{"apresentação final do TCC da minha turma em formato de workshop"}</p>
                </motion.div>
            </Reveal>
        </div>
    )
}

