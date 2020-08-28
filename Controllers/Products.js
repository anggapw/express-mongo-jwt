const Products = require('../Models/Products');

module.exports = {
    getAllProduct: async (req, res) => {
        try {
            const products = await Products.find({})
            .populate({path: 'image', select: 'url_image'})
            res.send(products);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    getOneProduct: async (req, res) => {
        try {
            const product = await Products.findOne({ _id: req.params.id }).populate({path: 'image', select: 'url_image'})
            res.send(product);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    addProduct: async (req, res) => {
        try {
            const product = new Products(req.body);
            await product.save();
            res.status(200).json({
                message: 'product added', product})
        } catch (err) {
            res.status(500).send(err);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Products.findByIdAndUpdate(req.params.id, req.body)
            await Products.save()
            res.send(product)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Products.findByIdAndDelete(req.params.id)

            if (!product) res.status(404).send("Product not found")
            res.status(200).json({
                message: 'product deleted'})
        } catch (err) {
            res.status(500).send(err)
        }
    }
}