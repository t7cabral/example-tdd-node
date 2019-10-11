module.exports = async (req, res, next) => {
    console.log(`registro deletado:\n${JSON.stringify(res.locals._user_)}`);
    next();
}