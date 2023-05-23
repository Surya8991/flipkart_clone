import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Data } from './Data';
import Card from './Components/Card/Card';
import Cart from './Components/CartPage/Cart';

function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    alanBtn({
      key: 'f2e6acfac980920c814d6e3b738c99832e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        if (command === 'first command') {
          console.log('First command');
        }
        if (command === 'show shoes') {
          filter('shoe');
        }

        if (command === 'show pants') {
          filter('pant');
        }

        if (command === 'show shirt') {
          filter('shirt');
        }

        if (command === 'show skirt') {
          filter('skirt');
        }

        if (command === 'show sandals') {
          filter('sandal');
        }
      }
    });

    filter('');
  }, []);

  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </Router>
  );
}

function Home({ category }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
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

export default App;
