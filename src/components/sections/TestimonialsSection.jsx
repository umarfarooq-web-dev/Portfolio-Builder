import React from 'react';

export default function TestimonialsSection({ data, theme }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.items.map((t, i) => (
          <div key={i} className={theme.card.base}>
            <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
            <h4 className="font-bold">{t.name}</h4>
            <p className="text-indigo-400">{t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}