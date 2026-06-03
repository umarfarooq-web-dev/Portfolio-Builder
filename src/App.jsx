import React from "react";
import SectionRenderer from "./components/SectionRenderer";

// Imports from decoupled files
import { theme } from "./theme/portfolioTheme";
import { cn } from "./utils/cn";
import { portfolio } from "./data/portfolioData";
import { generatePDF } from "./components/PDFgenerator";

export default function App() {
  return (
    <div className={theme.layout.page}>
      <div className={theme.layout.container}>
        {portfolio.sections.map((section, index) => (
          <SectionRenderer
            key={section.id || `${section.type}-${index}`}
            section={section}
            theme={theme}
            cn={cn}
            portfolio={portfolio}
            generatePDF={generatePDF}
          />
        ))}
      </div>
    </div>
  );
}