import { Button } from "@/components/ui/button";
import { ArrowCircleDown, Bag, ReadCvLogo, Student } from "@phosphor-icons/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import cv from "../data/Pablo Novaes - Desenvolvedor Web.pdf";

import { PageInnitalText } from "@/components/PageInittialText";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";


export function Home() {
    const { name, category, link, midia } = projects.filter(project => project.name === "iFast Store")[0]

    return (
        <>
            <div className="grid gap-4">
                <PageInnitalText
                    title="Web Developer"
                    content="Olá, meu nome é Pablo. Sou desenvolvedor web com quase 2 anos de experiência, atuando tanto no desenvolvimento Front-End quanto Back-End. Tenho familiaridade com tecnologias como React, Next.js, Node.js, Express, entre outras. Estou sempre buscando aperfeiçoar meus conhecimentos para crescer e evoluir como Dev."
                />
                <motion.footer
                    initial={{ opacity: 0, x: -40 }}
                    animate={{
                        opacity: 1, x: 0, transition: {
                            duration: .5, delay: .6
                        }
                    }}
                    className="flex gap-2 mt-1">
                    <Button
                        variant={"outline"}
                        className="rounded-full hover:scale-[.98] transition-all shadow font-semibold text-zinc-500">
                        <a target="_blank"
                            className="flex gap-1 font-telegraf-light font-thin items-center"
                            href="https://github.com/pablonovaes">
                            <GitHubLogoIcon />
                            Github
                        </a>
                    </Button>
                    <Button
                        variant={"outline"}
                        className="rounded-full hover:scale-[.98] transition-all shadow font-semibold text-zinc-500">
                        <a target="_blank"
                            className="flex gap-1 font-telegraf-light font-thin items-center"
                            href="https://linkedin.com/in/pablonovaes">
                            <LinkedInLogoIcon />
                            LinkedIn
                        </a>
                    </Button>
                    <Button
                        variant={"outline"}
                        className="rounded-full hover:scale-[.98] transition-all shadow font-semibold text-zinc-500">
                        <a target="_blank"
                            className="flex gap-1 font-telegraf-light font-thin items-center"
                            href={cv}>
                            <ReadCvLogo size={16} weight="fill" />
                            Read CV
                        </a>
                    </Button>
                </motion.footer>
            </div>
            <div className="mt-8">
                <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={{
                        opacity: 1, x: 0, transition: {
                            duration: .5, delay: .6
                        }
                    }}
                    className="flex items-center gap-2 text-lg">
                    Principal projeto
                    <ArrowCircleDown weight="light" />
                </motion.span>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{
                        opacity: 1, x: 0, transition: {
                            duration: .5, delay: .9
                        }
                    }}
                    className="card w-full border bg-primary-foreground overflow-hidden shadow-md mt-4 rounded-lg relative  text-zinc-50">
                    {
                        midia.includes(".mp4")
                            ? <video autoPlay src={midia} className="object-cover w-full" />

                            : <img src={midia} className="object-cover w-full" />
                    }
                    <div className="flex items-end justify-between absolute left-0 bottom-0 px-3 pb-2 pt-8 w-full bg-gradient-to-t from-black tex to-transparent">
                  <p>{name}</p>

                  <Badge className="mb-1 flex gap-1 bg-primary-foreground text-primary">
                    {category !== 'trabalho'
                      ? <Student size={15} weight="fill" />
                      : <Bag size={15} weight="fill" />
                    }
                    {category}
                  </Badge>
                </div>
                    <div className="card-blur absolute invisible bg-zinc-800/50 dark:bg-zinc-950/50 grid place-content-center backdrop-blur-[3px] inset-0 opacity-0 transition-opacity duration-300">
                        <NavLink to={`/projects/${link}`} className="card-text text-3xl flex justify-center cursor-pointer relative ">
                            Ver
                            <span className="absolute opacity-0 w-full left-0 h-[2px] bg-zinc-300 -bottom-4 transition-all"></span>
                        </NavLink>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
