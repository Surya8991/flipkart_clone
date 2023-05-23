import React from 'react';
import "./Cart.css";
const Cart = () => {
    const cartItems = [
        {
            offerPrice: 8799,
            actualPrice: "10,999",
            rating: 5,
            name: "shoe",
            quantity: "1",
            image: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
                "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
            ],
        },
        {
            offerPrice: 899,
            actualPrice: "1,959",
            rating: 4,
            name: "shoe",
            quantity: "1",
            image: [
                "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
            ],
        },
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.offerPrice * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h1>Welcome to Cart Page</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='cart-item'>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt='images' width={200}></img>
                            <p>Price: {item.offerPrice} Rs</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                    <p>Total Price: {getTotalPrice().toFixed(2)} RS</p>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
