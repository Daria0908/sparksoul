import Pepa from "../../assets/images/Pepa.jpg";
import Dasha from "../../assets/images/Dasha.jpg";
import Roma from "../../assets/images/Roma.jpg";
import "./AboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <div className="container-large">
      <section className="aboutUs" id="aboutUs">
        <h2 className="h2-header">Немного о нас</h2>
        <div className="aboutUs-us">
          <div className="aboutUs-us-item aboutUs-Pepa">
            <div className="aboutUs-us-photo">
              <img src={Pepa} alt="girl" className="aboutUs-img" />
              <div className="aboutUs-text">
                Все привет, меня зовут Лера. Занимаюсь творчеством уже больше 10 лет. Танцую, рисую, занимаюсь дизайном и познаю себя. Мой мир не
                делится на черное и белое, в нем много красок и я хочу поделиться этим с тобой. Через творчество можно не только выражаться, но и
                познавать себя, открывать новое и справляться со стрессом. Вместе мы нарисуем картину, которая будет вас вдохновлять и после нашей
                встречи. Попробуем расписать тело хной. Создадим ароматические соевые свечи для атмосферы.
              </div>
            </div>
            <p className="aboutUs-name">Валерия</p>
          </div>
          <div className="aboutUs-us-item aboutUs-Dasha">
            <div className="aboutUs-us-photo">
              <img src={Dasha} alt="girl" className="aboutUs-img" />
              <div className="aboutUs-text">
                Привет, я Даша и я обожаю рушить стереотипы и настолки. Простое хобби переросло в неотъемлемую часть моей жизни и в коллекцию игр,
                медленно захватывающих квартиру.
                <br />Я считаю, что правила созданы для того, чтобы их соблюдать. Я покажу, как выстроить стратегию без обмана, получить удовольствие
                от игры и продолжить общение с друзьями после партии в “Монополию”.
              </div>
            </div>
            <p className="aboutUs-name">Дарья</p>
          </div>
          <div className="aboutUs-us-item aboutUs-Roma">
            <div className="aboutUs-us-photo">
              <img src={Roma} alt="girl" className="aboutUs-img" />
              <div className="aboutUs-text">
                Привет, я Настя и в нашей троице я отвечаю за спорт, а именно, я специалист по движению. Каждое моё утро начинается с тренировки (1
                января не исключение), и мы с вами также будем заряжаться до завтрака на новый день.
                <br />
                Для самых активных зожников я провожу силовые занятия, где ставлю технику во время упражнений, и стретчинг, где мы работаем над
                подвижностью суставов. В качестве бонуса устрою танцевальный мастер-класс, ведь помимо спортивных занятий я танцую в эстрадных и
                современных стилях.
              </div>
            </div>
            <p className="aboutUs-name">Анастасия</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
