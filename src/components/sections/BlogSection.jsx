import React from 'react';

export default function BlogSection({ data, theme, cn }) {
  return (
    <section className="py-20">
      <h2 className={theme.sectionTitle}>{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.posts.map((post, i) => (
          <a key={i} href={post.link} className={cn(theme.card.base, theme.card.hover)}>
            <h3 className="font-bold">{post.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}