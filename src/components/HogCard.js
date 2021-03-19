import React from 'react'

// function imageUrl(hogName) {
//     return `/src/hog-imgs/${hogName.split(' ').join('_')}.jpg`
// }


const plzWorkPigPic = (hogName) => {
    let imgName = hogName.split(" ").join("_").toLowerCase()
    let pigImgs = require(`../hog-imgs/${imgName}.jpg`)
    return pigImgs
  }


const HogCard = ({ hog, clickingAction }) => {
    return (
        <div className="pigTile">
            <h5>{ hog.name }</h5>
            <img src={plzWorkPigPic(hog.name)} className="minPigTile" alt="" />
            <button onClick={clickingAction} id={hog.id} name={hog.name}>Show Details</button>
            {/* <img src={imageUrl(hog.name)} alt=""/> */}
            {/* <img src="../hog-imgs/babe.jpg" alt=''/> */}
        </div>
    )
}

export default HogCard