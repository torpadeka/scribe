"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosCamera, IoMdPerson } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ProfileUserAvatar({
    image,
    email,
}: {
    image: string;
    email: string;
}) {
    const [mounted, setMounted] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<String>("");

    const fileInput = useRef<HTMLInputElement>(null);

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

        const formData = new FormData();
        formData.append("email", email);
        formData.append("file", file);

        const response = await fetch("/api/user/updateImage", {
            method: "POST",
            credentials: "include",
            body: formData,
        });

        console.log("Update User Image Response: ", response);
    };

    const openFileInput = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };

    return (
        <>
            {mounted && (
                <>
                    <Avatar className="w-36 h-36">
                        <div
                            className="w-36 h-36 fixed flex items-center justify-center rounded-full opacity-0 hover:opacity-50 bg-gray-950 z-10 cursor-pointer transition-all duration-500"
                            onClick={openFileInput}
                        >
                            <div className="flex items-center justify-center">
                                <Input
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.gif"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    ref={fileInput}
                                ></Input>
                                <IoIosCamera color="white" size={75} />
                            </div>
                        </div>
                        <AvatarImage src={image} />
                        <AvatarFallback>
                            <IoMdPerson size={75} />
                        </AvatarFallback>
                    </Avatar>
                    <div>{error}</div>
                    <Button onClick={handleFileSubmit}>Update</Button>
                </>
            )}
            {!mounted && <Skeleton className="w-48 h-48 rounded-full" />}
        </>
    );
}
