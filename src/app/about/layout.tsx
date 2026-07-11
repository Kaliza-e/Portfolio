import type { Metadata } from "next";


export const metadata:Metadata={
    title:"About",
    description:"Learn about Kaliza Esther-Software Programming Student, Full stack developer ,mobile developer and Ui Designer",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}