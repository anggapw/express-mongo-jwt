const Transactions = require('../Models/Transactions');

module.exports = {
    getAllTransaction: async (req, res) => {
        const transaction = await Transactions.find({})
        .populate('id_user')
        .populate('id_product')
        .populate('id_cart')

        try {
            res.send(transaction);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    addTransaction: async (req, res) => {
        const transaction = new Transactions(req.body);

        try {
            await transaction.save();
            res.send(transaction);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    updateTransaction: async (req, res) => {
        try {
            await Users.findByIdAndUpdate(req.params.id, req.body)
            await Users.save()
            res.send(users)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    deleteTransaction: async (req, res) => {
        try {
            const transaction = await Transactions.findByIdAndDelete(req.params.id)

            if (!transaction) res.status(404).send("Transaction not found")
            res.status(200).json({
                message: 'transaction deleted'})
        } catch (err) {
            res.status(500).send(err)
        }
    }
}