import { redirect } from "next/navigation";

export default function Index() {
    redirect("/dashboard");
    return null;
}
