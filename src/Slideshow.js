import React, { useState } from 'react';
import dataSlider from './film-data.json';

export default function Slider() {

    // const [slide, setSlide] = useState([])

    const [count, setCount] = useState(0)


    const sliderLength = dataSlider.length - 1;

    const handleNext = () => {
        if (count < sliderLength) {
            setCount(count + 1)
        }

        // if (count === sliderLength) {
        //     setCount(0)
        // }
    }

    const handleBack = () => {

        if (count > 0) {
            setCount(count - 1)
        }

        // if (count === 0) {
        //     setCount(sliderLength)
        // }
    }

    const handleReset = () => {
        setCount(0)
    }



    return (
        <>
            {/* <p>Total Length: {sliderLength}</p> */}

            <p>Count: {count}</p>

            <button onClick={() => handleNext()}>
                Next
            </button>

            <br />

            <button onClick={() => handleBack()}>
                Back
            </button>

            <br />

            <button onClick={() => handleReset()}>
                Start Over
            </button>

            <p>{dataSlider[count].title}</p>

            <p>{dataSlider[count].original_title}</p>

            <p>{dataSlider[count].release_date}</p>

            <p>{dataSlider[count].description}</p>

            <img src={dataSlider[count].image} alt={dataSlider[count].title} width="300"></img>




            {/* {dataSlider.map((itemz, index) => (
                <p key={index}>{itemz.title}</p>
            ))} */}
        </>
    )
}