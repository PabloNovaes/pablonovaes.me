import { Button } from "@/components/ui/button";
import { ArrowCircleDown, ReadCvLogo } from "@phosphor-icons/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import cv from "../data/Pablo Novaes - Desenvolvedor Web.pdf";

import { PageInnitalText } from "@/components/PageInittialText";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import mybook from "../assets/projects/mybook.jpg";

export function Home() {
    return (
        <>
            <div className="grid gap-4">
                <PageInnitalText
                    title="Web Developer"
                    content="Olá, me chamo Pablo, sou desenvolvedor Web, estou sempre atraz de aprender mais e ampliar meus conhecimentos."
                />
                <motion.footer 
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
                <span className="flex items-center gap-2 text-lg">
                    Principal projeto
                    <ArrowCircleDown weight="light" />
                </span>
                <div className="card w-full border bg-primary-foreground overflow-hidden shadow-md mt-4 rounded-lg relative  text-zinc-50">
                    <img src={mybook} alt="" className="object-cover w-full" />
                    <p className="absolute left-0 bottom-0 pl-3 pb-3 pt-8 w-full bg-gradient-to-t from-black tex to-transparent">MyBook</p>
                    <div className="card-blur absolute invisible bg-zinc-800/50 dark:bg-zinc-950/50 grid place-content-center backdrop-blur-[3px] inset-0 opacity-0 transition-opacity duration-300">
                        <NavLink to="/projects/mybook" className="card-text text-3xl flex justify-center cursor-pointer relative ">
                            Ver
                            <span className="absolute opacity-0 w-full left-0 h-[2px] bg-zinc-300 -bottom-4 transition-all"></span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}