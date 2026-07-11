import HomePageClient from "@/components/home/HomePageClient";
import { siteConfig } from "@/data/site";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
        },
        {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.email,
            jobTitle: "AI Student & Developer",
            address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.location,
            },
            sameAs: siteConfig.socials
                .map((s) => s.href)
                .filter((href) => href.startsWith("http")),
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomePageClient />
        </>
    );
}