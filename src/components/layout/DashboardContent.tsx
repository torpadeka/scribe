"use client";

import { useEffect } from "react";
import { createSwapy } from "swapy";

export default function DashboardContent() {
    useEffect(() => {
        const container = document.querySelector(".swapy-container");

        const swapy = createSwapy(container, {
            animation: "dynamic", // or spring or none
        });

        swapy.enable(true);

        console.log("Swapy Created!");
    }, []);

    return (
        <>
            <div className="swapy-container w-full h-full flex items-center justify-between">
                <div
                    className="section-1 w-[48%] h-full bg-slate-50 rounded-2xl"
                    data-swapy-slot="left"
                >
                    <div
                        className="w-full h-full bg-slate-200 g-slate-100 rounded-2xl"
                        data-swapy-item="a"
                    ></div>
                </div>
                <div
                    className="section-2 w-[48%] h-full bg-slate-50 rounded-2xl"
                    data-swapy-slot="right"
                >
                    <div
                        className="w-full h-full bg-slate-200 rounded-2xl"
                        data-swapy-item="b"
                    ></div>
                </div>
            </div>
        </>
    );
}
