class CategoryController {
    // Get all categories
    static getAllCategories(req, res) {
        const db = req.app.locals.db;
        const query = 'SELECT * FROM categories ORDER BY id';
        
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching categories:', err);
                return res.status(500).json({ error: 'Failed to fetch categories' });
            }
            
            res.json(results);
        });
    }

    // Get category by ID
    static getCategoryById(req, res) {
        const db = req.app.locals.db;
        const categoryId = req.params.id;
        
        const query = 'SELECT * FROM categories WHERE id = ?';
        
        db.query(query, [categoryId], (err, results) => {
            if (err) {
                console.error('Error fetching category:', err);
                return res.status(500).json({ error: 'Failed to fetch category' });
            }
            
            if (results.length === 0) {
                return res.status(404).json({ error: 'Category not found' });
            }
            
            res.json(results[0]);
        });
    }

    // Get categories with product count
    static getCategoriesWithCount(req, res) {
        const db = req.app.locals.db;
        const query = `
            SELECT c.*, COUNT(p.id) as product_count 
            FROM categories c 
            LEFT JOIN product p ON c.id = p.category_id 
            GROUP BY c.id, c.name 
            ORDER BY c.id
        `;
        
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching categories with count:', err);
                return res.status(500).json({ error: 'Failed to fetch categories' });
            }
            
            res.json(results);
        });
    }
}

module.exports = CategoryController;