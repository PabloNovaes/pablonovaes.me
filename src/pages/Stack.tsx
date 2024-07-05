import { PageInnitalText } from '@/components/PageInittialText';
import { stackImages } from '@/data/stack';
import { motion } from 'framer-motion';

export interface ImageProps {
    name?: string;
    src?: string;
    invert?: boolean;
}


export function Stack() {

    const types = ['Front-End', "Back-End", 'Extra']
    let delay = 0

    return (
        <>
            <PageInnitalText
                title='Minhas Tecnologias'
                content='Abaixo estão todas as tecnologias na qual possuo conhecimento e utilizo para desenvolver' />

            <section className='grid gap-8 mt-6'>
                {
                    types.map(type => (
                        <div>

                            <motion.h2
                                className='font-telegraf font-semibold'
                                key={type}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1, y: 0,
                                    transition: {
                                        duration: .5,
                                        delay: .2 * delay,
                                    }
                                }}>{type}</motion.h2>
                            <motion.div className=' grid gap-2 mt-2 place-content-end grid-cols-2 lg:grid-cols-3'>
                                {
                                    stackImages.filter(stack => stack.type === type).map(({ name, src, invert }) => {
                                        delay += .5
                                        return (
                                            <div>
                                                <motion.div
                                                    key={name}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: 1, y: 0,
                                                        transition: {
                                                            duration: .5,
                                                            delay: .2 * delay,
                                                        }
                                                    }}
                                                    id="content"
                                                    className="flex p-2 items-center gap-4 h-fit rounded-xl bg-primary-foreground">
                                                    <div style={{ fill: 'red' }} className={`invert-0 stack-img-container p-2 flex items-center justify-center rounded-lg relative overflow-hidden ${invert && 'dark:invert'}`}>
                                                        <img src={src} alt={name} className=" size-6 z-10" />
                                                        <img src={src} alt={name} className=" blur-lg size-12 absolute inset-0 opacity-80 z-0" />
                                                    </div>
                                                    <p className="font-semibold text-sm">{name}</p>
                                                </motion.div>
                                            </div>
                                        )
                                    })
                                }
                            </motion.div>
                        </div>


                    ))
                }

            </section>
        </>
    );
}


