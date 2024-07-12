import { PageInnitalText } from "@/components/PageInittialText";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import tcc from "../assets/tcc.jpg";

export function About() {
    return (
        <div className="grid gap-8 ">
            <PageInnitalText title="Sobre mim"
                content={`
                Olá, é um prazer em ter você aqui, me chamo Pablo, atualmente tenho 19 anos e moro na capital de São Paulo. 
                Sou desenvolvedor Web e por hora, mantenho-me mais focado em Front-End porém tenho conhecimentos de Back-End e futuramente pretendo aprender mais sobre. `}
            />
            <PageInnitalText
                title="Experiência relevante"
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