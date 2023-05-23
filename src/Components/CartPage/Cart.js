import React from 'react';
import "./Cart.css";
const Cart = () => {
    const cartItems = [
        {
            offerPrice: 8799,
            actualPrice: "10,999",
            rating: 5,
            name: "Female shoe",
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
            name: "Men Sports shoe",
            quantity: "2",
            image: [
                "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
            ],
        },{
            offerPrice: 599,
            actualPrice: "999",
            rating: 4,
            name: "Women skirt",
            quantity: "1",
            image: [
              "https://www.bodenimages.com/productimages/productlarge/20wsum_t0496_pnk_w01.jpg",
            ],
          },
          {
            offerPrice: 7899,
            actualPrice: "12,999",
            rating: 3,
            name: "Gym Pants",
            quantity: "1",
            image: [
              "https://pnh-preprod.oss-ap-south-1.aliyuncs.com/20200305/3_1583409445963.2_1583409445963.jpeg?x-oss-process=style/thumb",
            ],
          },
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.offerPrice * item.quantity, 0);
    };

    return (
        <>
            <div className="cart-container">
                <h1>Welcome to Cart Page</h1>
                <h3>Products to Bill</h3>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className='cart'>
                        {cartItems.map((item) => (
                            <div key={item.id} className='cart-items'>
                                <h3>{item.name}</h3>
                                <img src={item.image} alt='images' width={200}></img>
                                <p>Price: {item.offerPrice} Rs</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        ))}

                    </div>
                )}
                <div className='result'>
                    <p>Total Price: <strong>{getTotalPrice().toFixed(2)}</strong> RS</p>
                    <button>Checkout</button>
                </div>
            </div>
        </>

    );
};

export default Cart;
