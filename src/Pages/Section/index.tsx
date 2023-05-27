import { ReactNode } from 'react';

const Section: React.FC<{ children: ReactNode; sectionId: string }> = ({
  children,
  sectionId,
}) => {
  return (
    <section id={sectionId} className={`section section-${sectionId}`}>
      <div className={`container section-${sectionId}__container`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
