import { Navbar } from "@/components/Navbar";
import { ToogleTheme } from "@/components/ToogleTheme";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
export function DefaultLayout() {
    // const isSmallScreen = window.innerWidth <= 380

    return (
        <>
            <motion.header
                initial={{ opacity: 0, x: -30 }}
                animate={{
                    opacity: 1, x: 0, transition: {
                        duration: 0.5, delay: .3
                    }
                }}
                className="font-telegraf border-b border-input">
                <div className="max-w-[680px] py-5 px-8 flex items-center justify-between m-auto">
                    {<Navbar />}
                    <ToogleTheme />
                </div>
            </motion.header>
            <main className="px-8 mt-5 pb-5 flex-col font-telegraf-light h-full max-w-[680px] m-auto flex flex-column font-medium">
                <Outlet />
            </main></>
    )
}