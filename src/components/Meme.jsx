import React, { useState, useEffect, useRef } from 'react';
import DownloadMemeButton from './DownloadMemeButton'; 

const Meme = ({ darkMode }) => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = useState([]); // Entire memes array
    const memeRef = useRef(null); // Reference to the DOM element of the meme container

    useEffect(() => {
        async function getMemes() {
            // API for demo purpose
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme, //keep text from previous meme
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main className={darkMode ? 'dark-theme' : ''}>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText} //controlled component
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
               
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                <DownloadMemeButton meme={meme} memeRef={memeRef} />
               
            </div>
            <div className={`meme ${darkMode ? 'meme-dark' : ''}`} ref={memeRef}> {/* Conditional class for meme */}
                <img src={meme.randomImage} className="meme--image" alt="meme" key={meme.randomImage} />
                {/* {`'meme--image' ${darkMode ? 'meme--image dark' : ''}`}  */}
                <h2 className={`meme--text top ${darkMode ? 'dark-theme' : ''}`}>{meme.topText}</h2>
                <h2 className={`meme--text bottom ${darkMode ? 'dark-theme' : ''}`}>{meme.bottomText}</h2>
            </div>

            <div className={darkMode ? 'footer--darkmode': ''}>

            </div>
            
        </main>
    );
};

export default Meme;
