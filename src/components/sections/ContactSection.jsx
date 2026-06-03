import React from 'react';

export default function ContactSection({ data, theme }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Location: {data.location}</p>
        <div className="flex justify-center gap-4">
          <a href={data.github} className="text-indigo-400">GitHub</a>
          <a href={data.linkedin} className="text-indigo-400">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}