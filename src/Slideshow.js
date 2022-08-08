import React, { useState } from 'react';
import dataSlider from './film-data.json';

export default function Slider() {

    // const [slide, setSlide] = useState([])

    const [count, setCount] = useState(0)

    // const [buttonStyle, setButtonStyle] = useState('normal-button')


    const sliderLength = dataSlider.length - 1;

    const handleNext = () => {
        if (count < sliderLength) {
            setCount(count + 1)
        }

        // if (count >= 0) {
        //     setButtonStyle('active-button')
        // }

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

            <div className='title-section'>
                <h1>{dataSlider[count].title}</h1>
            </div>






            <div className='wrapper'>

                <h1>{dataSlider[count].original_title}</h1>

                <p>{dataSlider[count].release_date}</p>

                <p>{dataSlider[count].description}</p>

                <img src={dataSlider[count].image} alt={dataSlider[count].title} width="300"></img>

            </div>



            <div className='button-section'>

                <button className='normal-button' onClick={() => handleReset()}>
                    Start Over
                </button>

                <button className='normal-button' onClick={() => handleBack()}>
                    Back
                </button>

                <button className='normal-button' onClick={() => handleNext()}>
                    Next
                </button>

            </div>

            <div>
                <p className='count-value'>Count: {count}</p>
            </div>


            {/* <p>Total Length: {sliderLength}</p> */}


            {/* 
            
            <p>{dataSlider[count].title}</p>

            <p>{dataSlider[count].original_title}</p>

            <p>{dataSlider[count].release_date}</p>

            <p>{dataSlider[count].description}</p>

            <img src={dataSlider[count].image} alt={dataSlider[count].title} width="300"></img> 
            
            */}


            {/* {dataSlider.map((itemz, index) => (
                <p key={index}>{itemz.title}</p>
            ))} */}
        </>
    )
}