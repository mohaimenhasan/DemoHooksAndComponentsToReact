import { useCallback, useEffect, useState } from "react";

const MohaimenFunction = () => {
    const [count, setCount] = useState(0);
    const [newCatUrl, setNewCatUrl] = useState("");
    const [currentVal, setCurrentVal] = useState("");

    useEffect(() => {
        const intialCat = async () => {
            await fetch('https://api.thecatapi.com/v1/images/search')
                .then(val => val.json())
                .then(catResponse => {
                    console.log(catResponse);
                    setNewCatUrl(catResponse[0].url);
                })
        };
        intialCat();
    }, []);

    const increase = () => {
        setCount(count + 1);
        setCurrentVal(currentVal !== "" ? currentVal + " " + count : count);
    }

    const getACat = useCallback(async () => {
        await fetch('https://api.thecatapi.com/v1/images/search')
            .then(val => val.json())
            .then(catResponse => {
                console.log(catResponse);
                setNewCatUrl(catResponse[0].url);
            })
    }, []);

    return (
        <div style={{ margin: '50px' }}>
            <h1>Changing this Function</h1>
            <h2>This shows a demo of the states -</h2>
            <h3> Adding value : </h3>
            <h2> {count}</h2>
            <button onClick={increase}>
                Add
            </button>
            <h3>Past Vals: {currentVal}</h3>
            <button onClick={getACat}>
                Get a Cat
            </button> <br /> <br />
            <img src={newCatUrl} alt={"random cat img"} width="500" height="600" />
        </div>
    );
}

export default MohaimenFunction;