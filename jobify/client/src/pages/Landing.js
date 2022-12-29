import React from 'react'
import main from "../assets/images/main-alternative.svg"
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo></Logo>
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>Job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eaque numquam iste aliquid aliquam sed, deleniti earum. Quisquam delectus autem inventore facere ut! Architecto, in! Voluptatem ullam obcaecati sit impedit.</p>

                    <Link to="/register">
                        <button className='btn btn-hero'>Login or Register</button>
                    </Link>
                </div>

                <img src={main} alt="" className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing