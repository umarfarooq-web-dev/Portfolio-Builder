import React from 'react';

export default function CardsWithTagsSection({ data, theme, cn }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.items.map((p, i) => (
          <div key={i} className={cn(theme.card.base, theme.card.hover)}>
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t, j) => (
                <span key={j} className="text-xs px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}