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
        description: 'Este é meu principal projeto até o momento, o mesmo foi desenvolvido para o meu TCC do curso técnico. Consiste em um e-commerce voltado para pessoas quem gostam de leitura, ele traz tambem um ambiente de rede-social, podendo ser feito postagens, comentarios, realizar bate-papo com outros usuários e etc.',
        image: '../assets/projects/ts-table.jpg',
        stack: ['TypeScript', 'React', 'Shadcn-ui'],
        codeUrl: 'https://github.com/pablonovaes/ts-table',
        deploy: 'https://tstable.vercel.app/app',

    },
    'ts-form': {
        name: 'Ts-Form',
        description: 'Este é meu principal projeto até o momento, o mesmo foi desenvolvido para o meu TCC do curso técnico. Consiste em um e-commerce voltado para pessoas quem gostam de leitura, ele traz tambem um ambiente de rede-social, podendo ser feito postagens, comentarios, realizar bate-papo com outros usuários e etc.',
        image: '../assets/projects/ts-form.jpg',
        stack: ['TypeScript', 'React', 'Shadcn-ui', 'Zod'],
        codeUrl: 'https://github.com/pablonovaes/ts-form',
        deploy: 'https://ts-form.vercel.app',

    },
    firechat: {
        name: 'Firechat',
        description: 'O projeto consiste em um pequeno chat que foi deenvolvido utilizado Firebase, serviu como teste para o chat que iria desenvolver em outro projeto.',
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
