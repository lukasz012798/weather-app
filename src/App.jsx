import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";

import "./app.scss";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [location] = useState([52.74, 14.69]);
  const [data, setData] = useState(false);
  const apiKey = "9a88e4e34b805d001bb191e36a9559d8";

  const getData = useCallback(async () => {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&appid=${apiKey}&units=metric&lang=pl`
    );
    const data = await resp.json();
    setData(data);
  }, [location]);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="App">
      <Top
        data={data}
        currentData={data && data.current}
        location={location}
      ></Top>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
