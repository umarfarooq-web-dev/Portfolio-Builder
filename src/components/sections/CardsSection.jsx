import React from 'react';

export default function CardsSection({ data, theme }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.groups.map((g, i) => (
          <div key={i} className={theme.card.base}>
            <h3 className="text-indigo-400 font-bold mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item, j) => (
                <span key={j} className="px-3 py-1 rounded-xl bg-black/30 border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}