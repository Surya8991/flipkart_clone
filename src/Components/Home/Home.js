import React from 'react'
import Card from '../Card/Card';
function Home({ category }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', marginTop: "20px" }}>
            {category.map((item) => (
                <Card
                    key={item.image}
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    actualPrice={item.actualPrice}
                    offerPrice={item.offerPrice}
                />
            ))}
        </div>
    );
}

export default Home