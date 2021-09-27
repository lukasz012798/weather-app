import "./dayItem.scss";

export default function DayItem({ data, day }) {
  //   console.log(data);
  const currentDate = new Date();
  if (!data) return <div className="DayItem">Ładowanie</div>;
  else console.log(data);
  return (
    <div className="DayItem">
      <h2>{day}</h2>
      <div className="imgContainer">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <h3>{Math.round(data.temp.day)}&#176;C</h3>
    </div>
  );
}
