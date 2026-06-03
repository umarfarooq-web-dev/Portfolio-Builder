import { jsPDF } from "jspdf";
export const generatePDF = (portfolio) => {
    const doc = new jsPDF();

    const W = doc.internal.pageSize.width;
    const H = doc.internal.pageSize.height;

    const M = 16;
    let y = 18;

    const FONT = {
      name: 22,
      h1: 14,
      h2: 11,
      body: 10,
      small: 8.5,
    };

    const LH = {
      name: 11,
      h1: 8,
      h2: 6.5,
      body: 5.5,
      small: 4.8,
    };

    const GAP = 6;

    const check = (h = 10) => {
      if (y + h > H - 16) {
        doc.addPage();
        y = 18;
      }
    };

    const write = (t, size = FONT.body, bold = false, lh = LH.body) => {
      if (!t) return;

      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(35, 35, 35);

      const lines = doc.splitTextToSize(String(t), W - M * 2);

      lines.forEach((line) => {
        check(lh);
        doc.text(line, M, y);
        y += lh;
      });

      y += 2;
    };

    const line = () => {
      check(6);
      doc.setDrawColor(230, 230, 230);
      doc.line(M, y, W - M, y);
      y += GAP;
    };

    const sectionTitle = (t) => {
      check(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(FONT.h1);
      doc.text(t, M, y);
      y += LH.h1;
      line();
    };

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

    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT.name);
    doc.text(hero.name || "", M, y);
    y += LH.name;

    doc.setFontSize(FONT.h2);
    doc.setFont("helvetica", "normal");
    doc.text(hero.role || "", M, y);
    y += LH.h2;

    doc.setFontSize(FONT.small);
    doc.text(hero.badge || "", M, y);
    y += LH.small;

    line();

    const contactText =
      `Email: ${contact.email || "-"}   |   Phone: ${contact.phone || "-"}   |   Location: ${contact.location || "-"}`;

    write(contactText, FONT.small);

    const socialText =
      `GitHub: ${contact.github || "-"}   |   LinkedIn: ${contact.linkedin || "-"}`;

    write(socialText, FONT.small);

    line();

    if (about) {
      sectionTitle("PROFESSIONAL SUMMARY");
      write(about.content, FONT.body);
    }

    if (skills) {
      sectionTitle("CORE SKILLS");

      (skills.groups || []).forEach(g => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(FONT.h2);
        doc.text(g.title, M, y);
        y += LH.h2;

        write((g.items || []).join(" • "), FONT.small);
      });
    }

    if (exp) {
      sectionTitle("PROFESSIONAL EXPERIENCE");

      (exp.items || []).forEach(i => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(FONT.h2);
        doc.text(`${i.role} @ ${i.company}`, M, y);
        y += LH.h2;

        write(i.period, FONT.small);
        write(i.description, FONT.body);

        y += 2;
      });
    }

    if (projects) {
      sectionTitle("KEY PROJECTS");

      (projects.items || []).forEach(i => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(FONT.h2);
        doc.text(i.title, M, y);
        y += LH.h2;

        write(i.description, FONT.body);
        write(`Technologies: ${(i.tags || []).join(" • ")}`, FONT.small);

        y += 2;
      });
    }

    if (services) {
      sectionTitle("SERVICES OFFERED");

      (services.items || []).forEach(i => {
        write(`• ${i.title}: ${i.description}`, FONT.small);
      });
    }

    if (edu) {
      sectionTitle("EDUCATION");

      (edu.items || []).forEach(i => {
        write(`${i.degree} — ${i.institution} (${i.year})`, FONT.small);
      });
    }

    if (cert) {
      sectionTitle("CERTIFICATIONS");
      write((cert.items || []).join(" • "), FONT.small);
    }

    if (blog) {
      sectionTitle("ARTICLES");

      (blog.posts || []).forEach(i => {
        write(i.title, FONT.small);
      });
    }

    if (test) {
      sectionTitle("TESTIMONIALS");

      (test.items || []).forEach(i => {
        write(`"${i.quote}"`, FONT.small);
        write(`— ${i.name}, ${i.company}`, FONT.small);
        y += 2;
      });
    }

    check(8);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("Generated using Professional Portfolio Builder", M, y);

    doc.save("portfolio_professional.pdf");
  };