import { jsPDF } from "jspdf";

export const generatePDF = (portfolio) => {
  const doc = new jsPDF("p", "mm", "a4");

  const W = doc.internal.pageSize.width;
  const H = doc.internal.pageSize.height;

  // 📐 Professional Grid & Margins
  const M = 20; // Expanded margins for an upscale, professional framing feel
  let y = 22;

  // 🎨 Editorial Typography Scale
  const FONT = {
    name: 24,       
    role: 11,
    section: 10.5,
    sub: 9.5,
    body: 9,
    small: 8,
  };

  const LH = {
    name: 11,
    role: 6,
    section: 6,
    sub: 5.5,
    body: 5.2, // Perfected line height for natural reading rhythm
    small: 4.5,
  };

  const GAP = {
    xs: 1.5,
    sm: 4,        
    md: 6,          
    lg: 10,         
  };

  // 📄 Defensive Page Budgeting
  const check = (h = 10) => {
    if (y + h > H - 18) {
      doc.addPage();
      y = 22;
    }
  };

  // ✍️ Unified Text Engine
  const write = (text, size = FONT.body, bold = false, lh = LH.body, color = [60, 60, 60], align = "left") => {
    if (!text) return;

    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);

    // Strips any strange layout artifacts like "%" if they accidentally leak into descriptions
    const cleanText = String(text).replace(/^%\s*/, "");
    const lines = doc.splitTextToSize(cleanText, W - M * 2);

    lines.forEach(line => {
      check(lh);
      const xPos = align === "center" ? W / 2 : M;
      doc.text(line, xPos, y, { align });
      y += lh;
    });

    y += GAP.xs;
  };

  // 🎯 Section Header (Sophisticated Underline)
  const sectionTitle = (title) => {
    check(14);
    y += GAP.sm; 

    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT.section);
    doc.setTextColor(40, 40, 40);

    doc.text(title.toUpperCase(), M, y);
    y += LH.section;

    doc.setDrawColor(210, 210, 210);
    doc.setLineWidth(0.4);
    doc.line(M, y, W - M, y); 

    y += GAP.sm;
  };

  // 📦 Extract & Clean Data
  const hero = portfolio.sections.find(s => s.type === "hero")?.data || {};
  const contact = portfolio.sections.find(s => s.type === "contact")?.data || {};
  const about = portfolio.sections.find(s => s.type === "text")?.data;
  const skills = portfolio.sections.find(s => s.type === "cards")?.data;
  const exp = portfolio.sections.find(s => s.type === "timeline")?.data;
  const projects = portfolio.sections.find(s => s.type === "cardsWithTags")?.data;
  const edu = portfolio.sections.find(s => s.type === "education")?.data;
  const cert = portfolio.sections.find(s => s.type === "certifications")?.data;
  const blog = portfolio.sections.find(s => s.type === "blog")?.data;
  const test = portfolio.sections.find(s => s.type === "testimonials")?.data;
  const services = portfolio.sections.find(s => s.type === "services")?.data;

  // =========================
  // 👤 HEADER
  // =========================
  if (hero.name) write(hero.name, FONT.name, true, LH.name, [20, 20, 20], "center");
  if (hero.role) write(hero.role, FONT.role, false, LH.role, [100, 100, 100], "center");
  if (hero.badge) write(hero.badge, FONT.small, false, LH.small, [140, 140, 140], "center");

  y += GAP.xs;

  // =========================
  // 📞 CONTACT INFO
  // =========================
  const contactLine = `Email: ${contact.email || "-"}   •   Phone: ${contact.phone || "-"}   •   Location: ${contact.location || "-"}`;
  write(contactLine, FONT.small, false, LH.small, [90, 90, 90], "center");

  const socialLine = `GitHub: ${contact.github || "-"}   •   LinkedIn: ${contact.linkedin || "-"}`;
  write(socialLine, FONT.small, false, LH.small, [90, 90, 90], "center");

  // =========================
  // 🧾 SUMMARY
  // =========================
  if (about && about.content) {
    sectionTitle("Professional Summary");
    write(about.content, FONT.body, false, LH.body, [70, 70, 70]);
  }

  // =========================
  // 🧠 CORE SKILLS (FIXED SYMBOL & SPACING)
  // =========================
  if (skills && skills.groups) {
    sectionTitle("Core Skills");
    skills.groups.forEach(g => {
      check(LH.sub + GAP.sm);
      
      // Sanitizing group title to instantly remove any accidental "%" or corrupted markers
      const cleanGroupTitle = g.title.replace(/[%\s]/g, "");
      
      write(`${cleanGroupTitle} | `, FONT.sub, true, LH.sub, [50, 50, 50]);
      
      // Inline balance adjustments to print skills list alongside header cleanly
      y -= (LH.sub + GAP.xs); 
      
      const itemsText = (g.items || []).join(", ");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(FONT.body);
      doc.setTextColor(90, 90, 90);
      
      // Indents text safely right next to category title
      doc.text(itemsText, M + 24, y + LH.sub);
      y += LH.sub + GAP.sm;
    });
  }

  // =========================
  // 💼 EXPERIENCE
  // =========================
  if (exp && exp.items) {
    sectionTitle("Professional Experience");
    exp.items.forEach(i => {
      check(LH.sub + LH.small + LH.body);
      write(`${i.role} — ${i.company}`, FONT.sub, true, LH.sub, [30, 30, 30]);
      write(i.period || "", FONT.small, false, LH.small, [130, 130, 130]);
      write(i.description || "", FONT.body, false, LH.body, [70, 70, 70]);
      y += GAP.xs;
    });
  }

  // =========================
  // 🚀 PROJECTS
  // =========================
  if (projects && projects.items) {
    sectionTitle("Key Projects");
    projects.items.forEach(i => {
      check(LH.sub + LH.body + LH.small);
      write(i.title || "", FONT.sub, true, LH.sub, [30, 30, 30]);
      write(i.description || "", FONT.body, false, LH.body, [70, 70, 70]);
      if (i.tags) {
        write(`Tech Stack: ${i.tags.join(" • ")}`, FONT.small, false, LH.small, [120, 120, 120]);
      }
      y += GAP.xs;
    });
  }

  // =========================
  // 🛠 SERVICES
  // =========================
  if (services && services.items) {
    sectionTitle("Services");
    services.items.forEach(i => {
      write(`• ${i.title}: ${i.description}`, FONT.body);
    });
  }

  // =========================
  // 🎓 EDUCATION
  // =========================
  if (edu && edu.items) {
    sectionTitle("Education");
    edu.items.forEach(i => {
      write(`• ${i.degree} — ${i.institution} (${i.year})`, FONT.body);
    });
  }

  // =========================
  // 🏅 CERTIFICATIONS
  // =========================
  if (cert && cert.items) {
    sectionTitle("Certifications");
    write((cert.items || []).join("   •   "), FONT.body);
  }

  // =========================
  // 📝 ARTICLES
  // =========================
  if (blog && blog.posts) {
    sectionTitle("Articles");
    blog.posts.forEach(i => {
      write(`• ${i.title}`, FONT.body);
    });
  }

  // =========================
  // ⭐ TESTIMONIALS
  // =========================
  if (test && test.items) {
    sectionTitle("Testimonials");
    test.items.forEach(i => {
      check(LH.small * 2);
      write(`"${i.quote}"`, FONT.small, false, LH.small, [100, 100, 100]);
      write(`— ${i.name}, ${i.company}`, FONT.small, true, LH.small, [50, 50, 50]);
      y += GAP.xs;
    });
  }

  // =========================
  // 📌 FOOTER
  // =========================
  doc.setFontSize(8);
  doc.setTextColor(160, 160, 160);
  doc.text("Generated using Professional Portfolio Builder", W / 2, H - 10, {
    align: "center",
  });

  doc.save("portfolio_professional.pdf");
};