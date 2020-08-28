const Product_Images = require('../Models/Product_Images');
const Products = require('../Models/Products');

module.exports = {
    getAllProductImage: async (req, res) => {
        const product_images = await Product_Images.find({}).populate('id_product')

        try {
            res.send(product_images);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    addProductImage: async (req, res) => {
        try {
            const productImage = await Product_Images.create({
                ...req.body
            })
            const product = await Products.findOneAndUpdate(
                { _id: req.body.id_product },
                { $push: { image: productImage._id } },
                { new: true }
            )
            res.status(200).json({
                message: 'success', product
            })
        }
        catch (error) {
            res.status(500).json({
                message: 'failed'
            })
        }
    },
    updateProductImage: async (req, res) => {
        try {
            await Products.findByIdAndUpdate(req.params.id, req.body)
            await Products.save()
            res.send(product)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    deleteProductImage: async (req, res) => {
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