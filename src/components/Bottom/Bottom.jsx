import "./bottom.scss";
import DayItem from "../DayItem/DayItem";

export default function Bottom({ data, polishDays }) {
  const currentDate = new Date();
  return (
    <div className="Bottom">
      <div className="container">
        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
          const day = currentDate.getDay() + index + 1;
          return (
            <DayItem
              data={data && data.daily[index]}
              key={item}
              day={polishDays[day > 6 ? day - 7 : day]}
            />
          );
        })}
      </div>
    </div>
  );
}
