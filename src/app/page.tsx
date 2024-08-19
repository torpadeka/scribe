import { auth, signIn, signOut } from "@/auth";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
    // TEST SELECT QUERY
    // const result = await db.select().from(UsersTable);
    // console.log(result);

    const session = await auth();

    return (
        <>
            <Navbar></Navbar>
            <div className="w-screen h-screen pt-20 bg-slate-200">
                <div className="w-full h-full items-center justify-center flex-col text-center">
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

                    {/* <div>
                        <form
                            action={async (formData) => {
                                "use server";
                                await signIn();
                            }}
                        >
                            <Button type="submit">Login</Button>
                        </form>
                    </div> */}
                </div>
            </div>
        </>
    );
}
