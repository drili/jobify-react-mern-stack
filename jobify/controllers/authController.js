import User from "../models/User.js"
import { StatusCodes } from "http-status-codes"
import { NotFoundError, BadRequestError, UnAuthenticatedError } from "../errors/index.js"

const register = async (req, res) => {
    // res.send("register user")

    // try {
    //     const user = await User.create(req.body)
    //     res.status(201).json({ user })
    // } catch (error) {
    //     // res.status(500).json({ msg: "There was an error registering user." })
    //     next(error)
    // }
    
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequestError("Fields cannot be empty!")
    }

    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
        throw new BadRequestError("Email already exists, please pick a new one.")
    }

    const user = await User.create({ name, email, password })
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({ 
        user:{
            email:user.email, 
            lastName:user.lastName, 
            location:user.location, 
            name:user.name
        },
        token 
    })
}

const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        throw new BadRequestError("Please provide all values")
    }

    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        throw new UnAuthenticatedError("Invalid credentials")
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError("Invalid credentials")
    }

    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({ user, token, location:user.location })

    res.send("login user")
}

const updateUser = async (req, res) => {
    res.send("updateUser user")
}

export { register, login, updateUser }