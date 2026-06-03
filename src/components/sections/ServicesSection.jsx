import React from 'react';

export default function ServicesSection({ data, theme, cn }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.items.map((service, i) => (
          <div key={i} className={cn(theme.card.base, theme.card.hover)}>
            <h3 className="text-xl font-bold text-indigo-400 mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}