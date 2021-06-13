import React from 'react';
import WelcomePic from '../../assets/Welcome-image.jpg'

const Welcome = () => {

    return(
        <div>
            Welcome Page
            <img id="background-image" src={WelcomePic} alt="background circles"/>
        </div>
    )
}

export default Welcome;