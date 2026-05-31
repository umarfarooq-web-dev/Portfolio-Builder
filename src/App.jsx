import React from "react";

// ----------------------
// CLASS MERGER
// ----------------------
const cn = (...classes) => classes.filter(Boolean).join(" ");

// ----------------------
// THEME
// ----------------------
const theme = {
  layout: {
    page: "min-h-screen bg-black text-white",
    container: "max-w-6xl mx-auto px-6",
  },

  hero: {
    wrapper: "text-center py-28",

    badge:
      "inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-indigo-500/30 text-indigo-300",

    // SAFE TITLE WRAPPER (NO VISIBILITY ISSUES)
    titleWrapper:
      "relative text-6xl md:text-7xl font-black tracking-tight leading-[1.05]",

    subtitle: "text-xl text-gray-400 mt-4",
    desc: "text-gray-500 mt-6 max-w-2xl mx-auto",

    button:
      "px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition",
  },

  card: {
    base:
      "p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur",
    hover: "hover:scale-105 transition duration-300",
    text: "text-gray-400",
  },

  sectionTitle:"text-4xl font-extrabold text-center mb-10 text-white tracking-wide relative",
};

// ----------------------
// DATA
// ----------------------
const portfolio = {
  meta: { title: "Umar Farooq Portfolio" },

  sections: [
    {
      type: "hero",
      data: {
        badge: "✨ Available for Freelance",
        name: "Umar Farooq",
        role: "Software Engineer & AI Developer",
        desc: "Building scalable systems, AI products, and modern web applications.",
        buttons: [
          { label: "GitHub", link: "https://github.com/" },
          { label: "LinkedIn", link: "https://linkedin.com/" },
        ],
      },
    },
    {
      type: "grid",
      data: {
        items: [
          { label: "Projects", value: "30+" },
          { label: "Technologies", value: "12+" },
          { label: "AI Models", value: "5+" },
        ],
      },
    },
    {
      type: "text",
      data: {
        title: "About Me",
        content:
          "I am a passionate developer focused on AI, scalable backend systems, and modern web applications with clean architecture.",
      },
    },
    {
      type: "cards",
      data: {
        title: "Skills",
        groups: [
          { title: "Frontend", items: ["React", "Tailwind", "Next.js"] },
          { title: "Backend", items: ["Node.js", "Express", "MongoDB"] },
          { title: "AI", items: ["Python", "ML", "PyTorch"] },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        title: "Experience",
        items: [
          {
            role: "Software Engineer",
            company: "Tech Corp",
            period: "2025 - Present",
            description: "Building scalable AI systems and web apps",
          },
        ],
      },
    },
    {
      type: "cardsWithTags",
      data: {
        title: "Projects",
        items: [
          {
            title: "AI SaaS Platform",
            description: "AI-powered automation system",
            tags: ["AI", "SaaS", "React"],
          },
          {
            title: "Inventory System",
            description: "Smart inventory management tool",
            tags: ["MERN", "Dashboard"],
          },
        ],
      },
    },
    {
      type: "services",
      data: {
        title: "Services",
        items: [
          {
            title: "Full Stack Development",
            description:
              "Building scalable web applications using React, Next.js, Node.js and MongoDB.",
          },
          {
            title: "AI Development",
            description:
              "Custom AI solutions, chatbots, automation systems and LLM integrations.",
          },
          {
            title: "API Development",
            description:
              "Secure REST APIs, authentication systems and microservices.",
          },
        ],
      },
    },
    {
      type: "education",
      data: {
        title: "Education",
        items: [
          {
            degree: "BS Computer Science",
            institution: "University Name",
            year: "2024",
          },
        ],
      },
    },
    {
      type: "certifications",
      data: {
        title: "Certifications",
        items: [
          "AWS Cloud Practitioner",
          "Google AI Essentials",
          "Meta Frontend Developer",
          "MongoDB Associate",
        ],
      },
    },
    {
      type: "blog",
      data: {
        title: "Articles",
        posts: [
          {
            title: "Building AI Agents with LangChain",
            link: "#",
          },
          {
            title: "Scaling Node.js Applications",
            link: "#",
          },
          {
            title: "Advanced React Architecture",
            link: "#",
          },
        ],
      },
    },
    {
      type: "testimonials",
      data: {
        title: "Testimonials",
        items: [
          {
            name: "John Smith",
            company: "Tech Corp",
            quote:
              "Umar delivered our project ahead of schedule with excellent quality.",
          },
          {
            name: "Sarah Lee",
            company: "StartupX",
            quote:
              "Outstanding developer with strong AI and backend expertise.",
          },
        ],
      },
    },
    {
      type: "resume",
      data: {
        title: "Resume",
        file: "/resume.pdf",
      },
    },
    {
      type: "contact",
      data: {
        title: "Contact Information",
        email: "umar@example.com",
        phone: "+92 XXX XXXXXXX",
        location: "Pakistan",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
      },
    },       
  ],
};

// ----------------------
// APP
// ----------------------
export default function App() {
  const renderSection = (section) => {
    const { type, data } = section;

    switch (type) {
      case "hero":
        return (
          <section className={theme.hero.wrapper}>
            <div className={theme.hero.badge}>{data.badge}</div>

            {/* 🔥 SAFE TITLE (NEVER DISAPPEARS) */}
            <h1 className={theme.hero.titleWrapper}>
              
              {/* BACK LAYER (GLOW / DEPTH) */}
              <span className="absolute inset-0 text-white/10 blur-sm select-none">
                {data.name}
              </span>

              {/* FRONT LAYER (MAIN TEXT) */}
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
                <a key={i} href={b.link} className={theme.hero.button}>
                  {b.label}
                </a>
              ))}
            </div>
          </section>
        );
      case "grid":
        return (
          <section className="grid md:grid-cols-3 gap-6 py-16">
            {data.items.map((item, i) => (
              <div
                key={i}
                className={cn(theme.card.base, theme.card.hover, "text-center")}
              >
                <h2 className="text-4xl font-black text-indigo-400">
                  {item.value}
                </h2>
                <p className={theme.card.text}>{item.label}</p>
              </div>
            ))}
          </section>
        );
      case "text":
        return (
          <section className="py-20 text-center">
            <h2 className={theme.sectionTitle}>{data.title}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              {data.content}
            </p>
          </section>
        );
      case "cards":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>{data.title}</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {data.groups.map((g, i) => (
                <div key={i} className={theme.card.base}>
                  <h3 className="text-indigo-400 font-bold mb-4">
                    {g.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-xl bg-black/30 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "cardsWithTags":
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
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "timeline":
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
      case "services":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>{data.title}</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {data.items.map((service, i) => (
                <div
                  key={i}
                  className={cn(theme.card.base, theme.card.hover)}
                >
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      case "education":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>{data.title}</h2>

            <div className="space-y-6">
              {data.items.map((edu, i) => (
                <div key={i} className={theme.card.base}>
                  <h3 className="text-xl font-bold">
                    {edu.degree}
                  </h3>

                  <p className="text-indigo-400">
                    {edu.institution}
                  </p>

                  <p className="text-gray-500">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ); 
      case "certifications":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>{data.title}</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {data.items.map((cert, i) => (
                <div
                  key={i}
                  className={theme.card.base}
                >
                  {cert}
                </div>
              ))}
            </div>
          </section>
        ); 
      case "testimonials":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>{data.title}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.items.map((t, i) => (
                <div
                  key={i}
                  className={theme.card.base}
                >
                  <p className="italic text-gray-300 mb-4">
                    "{t.quote}"
                  </p>

                  <h4 className="font-bold">
                    {t.name}
                  </h4>

                  <p className="text-indigo-400">
                    {t.company}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );  
      case "blog":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>{data.title}</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {data.posts.map((post, i) => (
                <a
                  key={i}
                  href={post.link}
                  className={cn(
                    theme.card.base,
                    theme.card.hover
                  )}
                >
                  <h3 className="font-bold">
                    {post.title}
                  </h3>
                </a>
              ))}
            </div>
          </section>
        );  
      case "resume":
        return (
          <section className="py-20 text-center">
            <h2 className={theme.sectionTitle}>
              {data.title}
            </h2>

            <a
              href={data.file}
              download
              className={theme.hero.button}
            >
              Download Resume
            </a>
          </section>
        );  
      case "contact":
        return (
          <section className="py-20">
            <h2 className={theme.sectionTitle}>
              {data.title}
            </h2>

            <div className="max-w-2xl mx-auto text-center space-y-4">
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Location: {data.location}</p>

              <div className="flex justify-center gap-4">
                <a
                  href={data.github}
                  className="text-indigo-400"
                >
                  GitHub
                </a>

                <a
                  href={data.linkedin}
                  className="text-indigo-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        );  
        default:
        return null;
    }
  };

  return (
    <div className={theme.layout.page}>
      <div className={theme.layout.container}>
        {portfolio.sections.map((s, i) => (
          <div key={i}>{renderSection(s)}</div>
        ))}
        <footer className="text-center py-10 text-gray-500 border-t border-white/10">
          © 2026 {portfolio.meta.title}
        </footer>
      </div>
    </div>
  );
}