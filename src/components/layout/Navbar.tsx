import { RiQuillPenFill } from "react-icons/ri";
import DarkModeButton from "./DarkModeButton";
import { auth } from "@/auth";
import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import NavbarUserAvatar from "./NavbarUserAvatar";

const Navbar = async () => {
    const session = await auth();

    const sessionEmail = session?.user?.email;

    let imageUrl = "";

    if (sessionEmail) {
        const user = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, sessionEmail));

        imageUrl = user[0].image;
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
                    <NavbarUserAvatar imageUrl={imageUrl}></NavbarUserAvatar>
                </div>
            </div>
        </>
    );
};

export default Navbar;
