import { stagger, useAnimate, useAnimation, useInView } from "framer-motion";
import { ComponentProps, ReactNode, useEffect, useRef } from "react";


interface RevealProps extends ComponentProps<'div'> {
    children: ReactNode
}

function useStackItensAnimation(isInView: boolean) {
    const [scope, animate] = useAnimate();
    const staggerMenuItems = stagger(0.8, { startDelay: 0.35 });

    useEffect(() => {
        animate(
            ".item",
            isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 },
            {
                duration: 1.5,
                delay: staggerMenuItems,
                type: "spring",
                bounce: 0,
            }
        );
    }, [isInView])

    return scope;
}

export function Reveal({ children, className }: RevealProps) {
    const ref = useRef(null)
    const isInVIew = useInView(ref, { once: true, amount: "all", margin: "0px 100px 0px" })

    const useStackAnimation = useAnimation()
    const scope = useStackItensAnimation(isInVIew)

    useEffect(() => {
        if (!isInVIew) return
        useStackAnimation.start('visible')

    }, [isInVIew])

    return (
        <div ref={scope}>
            <div ref={ref} className={className}>
                {children}
            </div>
        </div>
    )
}