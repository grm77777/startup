import React from 'react';

export function Celebrate() {
  return (
    <main>
      <h1 className="header">Congratulations!</h1>
      <img src="public/cat-with-party-hat.jpg" width="500" alt="Cat in a Party Hat!"></img>
      <p className="text">You have completed your assignment!</p>
      <h2 className="main-cursive"><strong>Did you know?</strong></h2>
      <p className="text">Cats have up to 53 loosely connected vertebrae, allowing extreme twisting. By comparison, humans only have 34.</p>
    </main>
  );
}