import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

Font.register({
    family: "Helvetica",
    fonts: [
        { src: "Helvetica" },
        { src: "Helvetica-Bold", fontWeight: 700 },
    ],
});

const c = {
    ink: "#0f172a",
    body: "#334155",
    muted: "#64748b",
    accent: "#4338ca",
    line: "#e2e8f0",
    soft: "#f8fafc",
};

const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 10.5,
        color: c.body,
        backgroundColor: "#ffffff",
        paddingTop: 32,
        paddingBottom: 36,
        paddingHorizontal: 36,
    },
    header: {
        marginBottom: 22,
        paddingBottom: 16,
        borderBottomWidth: 1.5,
        borderBottomColor: c.line,
    },
    name: {
        fontSize: 28,
        fontWeight: 700,
        color: c.ink,
        letterSpacing: -0.5,
        marginBottom: 6,
    },
    headline: {
        fontSize: 11,
        color: c.accent,
        fontWeight: 700,
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
        marginBottom: 3,
    },
    contactText: {
        fontSize: 9.5,
        color: c.muted,
        lineHeight: 1.5,
    },
    columns: {
        flexDirection: "row",
        gap: 24,
    },
    leftCol: { width: "34%" },
    rightCol: { width: "66%" },
    section: { marginBottom: 18 },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: c.accent,
        textTransform: "uppercase",
        letterSpacing: 1.2,
        marginBottom: 10,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: c.line,
    },
    summary: {
        fontSize: 11,
        lineHeight: 1.65,
        color: c.body,
    },
    bullet: {
        fontSize: 10.5,
        lineHeight: 1.6,
        color: c.body,
        marginBottom: 6,
    },
    eduItem: { marginBottom: 12 },
    eduDegree: {
        fontSize: 10.5,
        fontWeight: 700,
        color: c.ink,
        lineHeight: 1.35,
    },
    eduSchool: { fontSize: 10, color: c.muted, marginTop: 2 },
    eduDate: { fontSize: 9.5, color: c.muted, marginTop: 2 },
    skillGroup: { marginBottom: 10 },
    skillLabel: {
        fontSize: 10,
        fontWeight: 700,
        color: c.ink,
        marginBottom: 3,
    },
    skillItems: {
        fontSize: 10,
        color: c.body,
        lineHeight: 1.5,
    },
    certSubheading: {
        fontSize: 10,
        fontWeight: 700,
        color: c.ink,
        marginTop: 14,
        marginBottom: 6,
    },
    certText: {
        fontSize: 10,
        color: c.body,
        lineHeight: 1.55,
        marginBottom: 6,
    },
    project: { marginBottom: 14 },
    projectHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 3,
    },
    projectTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: c.ink,
    },
    projectDate: { fontSize: 9.5, color: c.muted },
    projectRole: {
        fontSize: 9.5,
        fontWeight: 700,
        color: c.accent,
        marginBottom: 4,
    },
    projectDesc: {
        fontSize: 10.5,
        lineHeight: 1.6,
        color: c.body,
        marginBottom: 5,
    },
    techLine: {
        fontSize: 9.5,
        color: c.muted,
    },
    pageTwoLabel: {
        fontSize: 10,
        fontWeight: 700,
        color: c.muted,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 14,
    },
});

const education = [
    { degree: "Advanced Level — Software Development", school: "Rwanda Coding Academy", date: "2024 — 2027" },
    { degree: "Ordinary Level Education", school: "Lycee Notre Dame de citeaux", date: "2021 — 2023" },
    { degree: "Primary School", school: "Espoir Primary School", date: "2014 — 2021" },
];

const skills = [
    { label: "Frontend", items: "JavaScript, React, Next.js, TailwindCSS" },
    { label: "Backend", items: "NodeJS, NestJS, Laravel, Python, C++" },
    { label: "Mobile", items: "React Native" },
    { label: "Databases & Design", items: "MySQL, MongoDB, PostgreSQL, Figma, Canva, Adobe XD" },
];

const certs = [
    "Full Stack Web Development — Udemy (2024)",
    "React Native Mastery — Udemy (2024)",
    "UI/UX Design Bootcamp — Coursera (2023)",
];

const projects = [
    {
        title: "SecureShake",
        date: "2025",
        role: "Mobile Developer",
        desc: "Emergency alert mobile app with real-time safety network and backend APIs.",
        tech: "React Native · APIs",
    },
    {
        title: "Terimbere",
        date: "2024",
        role: "Full Stack Engineer",
        desc: "Cooperative digital ecosystem with scalable backend systems and clean UI/UX.",
        tech: "Web · Mobile · UI/UX",
    },
    {
        title: "IsokoSense",
        date: "2024",
        role: "System Builder",
        desc: "Smart water monitoring system using IoT sensors, analytics, and alert system.",
        tech: "IoT · Analytics · Alerts",
    },
];

const strengths = [
    "Clean system architecture and scalable design",
    "Human-centered UI/UX and mobile-first experiences",
    "Performance optimization and full-stack development",
    "Smart sensing systems and IoT integrations",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );
}

function ProjectItem({ project }: { project: (typeof projects)[number] }) {
    return (
        <View style={styles.project} wrap={false}>
            <View style={styles.projectHead}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDate}>{project.date}</Text>
            </View>
            <Text style={styles.projectRole}>{project.role}</Text>
            <Text style={styles.projectDesc}>{project.desc}</Text>
            <Text style={styles.techLine}>{project.tech}</Text>
        </View>
    );
}

function ResumeHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.name}>Kaliza Esther</Text>
            <Text style={styles.headline}>Full Stack Developer · Mobile Developer · UI Designer</Text>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>kalizaesther5@gmail.com  ·  +250 728 045 049  ·  Kigali, Rwanda</Text>
            </View>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>
                    LinkedIn: kaliza-esther-794108415  ·  GitHub: Kaliza-e  ·  github.com/Kaliza-e
                </Text>
            </View>
        </View>
    );
}

export function ResumeDocument() {
    const pageOneProjects = projects.slice(0, 3);
    const pageTwoProjects = projects.slice(3);

    return (
        <Document title="Kaliza Esther — Resume" author="Kaliza Esther">
            <Page size="A4" style={styles.page}>
                <ResumeHeader />

                <View style={styles.columns}>
                    <View style={styles.leftCol}>
                        <Section title="Education">
                            {education.map((item) => (
                                <View key={item.school} style={styles.eduItem}>
                                    <Text style={styles.eduDegree}>{item.degree}</Text>
                                    <Text style={styles.eduSchool}>{item.school}</Text>
                                    <Text style={styles.eduDate}>{item.date}</Text>
                                </View>
                            ))}
                        </Section>

                        <Section title="Skills & Certifications">
                            {skills.map((group) => (
                                <View key={group.label} style={styles.skillGroup}>
                                    <Text style={styles.skillLabel}>{group.label}</Text>
                                    <Text style={styles.skillItems}>{group.items}</Text>
                                </View>
                            ))}
                            <Text style={styles.certSubheading}>Certifications</Text>
                            {certs.map((cert) => (
                                <Text key={cert} style={styles.certText}>• {cert}</Text>
                            ))}
                        </Section>
                    </View>

                    <View style={styles.rightCol}>
                        <Section title="Summary">
                            <Text style={styles.summary}>
                                A Full Stack Web Developer and UI Designer who believes that great products are not just built — they are designed to feel alive. I build scalable digital products, from React Native mobile apps to responsive web platforms.
                            </Text>
                        </Section>

                        <Section title="Core Strengths">
                            {strengths.map((item) => (
                                <Text key={item} style={styles.bullet}>• {item}</Text>
                            ))}
                        </Section>

                        <Section title="Selected Projects">
                            {pageOneProjects.map((project) => (
                                <ProjectItem key={project.title} project={project} />
                            ))}
                        </Section>
                    </View>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <Text style={styles.pageTwoLabel}>Selected Projects — Continued</Text>
                {pageTwoProjects.map((project) => (
                    <ProjectItem key={project.title} project={project} />
                ))}
            </Page>
        </Document>
    );
}