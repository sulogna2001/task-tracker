import React, { useState } from "react";
import banner from "../assets/banner (2).png";

const Landing = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", content: "This is card 1" },
    { id: 2, title: "Card 2", content: "This is card 2" },
    { id: 3, title: "Card 3", content: "This is card 3" },
    { id: 4, title: "Card 4", content: "This is card 4" },
  ]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      content: `This is card ${cards.length + 1}`,
    };
    setCards([...cards, newCard]);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="bg-cover bg-center h-64 text-white py-24 px-10 object-fill">
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Hello world</p>
          <p className="text-2xl mb-10 leading-none">Select a service below</p>
        </div>
      </div>

      {/* Cards */}
      <div className="px-10 grid grid-cols-4 gap-4 -mt-40">
        {cards.map((card) => (
          <div key={card.id} className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-xl mb-2">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}

        {/* Add New Card */}
        <button
          onClick={addCard}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Card
        </button>
      </div>
    </div>
  );
};

export default Landing;
