
import css from "@/assets/techs/css.svg"
import docker from "@/assets/techs/docker.svg"
import express from "@/assets/techs/express.svg"
import fastify from "@/assets/techs/fastify.svg"
import figma from "@/assets/techs/figma.svg"
import firebase from "@/assets/techs/firebase.svg"
import git from "@/assets/techs/git.svg"
import github from "@/assets/techs/github.svg"
import html5 from "@/assets/techs/html5.svg"
import JavaScript from "@/assets/techs/javascript.svg"
import mysql from "@/assets/techs/mysql.svg"
import node from "@/assets/techs/node.svg"
import prisma from "@/assets/techs/prisma.svg"
import react from "@/assets/techs/react.svg"
import styledComponents from "@/assets/techs/styled components.svg"
import tailwind from "@/assets/techs/tailwind.svg"
import typescript from "@/assets/techs/typescript.svg"
import zod from "@/assets/techs/zod.svg"

export const stackImages = [
    { name: 'HTML5', type: "Front-End", src: html5 },
    { name: 'CSS', type: "Front-End", src: css },
    { name: 'JavaScript', type: "Front-End", src: JavaScript },
    { name: 'TypeScript', type: "Front-End", src: typescript },
    { name: 'Tailwind', type: "Front-End", src: tailwind },
    { name: 'Styled Components', type: "Front-End", src: styledComponents },
    { name: 'React', type: "Front-End", src: react },
    { name: 'Zod', type: "Front-End", src: zod },
    { name: 'Node', type: "Back-End", src: node },
    { name: 'Mysql', type: "Back-End", src: mysql },
    { name: 'Prisma', type: "Back-End", src: prisma, invert: true },
    { name: 'Express', type: "Back-End", src: express },
    { name: 'Fastify', type: "Back-End", src: fastify, invert: true },
    { name: 'Firebase', type: "Back-End", src: firebase },
    { name: 'Git', type: "Extra", src: git },
    { name: 'Github', type: "Extra", src: github, invert: true },
    { name: 'Figma', type: "Extra", src: figma },
    { name: 'Docker', type: "Back-End", src: docker },
]