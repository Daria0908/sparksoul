import "./SmoothScrollLink.scss";

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  classParent: string;
  id?: string;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ to, children, classParent, id }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={`smoothScrollLink ${classParent}`} id={id}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
