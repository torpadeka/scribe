"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdPerson } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { put } from "@vercel/blob";

export default function ProfileUserAvatar({
    image,
    email,
}: {
    image: string;
    email: string;
}) {
    const [mounted, setMounted] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<String>("");

    // UNSAFE, TOKEN IS EXPOSED TO CLIENT, NEED TO EXPORT LOGIC TO SERVER-SIDE SOMEHOW (APIs)
    console.log(process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN);
    // On mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputFile = e.target.files![0];
        const validFileTypes = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/gif",
        ];

        if (inputFile) {
            if (!validFileTypes.includes(inputFile.type)) {
                setError("Please upload a valid image file! (JPG, PNG, GIF)");
                setFile(null);
                return;
            }

            const maxBytes = 4 * 1024 * 1024;
            if (inputFile.size > maxBytes) {
                setError("File size should not exceed 4MB!");
                setFile(null);
                return;
            }

            setFile(inputFile);
            setError("");
        }
    };

    const handleFileSubmit = async () => {
        if (file === null) {
            setError("No file uploaded!");
            return;
        }

        const fileExtension = file.name.split(".").pop();

        const { url: imagePath } = await put(
            `profileImages/${email}.${fileExtension}`,
            file,
            {
                access: "public",
                token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
            }
        );

        // Update the user image URL in the database using a server action

        // pls make API for this, and also the file putting process
    };

    return (
        <>
            {mounted && (
                <>
                    <Avatar className="w-36 h-36">
                        <Input
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif"
                            className="w-36 h-36 fixed flex items-center justify-center rounded-full opacity-0 hover:opacity-30 bg-gray-700 cursor-pointer z-50"
                            onChange={handleFileChange}
                        ></Input>
                        <AvatarImage className="z-0" src={image} />
                        <AvatarFallback>
                            <IoMdPerson size={25} />
                        </AvatarFallback>
                    </Avatar>
                    <Button onClick={handleFileSubmit}>Update</Button>
                    <div>{error}</div>
                </>
            )}
            {!mounted && <Skeleton className="w-48 h-48 rounded-full" />}
        </>
    );
}
