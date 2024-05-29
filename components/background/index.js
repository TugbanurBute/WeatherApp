import GetImages from "./GetImages";

function index ({background}) {
    return (
    <div className="background">
        <div className="overlay"></div>
        <GetImages situation={background} />
    </div>
    );
}

export default index;