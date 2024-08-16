import { cn } from "@/lib/utils";
import { Comfortaa } from 'next/font/google'
import { RiQuillPenFill } from "react-icons/ri";

const comfortaa = Comfortaa({
    weight: '400',
    subsets: ["latin"]
})

const Navbar = () => {
    return (
        <>
            <div className="w-screen h-16 flex items-center justify-between mx-10 bg-slate-50">
                <div className="flex gap-1 items-center justify-center">
                    <RiQuillPenFill size={25}></RiQuillPenFill>
                    <div className={cn('text-2xl font-bold', comfortaa.className)}>scribe</div>
                </div>
                
                <div></div>
            </div>
        </>
    );
};

export default Navbar;
