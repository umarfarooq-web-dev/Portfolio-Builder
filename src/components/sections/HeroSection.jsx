import React from 'react';

export default function HeroSection({ data, theme }) {
  return (
    <section className={theme.hero.wrapper}>
      <div className={theme.hero.badge}>{data.badge}</div>
      <h1 className={theme.hero.titleWrapper}>
        <span className="absolute inset-0 text-white/10 blur-sm select-none">{data.name}</span>
        <span className="relative text-white">
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {data.name}
          </span>
        </span>
      </h1>
      <p className={theme.hero.subtitle}>{data.role}</p>
      <p className={theme.hero.desc}>{data.desc}</p>
      <div className="flex justify-center gap-4 mt-10">
        {data.buttons.map((b, i) => (
          <a key={i} href={b.link} className={theme.hero.button}>{b.label}</a>
        ))}
      </div>
    </section>
  );
}