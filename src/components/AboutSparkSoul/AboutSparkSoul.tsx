import "./AboutSparkSoul.scss";

const AboutSparkSoul: React.FC = () => {
  return (
    <div className="container-small">
      <section className="aboutSparkSoul" id="aboutSparkSoul">
        <ul className="aboutSparkSoul-list">
          <h3 className="aboutSparkSoul-list-header">Тебе подойдёт отдых в SparkSoul, если</h3>
          <li className="aboutSparkSoul-list-text">рутина поглотила и ты не знаешь, как из неё выбраться;</li>
          <li className="aboutSparkSoul-list-text">не можешь выбрать между активным времяпрепровождением и спокойным творчеством;</li>
          <li className="aboutSparkSoul-list-text">мечтаешь обрести комьюнити со схожими увлечениями;</li>
          <li className="aboutSparkSoul-list-text">твоё лучшее воспоминание - летний лагерь в школьные годы.</li>
        </ul>
        <ul className="aboutSparkSoul-list">
          <h3 className="aboutSparkSoul-list-header">Восстановить ресурс можно различными способами, такими как</h3>
          <li className="aboutSparkSoul-list-text">медитация,</li>
          <li className="aboutSparkSoul-list-text">легкая физическая активность,</li>
          <li className="aboutSparkSoul-list-text">творческая деятельность,</li>
          <li className="aboutSparkSoul-list-text">прогулки на свежем воздухе,</li>
          <li className="aboutSparkSoul-list-text">время, проведённое в компании, или же наедине с собой и со своими мыслями.</li>
        </ul>

        <h2 className="aboutSparkSoul-header">Все это мы объединили в нашем ретрите для всестороннего отдыха.</h2>
      </section>
    </div>
  );
};

export default AboutSparkSoul;
