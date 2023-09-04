

/*
Check userName, password in post(login) request
if exist -> create new JWT
send back to front-end

setup authentification so only request with JWT can access the dashboard
*/

const jwt = require("jsonwebtoken")
const { BadRequestError } = require("../errors")

const login = async (req, res) => {
    const { userName, password } = req.body

    // mongoose validation
    // Joi
    // Check in the controller

    if (!userName || !password) {
        throw new BadRequestError("Please provide email and password")
    }

    // Dummy id, normally provided by db
    const id = new Date().getDate()
    const token = jwt.sign({ id, userName }, process.env.JWT_SECRET, { expiresIn: "30d" })
    res.status(200).json({ msg: "User created", token })
}

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100)

    res
        .status(200)
        .json({ msg: `Hello, ${req.user.userName}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}