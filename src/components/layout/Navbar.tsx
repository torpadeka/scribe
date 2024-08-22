import { RiQuillPenFill } from "react-icons/ri";
import DarkModeButton from "./DarkModeButton";
import { auth } from "@/auth";
import NavbarUserAvatar from "./NavbarUserAvatar";
import { getUserByEmail } from "@/actions";
import { baseUrl } from "@/app/baseUrl";

export default async function Navbar() {
    const session = await auth();

    const sessionEmail = session?.user?.email;

    let image = "";
    
    if (sessionEmail) {
        const user = await getUserByEmail(sessionEmail);
        image = user.image;
    }

    return (
        <>
            <div className="w-screen h-20 fixed top-0 flex items-center justify-between px-10 bg-slate-50 dark:bg-slate-950">
                <div className="flex items-center gap-2">
                    <RiQuillPenFill size={25} />
                    <div className="text-2xl">scribe</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <DarkModeButton></DarkModeButton>
                    <NavbarUserAvatar image={image}></NavbarUserAvatar>
                </div>
            </div>
        </>
    );
}
