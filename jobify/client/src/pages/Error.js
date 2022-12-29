import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/not-found.svg"
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="" />
                <h3>Ohh oh! Page not found.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quasi.</p>

                <Link to="/">Back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error