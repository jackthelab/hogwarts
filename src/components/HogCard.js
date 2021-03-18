import React from 'react'

// function imageUrl(hogName) {
//     return `/src/hog-imgs/${hogName.split(' ').join('_')}.jpg`
// }

const HogCard = ({ hog }) => {
    return (
        <div className="pigTile">
            <h5>{ hog.name }</h5>
            {/* <img src={imageUrl(hog.name)} alt=""/> */}
            {/* <img src="../hog-imgs/babe.jpg" alt=''/> */}
        </div>
    )
}

export default HogCard