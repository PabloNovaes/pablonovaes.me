import { stackImages } from '@/data/stack';
import { motion } from 'framer-motion';

export interface ImageProps {
    name?: string;
    src?: string
}

export function Stack() {
    return (
        <>
            <section>
                <div className=' grid gap-2 place-content-end grid-cols-2 lg:grid-cols-3'>
                    {stackImages.map(({ name, src }, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1, y: 0, transition: {
                                    duration: 0.5, delay: 0.2 * index
                                }
                            }}
                            id="content"
                            className="flex p-2 items-center gap-4 h-fit rounded-xl bg-primary-foreground">
                            <div className="stack-img-container p-2 flex items-center justify-center rounded-lg relative overflow-hidden">
                                <img src={
                                    src
                                } alt={name} className="size-6 z-10" />
                                <img src={src} alt={name} className="blur-lg size-12 absolute inset-0 opacity-80 z-0" />
                            </div>
                            <p className="font-semibold text-sm">{name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}


