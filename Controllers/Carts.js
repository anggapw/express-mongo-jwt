const Cart = require('../Models/Carts');

module.exports = {
    getAllCart: async (req, res) => {
        const cart = await Cart.find({})
        .populate({path: 'id_user', select: 'userName'})
        .populate({path: 'id_product', select: 'productName'})

        try {
            res.send(cart);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    addCart: async (req, res) => {
        const cart = new Cart(req.body);

        try {
            await cart.save();
            res.send(cart);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    updateCart: async (req, res) => {
        try {
            await Carts.findByIdAndUpdate(req.params.id, req.body)
            await Carts.save()
            res.send(cart)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    deleteCart: async (req, res) => {
        try {
            const cart = await Users.findByIdAndDelete(req.params.id)

            if (!cart) res.status(404).send("Cart not found")
            res.status(200).send()
        } catch (err) {
            res.status(500).send(err)
        }
    }
}