// Karakter bileşeniniz buraya gelecek

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Karakter = (props) => {
    const { karakterlerListesi } = props;
    const [dataGoster, setDataGoster] = useState(false)
    const [episodeGoster, setEpisodeGoster] = useState(false)
    const [episodes, setEpisodes] = useState([])


    const dataFonksiyon = () => {
        setDataGoster(!dataGoster)
    }

    const episodeGosterFonksiyon = () => {
        setEpisodeGoster(!episodeGoster)
    }





    const karakterler = karakterlerListesi.map((karakter) => (
        <div className='Karakter-main-div'>
            <button className='Button' onClick={dataFonksiyon}>

                <p>{karakter.name}</p> <p className='Birth-year'>{karakter.birth_year}</p>


                <div className='DataDetay'>

                    {dataGoster ? (
                        <ul>
                            <li>Gender : {karakter.gender}</li>
                            <li>Height : {karakter.height}</li>
                            <li>Mass : {karakter.mass}</li>
                            <li>Eye Color : {karakter.eye_color}</li>
                            <li>Hair-Color : {karakter.hair_color}</li>
                            <li>Skin-Color : {karakter.skin_color}</li>
                            
                        </ul>
                    ) : null}





                </div>

            </button>
        </div>
    ));




    useEffect(() => {
        axios
            .get("https://swapi.dev/api/films/1/")
            .then((response) => {
                console.log(response.data)
                setEpisodes(response.data.results)
            })
            .catch((error) => {
                console.log("Error : ", error)
            }, [])
    })




    return (<div>

        {karakterler}

    </div>

    )
};

export default Karakter;