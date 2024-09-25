import { useState } from "react";
import "./Accordion.scss";

export interface IAccordion {
  title: string;
  content: string[];
}

interface AccordionProps {
  data: IAccordion[];
  classParent: string;
}

const Accordion: React.FC<AccordionProps> = ({ data, classParent }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className={`${classParent} accordion`}>
      {data.map((el, index) => (
        <div className="accordion-item" key={classParent + index}>
          <div className="accordion-item-title" onClick={() => handleToggle(index)}>
            <p>{el.title}</p>
            <p>
              {expandedIndex === index ? (
                <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 9.75L9.75 1L1 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              ) : (
                <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L9.75 9.75L18.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              )}
            </p>
          </div>
          {expandedIndex === index && (
            <div className="accordion-item-content">
              {el.content.map((p, i) => (
                <p>{p}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
