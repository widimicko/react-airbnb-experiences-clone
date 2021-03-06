import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data/data';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <div className="px-6 flex gap-4 w-full overflow-scroll">
        {data.map((item) => {
          return <Card
            key={item.id}
            item={item}
          />
        })}
      </div>
    </div>
  );
}

export default App;
