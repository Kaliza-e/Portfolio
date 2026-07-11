import React from "react";
import Link from "next/link";

const COLOR_MAP = {
    cyan: { color: "rgb(6, 182, 212)", glow: "rgba(6, 182, 212, 0.55)" },
    blue: { color: "rgb(59, 130, 246)", glow: "rgba(59, 130, 246, 0.55)" },
    red: { color: "rgb(239, 68, 68)", glow: "rgba(239, 68, 68, 0.55)" },
    purple: { color: "rgb(168, 85, 247)", glow: "rgba(168, 85, 247, 0.55)" },
} as const;

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: keyof typeof COLOR_MAP;
    href?: string;
    download?: string;
    external?: boolean;
    children: React.ReactNode;
}

export function LiquidButton({
    color = "cyan",
    href,
    download,
    external,
    children,
    className = "",
    ...props
}: LiquidButtonProps) {
    const palette = COLOR_MAP[color];
    const classes = `liquid-button ${className}`.trim();
    const style = {
        "--btn-color": palette.color,
        "--btn-glow": palette.glow,
    } as React.CSSProperties;

    const content = <span className="liquid-button__content">{children}</span>;

    if (href) {
        const isFile = Boolean(download) || /\.(pdf|png|jpe?g|webp|zip)$/i.test(href);
        const isExternal = external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

        if (isFile || isExternal) {
            return (
                <a
                    href={href}
                    className={classes}
                    style={style}
                    download={download}
                    target={isExternal && !download ? "_blank" : undefined}
                    rel={isExternal && !download ? "noopener noreferrer" : undefined}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={classes} style={style}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} style={style} {...props}>
            {content}
        </button>
    );
}