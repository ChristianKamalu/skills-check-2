module.exports = {
    get: (req, res) => {
        req.app
            .get('db')
            .get_products()
            .then((products) => {
                res.status(200).send(products)
            })
            .catch(err => console.log(err))
    },
    post: (req, res) => {
        const {image_url, name, price} = req.body
        if(name && price) {
            req.app
                .get('db')
                .add_product([image_url, name, price])
                .then(() => {
                    res.status(200).send('Product Created')
                })
                .catch(err => console.log(err))
        }
    },
    put: (req, res) => {
        
    },
    delete: (req, res) => {
        
    }
}