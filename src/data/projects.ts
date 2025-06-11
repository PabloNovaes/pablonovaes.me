import visitorArea from "@/assets/projects/area-de-visitante.mp4"
import ifaststore from "@/assets/projects/Fast Store - dashboard.mp4"
import lp from "@/assets/projects/fast-store-lp.mp4"
import firechat from "@/assets/projects/firechat.jpg"
import mybook from "@/assets/projects/mybook.png"
import tsApi from "@/assets/projects/ts-api.jpg"
import tsForm from "@/assets/projects/ts-form.jpg"
import tsTable from "@/assets/projects/ts-table.jpg"

interface Project {
    name: string
    description: string
    midia: string
    codeUrl?: string
    stack: string[]
    deploy?: string
    observation?: string
    category: string
    link: string
}


export const projects: Project[] = [
    {
        name: 'Livo Área de Visitante',
        description: 'Landing page desenvolvida para substituir o site atual do mesmo cliente para quem criei o projeto iFast Store (e-commerce).',
        midia: visitorArea,
        stack: ['React', 'TypeScript', 'Tailwind', 'Node'],
        // codeUrl: 'https://github.com/pablonovaes/lp',
        category: 'trabalho',
        // deploy: 'https://tecnicopcadomicilio.vercel.app/',
        link: "area-de-visitante"
    },
    {
        name: 'Landing Page - Técnico a Domicílio',
        description: 'Landing page desenvolvida para substituir o site atual do mesmo cliente para quem criei o projeto iFast Store (e-commerce).',
        midia: lp,
        stack: ['React', 'TypeScript', 'Tailwind'],
        // codeUrl: 'https://github.com/pablonovaes/lp',
        category: 'trabalho',
        deploy: 'https://tecnicopcadomicilio.vercel.app/',
        link: "tecnico-a-domicilio"
    },
    {
        name: 'iFast Store',
        description: 'Este é meu primeiro projeto como freelancer, trata-se de um e-commerce para venda de iPhones, Notebooks e outros produtos. O mesmo foi desenvolvido com Next Js, conta com uma área administrativa para controle de produtos, estoque e pedidos',
        midia: ifaststore,
        stack: ['Next', 'React', 'TypeScript', 'Tailwind', 'Prisma', 'Firebase', 'Postgres'],
        // codeUrl: 'https://github.com/pablonovaes/iFastStore',
        category: 'trabalho',
        deploy: 'https://ifaststore.it',
        link: "ifaststore"
    },
    {
        name: 'MyBook',
        description: 'Este é meu principal projeto até o momento, o mesmo foi desenvolvido para o meu TCC do curso técnico. Consiste em um e-commerce voltado para pessoas quem gostam de leitura, ele traz tambem um ambiente de rede-social, podendo ser feito postagens, comentarios, realizar bate-papo com outros usuários e etc.',
        midia: mybook,
        stack: ['HTML5', 'CSS', 'JavaScript', 'Node', 'ExpressJS', 'Prisma', 'Postgres', 'Firebase'],
        codeUrl: 'https://github.com/pablonovaes/mybook',
        category: 'pessoal',
        deploy: 'https://mybook-rho.vercel.app',
        observation: 'O projeto não esta 100% concluido.',
        link: "mybook"
    },
    // {
    //     name: 'TS Table',
    //     description: 'Este foi o primeiro projeto em React que desenvolvi sozinho sem auxilio de curso ou coisa do tipo, e por mais simples que seja, tive um aprendizado significativo em react e ts. É uma tabela com dados estáticos, podendo ser feita a inclusao de um novo produto e aplicação de filtros.',
    //     midia: tsTable,
    //     stack: ['React', 'TypeScript', 'Tailwind',],
    //     codeUrl: 'https://github.com/pablonovaes/ts-table',
    //     category: 'pessoal',
    //     deploy: 'https://tstable.vercel.app',
    //     link: "ts-table"
    // },
    {
        name: 'TS Api',
        description: 'Primeira APi que faço aplicando patterns e conceitos que ainda não havia utilizado, como SRP e DIP do solid, injeção de dependência, além de utilizar novas tecnologiaas e ser minha primeira aplicação onde fiz a inclusão de testes, tanto unitarios quanto de integração.',
        midia: tsApi,
        stack: ['Fastify', 'TypeScript', 'Docker', 'Jest', 'Postgres', 'Prisma'],
        category: 'pessoal',
        codeUrl: 'https://github.com/pablonovaes/ts-api',
        link: "ts-api"
    },
    // {
    //     name: 'TS Form',
    //     description: 'Um formulario em react com ts, onde pude praticar ainda mais o uso do Zod para lidar com formulario (desde sua configuração no projeto, até o seu uso em si), seu uso não foi muito "intenso" devido a simplicidade do projeto.',
    //     midia: tsForm,
    //     stack: ['React', 'TypeScript', 'Tailwind', 'Zod', 'Shadcn-ui'],
    //     codeUrl: 'https://github.com/pablonovaes/ts-form',
    //     category: 'pessoal',
    //     deploy: 'https://ts-form.vercel.app',
    //     link: "ts-form"
    // },
    // {
    //     name: 'Firechat',
    //     description: 'O projeto consiste em um pequeno chat que foi desenvolvido utilizando o Firebase, serviu como teste para o chat que iria desenvolver em outro projeto.',
    //     midia: firechat,
    //     stack: ['HTML5', 'CSS', 'JavaScript', 'Firebase'],
    //     codeUrl: 'https://github.com/pablonovaes/firechat',
    //     category: 'pessoal',
    //     deploy: 'https://pablonovaes.github.io/Firechat',
    //     link: "firechat"
    // }
]

export const projectsImages = [
    { name: "Lading Page", src: lp, link: "ifaststore" },
    { name: "iFast Store", src: ifaststore, link: "ifaststore" },
    { name: "MyBook", src: mybook, link: "mybook" },
    { name: "TS Api", src: tsApi, link: "ts-api" },
    { name: "TS Table", src: tsTable, link: "ts-table" },
    { name: "TS Form", src: tsForm, link: "ts-form" },
    { name: "Firechat", src: firechat, link: "firechat" },
]
