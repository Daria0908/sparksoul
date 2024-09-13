import { useEffect, useState } from "react";
import logo from "../../assets/images/logotype.png";
import "./Header.scss";
import SmoothScrollLink from "../SmoothScrollLink/SmoothScrollLink";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 400);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="container-small">
        {windowWidth >= 950 ? (
          <div className="header-nav">
            <a href="#header" className="logo">
              <img src={logo} alt="logotype" className="logotype" />
            </a>
            <nav className="nav">
              <ul>
                <li>
                  <SmoothScrollLink to="#main" classParent="link">
                    Главная
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink to="#schedule" classParent="link">
                    Расписание
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink to="#reviews" classParent="link">
                    Отзывы
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink to="#aboutUs" classParent="link">
                    О нас
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink to="#contact" classParent="link">
                    Контакты
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink to="#main" classParent="link" id="call">
                    Связаться с нами
                  </SmoothScrollLink>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <div className="burger">
            <div className="burger-text" onClick={() => setOpen(!isOpen)}>
              <a href="#header" className="logo">
                <img src={logo} alt="logotype" className="logotype" />
              </a>
              <div className="burger-text__menu">
                <div>
                  <p>Главная</p>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>

                <li className="burger-main-link">
                  <SmoothScrollLink to="#main" classParent="link" id="call">
                    Связаться с нами
                  </SmoothScrollLink>
                </li>
              </div>
            </div>
            {isOpen && (
              <div className="burger-nav">
                <ul>
                  <li>
                    <a href="#main" className="burger-link" onClick={() => setOpen(!isOpen)}>
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#schedule" className="burger-link" onClick={() => setOpen(!isOpen)}>
                      Расписание
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" className="burger-link" onClick={() => setOpen(!isOpen)}>
                      Отзывы
                    </a>
                  </li>
                  <li>
                    <a href="#aboutUs" className="burger-link" onClick={() => setOpen(!isOpen)}>
                      О нас
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="burger-link" onClick={() => setOpen(!isOpen)}>
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
