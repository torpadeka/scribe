import { getUserByEmail } from "@/actions";
import { auth } from "@/auth";
import BreadcrumbRedirectLink from "@/components/layout/BreadcrumbRedirectLink";
import ProfileUserAvatar from "@/components/layout/ProfileUserAvatar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    // Session Check
    const session = await auth();

    if (!session) {
        redirect("/auth");
    }

    const sessionEmail = session?.user?.email;

    let image = "";
    let username = "";

    if (sessionEmail) {
        const user = await getUserByEmail(sessionEmail);

        image = user.image;
        username = user.username;
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-col items-start justify-start gap-4 pt-20 bg-slate-100 dark:bg-gray-900">
                <div className="w-full h-full flex flex-col items-start justify-start text-center px-10 pt-4">
                    {/* LEFT SIDE */}
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList className="text-base">
                                <BreadcrumbItem>
                                    <BreadcrumbRedirectLink route="/dashboard">
                                        Dashboard
                                    </BreadcrumbRedirectLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator></BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Profile</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="w-full h-72 flex items-center justify-center gap-6">
                        <ProfileUserAvatar
                            image={image}
                            email={sessionEmail!}
                        ></ProfileUserAvatar>
                        <div className="text-3xl font-bold">
                            <span>{username}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
