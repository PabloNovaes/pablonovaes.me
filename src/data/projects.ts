import firechat from "@/assets/projects/firechat.jpg"
import mybook from "@/assets/projects/mybook.jpg"
import tsForm from "@/assets/projects/ts-form.jpg"
import tsTable from "@/assets/projects/ts-table.jpg"

interface ProjectsProps {
    name: string
    description: string
    image: string
    codeUrl: string
    deploy: string
    stack: string[]
    observation?: string
}


export const projects: Record<string, ProjectsProps> = {
    mybook: {
        name: 'MyBook',
        description: 'Este é meu principal projeto até o momento, o mesmo foi desenvolvido para o meu TCC do curso técnico. Consiste em um e-commerce voltado para pessoas quem gostam de leitura, ele traz tambem um ambiente de rede-social, podendo ser feito postagens, comentarios, realizar bate-papo com outros usuários e etc.',
        image: '../assets/projects/mybook.jpg',
        stack: ['EJS', 'CSS', 'JavaScript', 'Node', 'ExpressJS', 'Prisma', 'Neon (postgreSql)', 'Firebase'],
        codeUrl: 'https://github.com/pablonovaes/mybook',
        deploy: 'https://mybook-rho.vercel.app',
        observation: 'O projeto não esta 100% concluido.'

    },
    'ts-table': {
        name: 'Ts-Table',
        description: 'Este foi o primeiro projeto em React que desenvolvi sozinho sem auxilio de curso ou coisa do tipo, e por mais simples que seja, tive um aprendizado significativo em react e ts. É uma tabela com dados estáticos, podendo ser feita a inclusao de um novo produto e aplicação de filtros.',
        image: '../assets/projects/ts-table.jpg',
        stack: ['TypeScript', 'React', 'Tailwind', 'Shadcn-ui'],
        codeUrl: 'https://github.com/pablonovaes/ts-table',
        deploy: 'https://tstable.vercel.app',

    },
    'ts-form': {
        name: 'Ts-Form',
        description: 'Um formulario em react com ts, onde pude praticar ainda mais o uso do Zod para lidar com formulario (desde sua configuração no projeto, até o seu uso em si), seu uso não foi muito "intenso" devido a simplicidade do projeto.',
        image: '../assets/projects/ts-form.jpg',
        stack: ['TypeScript', 'React', 'Tailwind', 'Shadcn-ui', 'Zod'],
        codeUrl: 'https://github.com/pablonovaes/ts-form',
        deploy: 'https://ts-form.vercel.app',

    },
    firechat: {
        name: 'Firechat',
        description: 'O projeto consiste em um pequeno chat que foi desenvolvido utilizando o Firebase, serviu como teste para o chat que iria desenvolver em outro projeto.',
        image: '../assets/projects/firechat.jpg',
        stack: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/pablonovaes/firechat',
        deploy: 'https://pablonovaes.github.io/Firechat',
    }
}

export const projectsImages = [
    {name: "MyBook", src: mybook},
    {name: "Ts-Table", src: tsTable},
    {name: "Ts-Form", src: tsForm},
    {name: "Firechat", src: firechat},
]
