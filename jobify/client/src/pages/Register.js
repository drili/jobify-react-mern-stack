import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from "react-router-dom"

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    // *** Global state and useNavigate...
    const navigate = useNavigate()

    const { user, isLoading, showAlert, displayAlert, clearAlert, registerUser } = useAppContext()
    // console.log(isLoading);

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
        
        clearAlert()
        return
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const { name, email, password, isMember } = values
        if(!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        
        const currentUser = { name, email, password }
        if (isMember) {
            console.log("Already a member");
        } else {
            registerUser(currentUser)
        }

        console.log(values);
        // console.log(e.target);
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/")
            }, 3000);
        }
    }, [user, navigate])

    return (
        <Wrapper className="full-page">
            <form className='form' onSubmit={onSubmit}>
                <Logo></Logo>
                <h3>{values.isMember ? "Login" : "Register"}</h3>

                {showAlert && <Alert></Alert>}

                {!values.isMember &&
                    <FormRow type="text" name="name" value={values.name} handleChange={handleChange}></FormRow>
                }
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange}></FormRow>
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange}></FormRow>

                <button type="submit" className='btn btn-block' disabled={isLoading}>Submit</button>

                <p>
                    {values.isMember ? "Not a member yet?" : "Already a member?"}
                    <button type="button" onClick={toggleMember} className="member-btn">
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register