import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data/data';

function App() {

  const cards = data.map((item) => {
    return <Card 
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <div className="px-6 flex gap-4">
        {cards}
      </div>
    </div>
  );
}

export default App;
