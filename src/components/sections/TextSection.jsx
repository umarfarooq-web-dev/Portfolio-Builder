import React from 'react';

export default function TextSection({ data, theme }) {
  return (
    <section className="py-20 text-center">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <p className="text-gray-400 max-w-3xl mx-auto">{data.content}</p>
    </section>
  );
}