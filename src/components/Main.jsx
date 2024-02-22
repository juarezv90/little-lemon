import React, { useEffect,useState } from "react";
import Card from "./Card";
import "./Menu.scss"

function Main() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => data.json())
      .then((data) => setdata(data.data));
  }, []);

  return (
    <main>
      <section className="menu">
        <div className="menuHeader">
          <h3>Specials</h3>
          <button>Online Menu</button>
        </div>
        <div className="menuCards">
          {data.map((item)=> <Card key={item.name} title={item.name} price={item.price} mealInfo={item.about} imgUrl={item.image}/>)}
        </div>
      </section>
    </main>
  );
}

export default Main;
