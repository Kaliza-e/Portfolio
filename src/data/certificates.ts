export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    /** Certificate image (PNG/JPG) or PDF path for preview + lightbox */
    image: string;
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "International Linguistics Challenge",
        issuer: "International Linguistics Challenge",
        date: "01 2026",
        description: "Participation Certificate for successfully participating in the Qualification Round of 2025. Received special honour for submitting the solution as a digitally written document.",
        image: "/certificates/Certificate-ILC.pdf",
    },
    {
        id: 2,
        title: "International Youth Math Challenge",
        issuer: "International Youth Math Challenge",
        date: "12 2025",
        description: "Participation Certificate for successfully participating in the Qualification Round of 2025. Received special honour for submitting the solution as a digitally written document.",
        image: "/certificates/Certificate-QR-2025-100AC3DC0C95-89c9ad3feebc516799f54faa50932a2e.pdf",
    },
    {
        id: 3,
        title: "Immerse Education Essay Competition",
        issuer: "Immerse Education",
        date: "10 2025",
        description: "Certified Entrant in the Immerse Education Essay Competition, recognising participation and achievement.",
        image: "/certificates/EC R1 2026 Certificate - Kaliza Esther.pdf",
    },
    {
        id: 4,
        title: "Yale Young African Scholars (YYAS) — Completion Certificate",
        issuer: "Yale University",
        date: "21 July 2026",
        description: "Official Certificate of Completion certifying successful completion of all elements of the YYAS Online session of the Yale Young African Scholars program (16 July – 21 July 2026).",
        image: "/certificates/Certificate-YYAS.pdf",
    },
    {
        id: 5,
        title: "Yale Young African Scholars (YYAS) — Admission Letter",
        issuer: "Yale University",
        date: "07 2026",
        description: "Official Admission Letter to the 2026 Yale Young African Scholars Online College Prep Workshop. Selected out of thousands of applicants from over 40 African countries.",
        image: "/certificates/LetterYale.pdf",
    },
    {
        id: 6,
        title: "African Girls Can Code Initiative",
        issuer: "AGCCI",
        date: "2024",
        description: "Training program empowering girls in STEM and computer science. Recognized with certificate of achievement during the intensive coding camp.",
        image: "/certificates/AGCCI.jpg",
    },
    {
        id: 7,
        title: "Imbuto Foundation Award",
        issuer: "Imbuto Foundation",
        date: "2024",
        description: "Awarded for academic excellence and recognized as the best performing girl in my sector during primary and ordinary level national examinations.",
        image: "/certificates/Imbuto.jpg",
    },
    {
        id: 8,
        title: "Ideation & Prototyping",
        issuer: "Ideation and Prototyping",
        date: "2024",
        description:
            "Recognized for successfully completing training in ideation and prototyping, developing innovative solutions through design thinking, problem identification, and rapid prototype development.",
        image: "/certificates/Ideation.jpg",
    },
];

export function isCertificatePdf(path: string) {
    return path.toLowerCase().endsWith(".pdf");
}

/** Safe URL for certificate assets (handles spaces and special chars in filenames). */
export function certificateAssetUrl(path: string) {
    return encodeURI(path);
}