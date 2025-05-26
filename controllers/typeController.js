class TypeController {
  static getAllTypes(req, res) {
    const db = req.app.locals.db;
    const query = `
            SELECT t.*
            FROM product_type t
            ORDER BY t.id
        `;

    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching types:", err);
        return res.status(500).json({ error: "Failed to fetch types" });
      }

      const formattedTypes = results.map((type) => ({
        id: type.id,
        name: type.name,
      }));

      res.json(formattedTypes);
    });
  }
}

module.exports = TypeController;
