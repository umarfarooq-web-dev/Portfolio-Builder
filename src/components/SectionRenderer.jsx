import React ,{lazy, Suspense} from "react";
const SECTION_COMPONENTS = {
    hero : lazy(()=> import('./sections/HeroSection')),
    grid : lazy(()=> import('./sections/GridSection')),
    text : lazy(()=> import('./sections/TextSection')),
    cards : lazy(()=> import('./sections/CardsSection')),
    cardsWithTags : lazy(()=> import('./sections/CardsWithTagsSection')),
    timeline : lazy(()=> import('./sections/TimelineSection')),
    services : lazy(()=> import('./sections/ServicesSection')),
    education : lazy(()=> import('./sections/EducationSection')),
    certifications : lazy(()=> import('./sections/CertificationsSection')),
    testimonials : lazy(()=> import('./sections/TestimonialsSection')),
    blog : lazy(()=> import('./sections/BlogSection')),
    resume : lazy(()=> import('./sections/ResumeSection')),
    contact : lazy(()=> import('./sections/ContactSection'))
}
export default function SectionRender({section , ...sharedProps}){
    const {type ,data } = section;
    const ComponentToRender = SECTION_COMPONENTS[type];
    if(!ComponentToRender){
        console.warn('[DynamicRenderer]: Section type "${type}" has no matching component set ');
        return null
    }
    return (
    // 2. Wrap in Suspense to show a clean skeleton/loader while the chunk downloads
    <Suspense fallback={<SectionSkeleton />}>
      <ComponentToRender data={data} {...sharedProps} />
    </Suspense>
  );
}

// A generic loading placeholder unique to each section slot
function SectionSkeleton() {
return (<div className="w-full h-48 bg-white/5 animate-pulse rounded-2xl my-6 border border-white/5" />);
}