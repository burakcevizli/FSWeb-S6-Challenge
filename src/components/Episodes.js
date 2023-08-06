import { useState } from "react";

const Episodes = (props) => {
    const { episodes } = props;
    const [episodeDetayGoster, setEpisodeDetayGoster] = useState(false);
    

    const detayFonksiyon = () => {
        setEpisodeDetayGoster(!episodeDetayGoster);
    };


    

    return (
        <div>
            <div className="Episodes-main">

                <p onMouseEnter={detayFonksiyon}>Episode {episodes.episode_id} : {episodes.title}</p>

                <p className="Episode-ok" >↓</p>

            </div>

            <div className="Episode-detay">

                {episodeDetayGoster ? (

                    <ul>

                        <li>{episodes.opening_crawl}</li>

                        <li>Directed by: {episodes.director}</li>

                        <li>Produced by: {episodes.producer}</li>

                        <li>Release date: {episodes.release_date}</li>

                    </ul>

                ) : null}


            </div>


        </div>


    );
};

export default Episodes;