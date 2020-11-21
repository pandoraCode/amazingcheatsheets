const jwt = require('jsonwebtoken');

module.exports = function authentifacted(req,res,next){

    const token = req.header("auth-token");

    if(!token) return res.status(401).send("Access Denied");

    try{
        const logged_in = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = logged_in;
        next();
    } catch {
        res.status.send("invalid token");
    }

}