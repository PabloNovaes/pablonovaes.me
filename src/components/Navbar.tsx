import { ArrowLeft } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from './ui/button';


const links = [
    { src: '/', name: 'Inicio' },
    { src: '/projects', name: 'Projetos' },
    { src: '/about', name: 'Sobre' },
    { src: '/stack', name: 'Stack' }
]
export function Navbar() {
    const tabsRef = useRef<HTMLAnchorElement[]>([]);

    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const path = useLocation()
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1);
    };


    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft);
            setTabUnderlineWidth(currentTab?.clientWidth);
        }
        setActiveTabIndex(() => {
            return links.findIndex(link => link.src === path.pathname);
        })

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex, path]);



    return (
        <nav className="flex gap-4 items-center">
            {path.pathname.includes('/projects/') ? (
                <Button variant={'outline'} onClick={handleGoBack} className='p-3 h-full shadow-sm border
                bg-primary-foreground rounded-full'>
                    <ArrowLeft size={18} />
                </Button>
            ) : (
                <ul className="flex gap-4 overflow-hidden relative text-sm py-3 px-5 border border-input shadow-sm bg-primary-foreground rounded-full">
                    {!path.pathname.includes('projects/') && (
                        <span
                            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                            className="absolute inset-x-1 bottom-0 transition-all duration-[400ms] h-px rounded-t-lg bg-gradient-to-r from-violet-400/0 via-violet-400/80 to-violet-400/0"
                        ></span>
                    )}
                    {links.map((link, idx) => {
                        const { src, name } = link;
                        return (
                            <li key={idx}>
                                <NavLink
                                    ref={(el: HTMLAnchorElement) => (tabsRef.current[idx] = el)}
                                    className="inline-flex justify-center"
                                    onClick={() => setActiveTabIndex(idx)}
                                    to={src}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                //       <ul className="flex gap-4 overflow-hidden relative items-center text-sm py-3 px-5 border border-input shadow-sm bg-primary-foreground rounded-full">
                //       {!path.pathname.includes('projects/') && (
                //           <span
                //               style={{ left: tabUnderlineLeft - 7, width: tabUnderlineWidth + 14 }}
                //               className="absolute inset-x-1 transition-all duration-[400ms] h-[60%] rounded-full bg-primary"></span>
                //       )}
                //       {links.map((link, indx) => {
                //           const { src, name } = link;
                //           return (
                //               <li key={indx}>
                //                   <NavLink
                //                       ref={(el: HTMLAnchorElement) => (tabsRef.current[indx] = el)}
                //                       className={`inline-flex relative justify-center z-10 transition-colors duration-150 ${activeTabIndex === indx && 'text-primary-foreground'}`}
                //                       onClick={() => setActiveTabIndex(indx)}
                //                       id={link.name}
                //                       to={src}>
                //                       {name}
                //                   </NavLink>
                //               </li>
                //           );
                //       })}
                //   </ul>
            )}
        </nav>
    );
}
