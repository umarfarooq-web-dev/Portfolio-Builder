import React from 'react';

export default function GridSection({ data, theme, cn }) {
  return (
    <section className="grid md:grid-cols-3 gap-6 py-16">
      {data.items.map((item, i) => (
        <div key={i} className={cn(theme.card.base, theme.card.hover, "text-center")}>
          <h2 className="text-4xl font-black text-indigo-400">{item.value}</h2>
          <p className={theme.card.text}>{item.label}</p>
        </div>
      ))}
    </section>
  );
}