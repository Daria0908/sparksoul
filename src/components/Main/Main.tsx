import mainImage from "../../assets/images/main.png";
import SmoothScrollLink from "../SmoothScrollLink/SmoothScrollLink";
import "./Main.scss";

const Main: React.FC = () => {
  return (
    <div className="container-small">
      <main className="main" id="main">
        <div className="main-text">
          <h1 className="main-header">
            <p>
              <span>SparkSoul - отдых, зажигающий изнутри.</span>
            </p>

            <p>Отвлекись от рутины и восстанови свое тело и разум вместе с нами.</p>
          </h1>
          <a href="#" className="main-book">
            забронировать место
          </a>
        </div>
        <img src={mainImage} alt="girls" className="main-image" />
        <div className="main-menu">
          <ul>
            <li>
              <a href="#main" className="burger-link">
                Главная
              </a>
            </li>
            <li>
              <a href="#schedule" className="burger-link">
                Расписание
              </a>
            </li>
            <li>
              <a href="#reviews" className="burger-link">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#aboutUs" className="burger-link">
                О нас
              </a>
            </li>
            <li>
              <a href="#contact" className="burger-link">
                Контакты
              </a>
            </li>
            <li>
              <SmoothScrollLink to="#main" classParent="link" id="call">
                Связаться с нами
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main;
