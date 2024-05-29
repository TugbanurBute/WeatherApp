import rainy from "../../images/rainy.jpg";
import cloudy from "../../images/cloudy.jpg";
import foggy from "../../images/foggy.jpg";
import snowy from "../../images/snowy.jpg";
import storm from "../../images/storm.jpg";
import rainbow from "../../images/rainbow.jpg";
import sunny from "../../images/sunny.jpg";

function GetImages({situation}) {
    switch(situation) {
        case "Rain":
            return <img className="background-img" src={rainy} alt="rainy" />
        case "Clouds":
            return <img className="background-img" src={cloudy} alt="cloudy" />
        case "Drizzle":
            return <img className="background-img" src={rainy} alt="rainy" />
        case "Mist":
            return <img className="background-img" src={foggy} alt="foggy" />
        case "Clear":
            return <img className="background-img" src={sunny} alt="sunny" />
        case "Snow":
            return <img className="background-img" src={snowy} alt="snowy" />
        case "Storm":
            return <img className="background-img" src={storm} alt="storm" />
        default:
            return <img className="background-img" src={rainbow} alt="rainbow" />
    }
}

export default GetImages;
