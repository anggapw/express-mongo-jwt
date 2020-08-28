const Users = require('../Models/Users');
const { createToken } = require('../Helpers/token')

module.exports = {
    getAllUser: async (req, res) => {
        const users = await Users.find({});

        try {
            res.send(users);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    addUser: async (req, res) => {
        const user = new Users(req.body);

        try {
            await user.save();
            res.send(user);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            await Users.findByIdAndUpdate(req.params.id, req.body)
            await Users.save()
            res.send(users)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await Users.findByIdAndDelete(req.params.id)

            if (!user) res.status(404).send("User not found")
            res.status(200).json({
                message: 'user deleted'})
        } catch (err) {
            res.status(500).send(err)
        }
    },

    // fungsi login - generate token
    // createToken
    // login berhasil => kasih token
    // kalo login ga berhasil => respone gagal
    // 
    login: async (req, res) => {
        try {
            // find one
            const registeredUser = await Users.findOne({ email: req.body.email }) // sukses : obj / gagal: null
            // check password
            if (registeredUser.password === req.body.password) {
                const dataUser = {
                    id: registeredUser._id,
                    username: registeredUser.username,
                    email: registeredUser.email
                }
                // user login => kasih token
                const token = createToken(dataUser)
                console.log(token)

                res.status(200).json({
                    message: "Welcome",
                    token,
                    user: dataUser
                })
            } else {
                res.status(400).json({
                    message: "Incorrect password"
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
        // login gagal => response gagal
    }
}