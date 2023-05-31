import { type ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Section: React.FC<{ children: ReactNode; sectionId: string }> = ({
  children,
  sectionId,
}) => {
  const { hash } = useLocation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current && '#' + sectionId === hash) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [hash, sectionId]);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`section section-${sectionId}`}
    >
      <div className={`container section-${sectionId}__container`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
