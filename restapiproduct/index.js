import express from "express";

const app = express();

app.use(express.json());

let products = [];

// Create 100 products
for (let i = 1; i <= 100; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: i * 100,
        category: i % 2 === 0 ? "Electronics" : "Accessories",
        stock: i + 10
    });
}


// GET - Get all products
app.get("/products", (req, res) => {
    res.json(products);
});


// GET - Get product by ID
app.get("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


// POST - Create new product
app.post("/products", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});


// PUT - Update complete product
app.put("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products[index] = {
        id: id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    res.json(products[index]);
});


// PATCH - Update selected fields
app.patch("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    Object.assign(product, req.body);

    res.json(product);
});


// DELETE - Delete product
app.delete("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted",
        product: deletedProduct[0]
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});