class ProductController {
  // Get all products
  static getAllProducts(req, res) {
    const db = req.app.locals.db;
    const query = `
            SELECT p.*, c.id as category_id, l.id as label_id
            FROM product p
            LEFT JOIN categories c ON p.category_id = c.id 
            LEFT JOIN product_type l ON p.type_id = l.id
            ORDER BY p.id
        `;

    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching products:", err);
        return res.status(500).json({ error: "Failed to fetch products" });
      }

      // Format results to match frontend expectations
      const formattedProducts = results.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category_id,
        type: product.label_id,
        price: product.price,
        image: product.image,
        description: product.description,
      }));

      res.json(formattedProducts);
    });
  }

  // Get products by category
  static getProductsByCategory(req, res) {
    const db = req.app.locals.db;
    const categoryId = req.params.categoryId;

    const query = `
            SELECT p.*, c.name as category_name, l.name as label_name 
            FROM product p 
            LEFT JOIN categories c ON p.category_id = c.id 
            LEFT JOIN label l ON p.type_id = l.id
            WHERE p.category_id = ?
            ORDER BY p.id
        `;

    db.query(query, [categoryId], (err, results) => {
      if (err) {
        console.error("Error fetching products by category:", err);
        return res.status(500).json({ error: "Failed to fetch products" });
      }

      const formattedProducts = results.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category_name,
        label: product.label_name,
        price: product.price,
        image: product.image,
        description: product.description,
      }));

      res.json(formattedProducts);
    });
  }

  // Get products by label/type
  static getProductsByLabel(req, res) {
    const db = req.app.locals.db;
    const labelName = req.params.label;

    const query = `
            SELECT p.*, c.name as category_name, l.name as label_name 
            FROM product p 
            LEFT JOIN categories c ON p.category_id = c.id 
            LEFT JOIN label l ON p.type_id = l.id
            WHERE l.name = ?
            ORDER BY p.id
        `;

    db.query(query, [labelName], (err, results) => {
      if (err) {
        console.error("Error fetching products by label:", err);
        return res.status(500).json({ error: "Failed to fetch products" });
      }

      const formattedProducts = results.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category_name,
        label: product.label_name,
        price: product.price,
        image: product.image,
        description: product.description,
      }));

      res.json(formattedProducts);
    });
  }

  // Get single product by ID
  static getProductById(req, res) {
    const db = req.app.locals.db;
    const productId = req.params.id;

    const query = `
            SELECT p.*, c.name as category_name, l.name as label_name 
            FROM product p 
            LEFT JOIN categories c ON p.category_id = c.id 
            LEFT JOIN label l ON p.type_id = l.id
            WHERE p.id = ?
        `;

    db.query(query, [productId], (err, results) => {
      if (err) {
        console.error("Error fetching product:", err);
        return res.status(500).json({ error: "Failed to fetch product" });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }

      const product = results[0];
      const formattedProduct = {
        id: product.id,
        name: product.name,
        category: product.category_name,
        label: product.label_name,
        price: product.price,
        image: product.image,
        description: product.description,
      };

      res.json(formattedProduct);
    });
  }
}

module.exports = ProductController;
