export const portfolio = {
  meta: { title: "Umar Farooq Portfolio" },
  sections: [
    { type: "hero", data: { badge: "✨ Available for Freelance", name: "Umar Farooq", role: "Software Engineer & AI Developer", desc: "Building scalable systems, AI products, and modern web applications.", buttons: [{ label: "GitHub", link: "https://github.com/" }, { label: "LinkedIn", link: "https://linkedin.com/" }] } },
    { type: "grid", data: { items: [{ label: "Projects", value: "30+" }, { label: "Technologies", value: "12+" }, { label: "AI Models", value: "5+" }] } },
    { type: "text", data: { title: "About Me", content: "I am a passionate developer focused on AI, scalable backend systems, and modern web applications with clean architecture." } },
    { type: "cards", data: { title: "Skills", groups: [{ title: "Frontend", items: ["React", "Tailwind", "Next.js"] }, { title: "Backend", items: ["Node.js", "Express", "MongoDB"] }, { title: "AI", items: ["Python", "ML", "PyTorch"] }] } },
    { type: "timeline", data: { title: "Experience", items: [{ role: "Software Engineer", company: "Tech Corp", period: "2025 - Present", description: "Building scalable AI systems and web apps" }] } },
    { type: "cardsWithTags", data: { title: "Projects", items: [{ title: "AI SaaS Platform", description: "AI-powered automation system", tags: ["AI", "SaaS", "React"] }, { title: "Inventory System", description: "Smart inventory management tool", tags: ["MERN", "Dashboard"] }] } },
    { type: "services", data: { title: "Services", items: [{ title: "Full Stack Development", description: "Building scalable web applications using React, Next.js, Node.js and MongoDB." }, { title: "AI Development", description: "Custom AI solutions, chatbots, automation systems and LLM integrations." }, { title: "API Development", description: "Secure REST APIs, authentication systems and microservices." }] } },
    { type: "education", data: { title: "Education", items: [{ degree: "BS Computer Science", institution: "University Name", year: "2024" }] } },
    { type: "certifications", data: { title: "Certifications", items: ["AWS Cloud Practitioner", "Google AI Essentials", "Meta Frontend Developer", "MongoDB Associate"] } },
    { type: "blog", data: { title: "Articles", posts: [{ title: "Building AI Agents with LangChain", link: "#" }, { title: "Scaling Node.js Applications", link: "#" }, { title: "Advanced React Architecture", link: "#" }] } },
    { type: "testimonials", data: { title: "Testimonials", items: [{ name: "John Smith", company: "Tech Corp", quote: "Umar delivered our project ahead of schedule with excellent quality." }, { name: "Sarah Lee", company: "StartupX", quote: "Outstanding developer with strong AI and backend expertise." }] } },
    { type: "resume", data: { title: "Resume", file: "/resume.pdf" } },
    { type: "contact", data: { title: "Contact Information", email: "umar@example.com", phone: "+92 XXX XXXXXXX", location: "Pakistan", github: "https://github.com/", linkedin: "https://linkedin.com/" } }
  ]
};