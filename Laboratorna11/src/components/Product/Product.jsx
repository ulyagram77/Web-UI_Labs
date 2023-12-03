import './Product.css';
const Product = () => {
    return (
        <li className="product-item">
            <img
                src={product.imageUrl}
                alt={product.name}
            />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Другие детали товара */}
            </div>
        </li>
    );
};

export default Product;
