import React from "react";

function Deals() {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="mb-8">Deals</h2>
        <div className="grid grid-cols-8 grid-rows-2">
          <div className="col-span-5 flex h-96 items-end bg-[url('/assets/dealbg1.jpg')] bg-cover bg-center p-8">
            <h3 className="text-4xl font-extrabold text-white">
              Outfits för honom
            </h3>
          </div>
          <div className="col-span-3 row-span-2 h-96 bg-[url('/assets/dealbg2.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
}

export default Deals;
