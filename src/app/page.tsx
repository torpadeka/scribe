import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { UsersTable } from "../../drizzle/schema";
import Navbar from "@/components/Navbar";
const db = drizzle(sql);

export default async function Home() {
    // TEST SELECT QUERY
    // const result = await db.select().from(UsersTable);
    // console.log(result);

    return (
        <>
            <Navbar></Navbar>
            <div className="w-screen h-screen pt-20 bg-slate-200">
                <div className="w-full h-full items-center justify-center flex text-center">
                    Main content goes here
                </div>
            </div>
        </>
    );
}
