/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineCloud, AiOutlineCode } from "react-icons/ai";
import Modal from "../modal/Modal";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object().shape({
    appName: yup.string().required("App Name is required").min(3, "App Name must be at least 3 characters"),
    description: yup.string().required("Description is required").min(10, "Description must be at least 10 characters"),
});

const BasicConfiguration = () => {
    const [activeModal, setActiveModal] = useState<"dataset" | "source" | "template" | null>(null);

    const openModal = (type: "dataset" | "source" | "template") => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch("/api/config", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Configuration saved successfully!");
                reset();
            } else {
                toast.error(result.error || "Failed to save configuration.");
            }
        } catch (error) {
            toast.error("Something went wrong.");
        }
    };

    return (
        <>
            <Toaster />
            <main className="flex-1 p-6 bg-white h-full">
                <h2 className="text-lg mb-3 bg-[#3d7069] text-white p-2 rounded-md">Basic Configuration</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="text-gray-700 font-semibold mb-4">Basic Information</h1>

                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-1">App Name</label>
                            <input
                                type="text"
                                {...register("appName")}
                                placeholder="Enter app name"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-black placeholder-black text-black"
                            />
                            {errors.appName && <p className="text-red-500 text-sm mt-1">{errors.appName.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-1">Description</label>
                            <textarea
                                {...register("description")}
                                placeholder="Enter description"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-black placeholder-black text-black resize-none"
                                rows={3}
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                        </div>
{/* 
                        <button
                            type="submit"
                            className="px-4 py-2 rounded border border-[#3d7069] text-[#3d7069] mt-2"
                        >
                            Save Configuration
                        </button> */}
                    </div>
                </form>

                <div className="shadow-2xs border border-gray-200 bg-white rounded-md p-2 mt-6">
                    <div className="mx-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { label: "Datasets", type: "dataset", icon: <FiDatabase className="text-gray-800" /> },
                                { label: "Data Sources", type: "source", icon: <AiOutlineCloud className="text-gray-800" /> },
                                { label: "Prompt Template", type: "template", icon: <AiOutlineCode className="text-gray-800" /> },
                            ].map(({ label, type, icon }) => (
                                <div
                                    key={type}
                                    className="bg-[#f1f5f9] p-3 flex items-center justify-center gap-4 rounded-lg cursor-pointer"
                                    onClick={() => openModal(type as "dataset" | "source" | "template")}
                                >
                                    {icon}
                                    <span className="text-gray-800">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {activeModal && <Modal isOpen={true} onClose={closeModal} activeModal={activeModal} />}
        </>
    );
};

export default BasicConfiguration;
