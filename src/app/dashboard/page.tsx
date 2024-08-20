import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function DashboardPage() {
    // TEST SELECT QUERY
    // const result = await db.select().from(UsersTable);
    // console.log(result);

    // Session Check
    const session = await auth();

    if (session === null) {
        redirect("/auth");
    }

    return (
        <>
            <div className="w-screen h-screen flex pt-20 bg-slate-100 dark:bg-slate-900">
                <div className="w-full h-full flex flex-col items-start justify-start text-center px-10 pt-4">
                    {/* for Skeleton loading placeholder */}
                    {!session && <></>}
                    {session && (
                        <div>
                            <Breadcrumb>
                                <BreadcrumbList className="text-base">
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Dashboard
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator></BreadcrumbSeparator>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
