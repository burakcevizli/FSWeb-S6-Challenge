// Karakter bileşeniniz buraya gelecek

import React from 'react';

const Karakter = (props) => {
    const { karakterlerListesi } = props;

    const karakterler = karakterlerListesi.map((karakter) => (
        <div className='Karakter-main-div'>
            <h1>{karakter.name}</h1>
            <h1>{karakter.birth_year}</h1>
        </div>


    ));

    return (<div>{karakterler}</div>
    )
};

export default Karakter;