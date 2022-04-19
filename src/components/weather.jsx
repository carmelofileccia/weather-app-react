
const Weather = (props) => {
    const location = props.location || 'Seleziona una città';
    // const temp = props.temp || 0;
    const status = props.status || "N/A";
    const rounded = Math.round((props.temp - 273.15) * 100) / 100;
    return (
        <section className="display">
            <ul className="listWeather">
                <li className="name"> Location: {location}</li>
                <li className="temp"> Temperatura: {rounded} C°</li>
                <li className="desc"> Condizione: {status}</li>
            </ul>
        </section>
    )
}

export {Weather}