/*
Check userName, password in post(login) request
if exist -> create new JWT
send back to front-end

setup authentification so only request with JWT can access the dashboard
*/

const CustomAPIError = require("../errors/custom-error")

const login = async (req, res) => {
    const { userName, password } = req.body

    // mongoose validation
    // Joi
    // Check in the controller

    if (!userName || !password) {
        throw new CustomAPIError("Please provide email and password", 400)
    }

    res.send("Fake Login/Register/Signup Route")
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}