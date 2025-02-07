import "./Map.scss";
import YandexMap from "./YandexMap";

const Map: React.FC = () => {
  return (
    <section className="map" id="map">
      <YandexMap />
      <div className="container-small">
        <div className="map-text">
          <h2 className="h2-header">Место проведения ретрита</h2>
          <div className="map-sticker">
            <h3>Адрес:</h3>
            <p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C12 23 21 17 21 10C21 7.61305 20.0518 5.32387 18.364 3.63604C16.6761 1.94821 14.3869 1 12 1C9.61305 1 7.32387 1.94821 5.63604 3.63604C3.94821 5.32387 3 7.61305 3 10C3 17 12 23 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                  fill="black"
                />
              </svg>
              Россия, Московская область, Новорижское ш. (40км от МКАДа), д. Сватово, д.6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
