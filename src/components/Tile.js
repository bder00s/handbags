import React from 'react'

function Tile({children, tileImage, tileAltText, tileTitle,tileText}) {
    return (
        <section>
            {tileImage && <img src={tileImage} alt={tileAltText}/>}
            <h2>{tileTitle}</h2>
            <p>{tileText}</p>
            {children}
        </section>

    )
}

export default Tile