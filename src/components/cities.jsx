const data = [
    "Milano",
    "Roma",
    "Palermo",
    "Trieste",
]

const Cities = (props) => {
    const cityChange = (event) => {
        const selected = event.target.value;
        // console.log(selected);
        props.notify(selected);
    };

    return (
        <section>
            <select className="selectCity" onChange={cityChange}>
                {data.map ((item, index) => (
                    <option key={index} value={item.toLowerCase()}>
                        {item}
                    </option>
                ))}
            </select>
        </section>
    );
};

export {Cities};