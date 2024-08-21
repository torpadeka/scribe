import { Button } from "@/components/ui/button";
import { MdError } from "react-icons/md";
import { RiQuillPenFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import ErrorExitButton from "@/components/layout/ErrorExitButton";

export default function ErrorPage() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
                <div className="flex items-center gap-2">
                    <RiQuillPenFill size={62.5} />
                    <div className="text-5xl">scribe</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <MdError size={40} />
                    <div className="text-xl">An Error Has Occured</div>
                </div>
                <ErrorExitButton></ErrorExitButton>
            </div>
        </>
    );
}
