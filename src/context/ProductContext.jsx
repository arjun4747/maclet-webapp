import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export function useProducts() {
    return useContext(ProductContext);
}

const initialAccessories = [
    {
        id: 1,
        name: "MX Master 3S",
        category: "Productivity",
        price: "$99",
        image: "https://placehold.co/600x600/1a1a1a/e0e0e0?text=MX+Master+3S"
    },
    {
        id: 2,
        name: "Keychron Q1 Pro",
        category: "Mechanical",
        price: "$199",
        image: "https://placehold.co/600x600/1a1a1a/e0e0e0?text=Keychron+Q1"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        category: "Audio",
        price: "$349",
        image: "https://placehold.co/600x600/1a1a1a/e0e0e0?text=Sony+XM5"
    },
    {
        id: 4,
        name: "Dell UltraSharp 40",
        category: "Display",
        price: "$1,599",
        image: "https://placehold.co/600x600/1a1a1a/e0e0e0?text=Dell+Display"
    },
    {
        id: 5,
        name: "CalDigit TS4",
        category: "Docking",
        price: "$399",
        image: "https://placehold.co/600x600/1a1a1a/e0e0e0?text=CalDigit+TS4"
    },
    {
        id: 6,
        name: "Native Union Sleeve",
        category: "Protection",
        price: "$79",
        image: "https://placehold.co/600x600/1a1a1a/e0e0e0?text=Sleeve"
    }
];

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(initialAccessories);

    const addProduct = (newProduct) => {
        setProducts(prev => [...prev, { ...newProduct, id: Date.now() }]);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
}
