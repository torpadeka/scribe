import { auth, signIn, signOut } from "@/auth";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function HomePage() {
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
            <Navbar></Navbar>
            <div className="w-screen h-screen flex bg-slate-100 dark:bg-slate-900">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <div>Main content goes here</div>
                    {session ? <div>Logged In</div> : <div>Not Logged In</div>}
                    {session ? (
                        <div>
                            <form
                                action={async (formData) => {
                                    "use server";
                                    await signOut();
                                }}
                            >
                                <Button type="submit">Logout</Button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <form
                                action={async (formData) => {
                                    "use server";
                                    await signIn();
                                }}
                            >
                                <Button type="submit">Login</Button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
