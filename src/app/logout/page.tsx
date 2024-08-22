import { MdError } from "react-icons/md";
import { RiQuillPenFill } from "react-icons/ri";
import LogoutButton from "@/components/layout/LogoutButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
    // Session Check
    const session = await auth();

    if (!session) {
        redirect("/auth");
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
                <div className="flex items-center gap-2">
                    <RiQuillPenFill size={62.5} />
                    <div className="text-5xl">scribe</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <MdError size={40} />
                    <div className="text-xl">Do you want to Logout?</div>
                </div>
                <LogoutButton></LogoutButton>
            </div>
        </>
    );
}
