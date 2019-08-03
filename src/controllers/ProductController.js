const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // listagem
    async index(req, res){
        // const products = await Product.find();
        const { page = 1 } = req.query;
        const products = await Product.paginate({},{ page, limit: 10 });

        return res.json(products);
    },
     // criacao
    async store(req, res){
       const product = await Product.create(req.body);
       
       return res.json(product);
    },

    // detalhes
    async show(req, res){
        const product = await Product.findById(req.params.id);
        
        return res.json(product); 
    },

    // atualiza
    async update(req, res){
        // new:true para retornar atualizado
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    // delete
    async delete(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};