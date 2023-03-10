import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
    return (
        <Wrapper>
            <nav>
                <Link to="add-job">Add Job</Link>
                <Link to="all-jobs">All Jobs</Link>
            </nav>

            <Outlet></Outlet>
        </Wrapper>
    )
}

export default SharedLayout