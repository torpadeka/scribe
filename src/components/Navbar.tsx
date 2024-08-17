import { comfortaa } from "@/app/fonts";

import { RiQuillPenFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <div className="w-screen h-20 fixed top-0 flex items-center justify-between px-10 bg-slate-100">
                <div className="flex items-center gap-2">
                    <RiQuillPenFill size={25} />
                    <div className="text-2xl">
                        scribe
                    </div>
                </div>
                <div className={comfortaa.className}>torpadeka</div>
            </div>
        </>
    );
};

export default Navbar;
