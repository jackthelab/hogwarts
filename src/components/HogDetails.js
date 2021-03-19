import React from 'react'

const HogDetails = ({selectedHog}) => {
    return(
    <div className='pigTile'>
        <h5>{selectedHog.name}</h5>
        <p>Specialty: {selectedHog.specialty}</p>
        <p>Weight: {selectedHog.weight} kilos</p>
        <p>Highest Medal: {selectedHog['highest medal achieved'].charAt(0).toUpperCase()+selectedHog['highest medal achieved'].slice(1) }</p>
        <p>Greased: {selectedHog.greased ? 'Yes' : 'No' }</p>
    </div>
    )
}
export default HogDetails