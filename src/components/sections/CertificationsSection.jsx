import React from 'react';

export default function CertificationsSection({ data, theme }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.items.map((cert, i) => (
          <div key={i} className={theme.card.base}>{cert}</div>
        ))}
      </div>
    </section>
  );
}