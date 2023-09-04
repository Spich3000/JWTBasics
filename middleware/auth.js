

const authentificationMiddleware = async (req, res, next) => {
    console.log(req.headers.authorization);
    next()
}

module.exports = authentificationMiddleware