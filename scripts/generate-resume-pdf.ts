import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import path from "path";
import { fileURLToPath } from "url";
import { ResumeDocument } from "./ResumeDocument";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = path.join(__dirname, "..", "public", "kalizaesther.pdf");

renderToFile(React.createElement(ResumeDocument), pdfPath)
    .then(() => console.log(`Resume PDF generated: ${pdfPath}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });