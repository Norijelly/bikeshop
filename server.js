const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');

const ENV = process.env;

const app = express();
const PORT = ENV.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database connection
const db = mysql.createConnection({
    host: ENV.DB_HOST || 'localhost',
    user: ENV.DB_USERNAME || 'root',
    password: ENV.DB_PASSWORD || '', // Sesuaikan dengan password MySQL Anda
    database: ENV.DB_DATABASE || 'bikeshop'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Make db available to routes
app.locals.db = db;

// Routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const typeRoutes = require('./routes/typeRoutes');

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use("/api/types", typeRoutes);

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});