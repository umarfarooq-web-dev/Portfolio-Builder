import React from 'react';

export default function EducationSection({ data, theme }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="space-y-6">
        {data.items.map((edu, i) => (
          <div key={i} className={theme.card.base}>
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-indigo-400">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}