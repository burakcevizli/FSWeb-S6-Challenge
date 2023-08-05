// Karakter bileşeniniz buraya gelecek

import React from 'react';

const Karakter = (props) => {
    const { karakterlerListesi } = props;

    const karakterler = karakterlerListesi.map((karakter) => (
        <div className='Karakter-main-div'>
            <button className='Button'><p>{karakter.name}</p> <p className='Birth-year'>{karakter.birth_year}</p></button>
             
        </div>


    ));

    return (<div>{karakterler}</div>
    )
};

export default Karakter;