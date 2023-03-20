import React from 'react'
import ardrinks from '../../constants/ardrinks';
import Products from "../../Containers/Products"
import "./about.css"

const About = () => {
    return (
        <Products products={ardrinks}>  </Products>

    )
}

export default About