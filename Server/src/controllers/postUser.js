const { User } = require("../DB_connection");


async function postUser(req, res) {
    try {
        const {email, password} = req.body;
        if(!email || !password)return res.status(400).send("Faltan datos");
        const user = await User.findOrCreate({
            where: {email:email, password: password}
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = postUser;