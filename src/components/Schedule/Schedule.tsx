import "./Schedule.scss";

const Schedule: React.FC = () => {
  return (
    <div className="schedule" id="schedule">
      <div className="container-large">
        <div className="schedule-filling">
          <h2 className="schedule-header">РАСПИСАНИЕ</h2>
          <div className="schedule-text">
            <ul className="schedule-list">
              <p className="schedule-list-header">Пятница:</p>
              <li className="schedule-list-item">с 17:00 заезд </li>
              <li className="schedule-list-item">19:00 - 20:00 ужин</li>
              <li className="schedule-list-item">20:30 - 21:30 знакомство + нейрографика,постановка намерения</li>
              <li className="schedule-list-item">после 22:00 свободное время</li>
            </ul>
            <ul className="schedule-list">
              <p className="schedule-list-header">Суббота:</p>
              <li className="schedule-list-item">8:00 - 9:00 зарядка, умный фитнес, фейсфитнес</li>
              <li className="schedule-list-item">9:00 - 10:30 завтрак </li>
              <li className="schedule-list-item">11:00 - 14:00 свечи</li>
              <li className="schedule-list-item">14:00 - 15:00 обед</li>
              <li className="schedule-list-item">15:00 - 17:00 свободное время (по желанию 16:00-17:00 тренировка)</li>
              <li className="schedule-list-item">17:00 - 19:00 игра в бункер</li>
              <li className="schedule-list-item">19:00 - 20:30 ужин</li>
              <li className="schedule-list-item">20:30 - 21:00 свечка, говорильня, гитара</li>
              <li className="schedule-list-item">после 21:00 свободное время </li>
            </ul>
            <ul className="schedule-list">
              <p className="schedule-list-header">Воскресенье:</p>
              <li className="schedule-list-item">8:00 - 9:00 зарядка, умный фитнес, фейсфитнес</li>
              <li className="schedule-list-item">9:00 - 10:30 завтрак</li>
              <li className="schedule-list-item">10:30 - 13:30 рисование</li>
              <li className="schedule-list-item">14:00 - 15:00 обед</li>
              <li className="schedule-list-item">после 15:00 выезд из отеля</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
