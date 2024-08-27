import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DashboardContent from "@/components/layout/DashboardContent";

export default async function DashboardPage() {
    const session = await auth();

    if (session === null) {
        redirect("/auth");
    }

    return (
        <>
            <div className="w-screen h-screen flex pt-20 bg-slate-100 dark:bg-slate-900">
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center px-10 py-4">
                    {/* for Skeleton loading placeholder */}
                    {!session && <></>}
                    {session && (
                        <>
                            <div className="w-full flex justify-start items-center">
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
                            <DashboardContent></DashboardContent>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
