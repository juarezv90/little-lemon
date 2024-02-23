import React, {useState, useEffect} from 'react'
import Card from './Card';

function Menu() {
    const [data, setdata] = useState([]);

    useEffect(() => {
      fetch("./data.json")
        .then((data) => data.json())
        .then((data) => setdata(data.data));
    }, []);
  return (
    <section className="menu">
        <div className="menuHeader">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="menuCards">
          {data.map((item)=> <Card key={item.name} title={item.name} price={item.price} mealInfo={item.about} imgUrl={item.image}/>)}
        </div>
      </section>
  )
}

export default Menu
