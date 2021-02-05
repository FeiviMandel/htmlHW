module.exports = (req, res, next) => {
    if (req.query.magicWord === 'please') {
        next();
    }
    else {
        next(new Error('<h1>Authorization denied.</h1><h3> Please enter the correct magic word.</h3>'));
    }
}