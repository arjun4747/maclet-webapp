import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { motion } from 'framer-motion';
import './AdminPage.css';

export default function AdminPage() {
    const { addProduct, products } = useProducts();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        image: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price) return;

        // Use a default placeholder if image is empty
        const finalImage = formData.image || `https://placehold.co/600x600/1a1a1a/e0e0e0?text=${formData.name.replace(/ /g, '+')}`;

        addProduct({ ...formData, image: finalImage });
        setStatus('Product added successfully!');
        setFormData({ name: '', category: '', price: '', image: '' });

        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="admin-container">
            <motion.div
                className="admin-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="admin-title">Product Manager</h2>

                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Magic Keyboard"
                            className="admin-input"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="e.g. Input"
                                className="admin-input"
                            />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="e.g. $129"
                                className="admin-input"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Image URL (Optional)</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="admin-input"
                        />
                    </div>

                    <button type="submit" className="admin-btn">Add Product</button>
                    {status && <p className="status-msg">{status}</p>}
                </form>
            </motion.div>

            <div className="admin-preview">
                <h3 className="preview-title">Current Inventory ({products.length})</h3>
                <div className="preview-list">
                    {products.slice().reverse().map(p => (
                        <div key={p.id} className="preview-item">
                            <img src={p.image} alt={p.name} className="preview-img" />
                            <div className="preview-info">
                                <h4>{p.name}</h4>
                                <p>{p.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
