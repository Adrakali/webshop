import React from "react";

function Hero() {
  return (
    <section>
      <div className="container bg-[url('/assets/herobg.jpg')] bg-cover bg-center lg:py-32 lg:px-28 p-4">
        <h1 className="max-w-[20ch]">
          Missa inte årets utförsäljning av vinterprodukter
        </h1>
        <p className="text-xl">Spara upp till 50%</p>
        <button className="mt-8 rounded-md bg-black py-4 px-12 font-bold text-white">
          FYNDA NU
        </button>
      </div>
    </section>
  );
}

export default Hero;
