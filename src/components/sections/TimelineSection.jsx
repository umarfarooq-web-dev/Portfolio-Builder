import React from 'react';

export default function TimelineSection({ data, theme }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="space-y-6">
        {data.items.map((e, i) => (
          <div key={i} className={theme.card.base}>
            <h3 className="text-xl font-bold">{e.role}</h3>
            <p className="text-indigo-400">{e.company}</p>
            <p className="text-sm text-gray-500">{e.period}</p>
            <p className="text-gray-400 mt-2">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}