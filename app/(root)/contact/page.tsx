import React from "react";
import { Metadata } from "next";

import PageHeader from "@/components/common/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import PageContainer from "@/components/common/page-container";

export const metadata: Metadata = {
    title: "Contact",
    description: "Examples of cards built using the components.",
};

export default function ContactPage() {
    return (
        <PageContainer
            title={pagesConfig.contact.title}
            description={pagesConfig.contact.description}
        >
            <div className="flex justify-center w-[40rem]">
                <ContactForm />
            </div>
        </PageContainer>
    );
}
