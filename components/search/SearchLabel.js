import React, {useState} from "react";

function SearchLabel( {showWeather} ) {
    const api = {
        key: "557a1facbecd7d960bdc4678014be9d9",
        base:"https://api.openweathermap.org/data/2.5/weather",
    };

    const [searchParameter, identifySearchParameter] = useState("");

    const search = (e) => {
        if(e.key === "Enter") {
            fetch(
                `${api.base}?q=${searchParameter}&units=metric&lang=en&appid=${api.key}`
            )
            .then((data) => data.json())
            .then((result) => {
                identifySearchParameter("");
                showWeather(result);
            })
        }
    }

    return (
        <div className="search">
        <input
        className="search-input"
        type="text"
        placeholder="City"
        onChange={(e) => identifySearchParameter(e.target.value)}
        value={searchParameter}
        onKeyPress={search}
        />
        </div>
    );

}

export default SearchLabel;

