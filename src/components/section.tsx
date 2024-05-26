import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
  return (
    <section ref={ref} className="pt-8 lg:pt-24 space-y-4">
      <h1 className="text-xl text-gray-200">{props.title}</h1>
      <div>{props.children}</div>
    </section>
  );
});

export default Section;