"use client";

import { useState, FormEvent } from "react";

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    _honeypot: string;
}

const initialFormData: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "",
};

export function useContactForm() {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const updateField = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (status === "error") {
            setStatus("idle");
            setErrorMessage("");
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Web3Forms Access Key (safe to be public on the client-side)
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "34eefef3-2212-49ee-917f-08e618dcd4c9";

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject ? `[Portfolio] ${formData.subject}` : "New Portfolio Contact Message",
                    message: formData.message,
                    from_name: formData.name,
                    replyto: formData.email,
                    _honeypot: formData._honeypot,
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || `Failed to send message (${response.status}).`);
            }

            setStatus("success");
            setFormData(initialFormData);
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
        }
    };

    return {
        formData,
        status,
        errorMessage,
        updateField,
        handleSubmit,
        isSubmitting: status === "loading",
    };
}