import React, {useState} from "react";
import "./index.css";

import Search from "./components/search/SearchLabel";
import Background from "./components/background";
import Result from "./components/result";

function App() {
    const [weather, showWeather] = useState({});


  return (
    <section className="app">
    <Background background={weather.weather && weather.weather[0].main} />
    <div id="header">Weather</div>
    <Search showWeather={showWeather} />
    <Result weather={weather}/>
    </section>
  );
}

export default App;
