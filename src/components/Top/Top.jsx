// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBolt, faTint ,faCloudRain, faSnowflake, faCloudShowersHeavy,  } from "@fortawesome/free-solid-svg-icons";
import Plotly from "plotly.js-dist";
import { useCallback, useEffect } from "react";

import "./top.scss";

export default function Top({ data, currentData, polishDays }) {
  // const [city, setCity] = useState("...");
  // const token = "pk.e8f319e2e302cd74f86a0cd4b4672505";
  // const url = `https://eu1.locationiq.com/v1/reverse.php?key=${token}&lat=${location[0]}&lon=${location[1]}&format=json`;
  // if (location) {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.loge(data);
  //       const city = data.address.town;
  //       console.log(typeof city);
  //       if (city) setCity(city);
  //     });
  // }

  const parseToArray = useCallback(data => {
    const currentDate = new Date();
    const outputArray = [
      {
        x: [],
        y: [],
        type: "scatter",
      },
    ];
    data.hourly.forEach((element, index) => {
      outputArray[0].x.push(
        new Date(currentDate.setHours(currentDate.getHours() + 1))
      );
      outputArray[0].y.push(Math.round(element.temp));
    });
    // console.log(outputArray);
    return outputArray;
  }, []);

  useEffect(() => {
    const graphDiv = document.querySelector(".graphDiv");
    // console.log(data);
    let dataa;
    if (data) {
      dataa = parseToArray(data);
    } else {
      dataa = [
        {
          x: [
            "2013-10-04 22:23:00",
            "2013-11-04 22:23:00",
            "2013-12-04 22:23:00",
          ],
          y: [1, 3, 15],
          type: "scatter",
        },
      ];
    }

    Plotly.newPlot(graphDiv, dataa);
  }, [data, parseToArray]);
  const currentDay = new Date();
  const { weather, temp, feels_like } = currentData;

  return (
    <div className="Top">
      <div className="upperPart">
        <div className="left">
          <h1>
            {polishDays[currentDay.getDay()].toUpperCase()}{" "}
            {currentDay.getDate()}
          </h1>
        </div>
        {data && (
          <div className="center">
            <div className="imgContainer">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <h3>{weather[0].description}.</h3>
          </div>
        )}
        <div className="right">
          <h1>{Math.round(temp)}&#176;C</h1>
          <h3>Odczuwalna {Math.round(feels_like)}&#176;C</h3>
        </div>
      </div>
      <div className="graphDiv"></div>
    </div>
  );
}
