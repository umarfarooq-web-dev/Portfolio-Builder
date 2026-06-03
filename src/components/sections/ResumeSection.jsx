import React from 'react';

export default function ResumeSection({ data, theme, portfolio, generatePDF }) {
  return (
    <section className="py-20 text-center">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="text-center my-10">
        <button
          onClick={() => generatePDF(portfolio)}
          className="px-6 py-3 bg-indigo-600 rounded-xl"
        >
          Download PDF
        </button>
      </div>
    </section>
  );
}