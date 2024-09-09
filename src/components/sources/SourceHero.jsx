import React from "react";

function SourceHero() {
  return (
    <>
      <div className="text-center pt-16">
        <p className="font-medium text-5xl text-seed">Our Sources</p>
        <p className="py-2">
          We source coffee from small-scale Arabica farmers:
        </p>
      </div>

      <div className="images flex justify-around py-7">
        <div className="one  rounded-2xl p-3 shadow-md w-1/4 h-60 ">
          <div className="title flex justify-center">
            <div className="text font-semibold text-seed">Kavre</div>
          </div>
          <div className="images pt-28 text-center">Visit</div>
        </div>
        <div className="one  rounded-2xl p-3 shadow-md w-1/4 h-60 ">
          <div className="title flex justify-center">
            <div className="text font-semibold text-seed">Sindhupalchowk</div>
          </div>
          <div className="images pt-28 text-center">Visit</div>
        </div>
        <div className="one  rounded-2xl p-3 shadow-md w-1/4 h-60 ">
          <div className="title flex justify-center">
            <div className="text font-semibold text-seed">Ilam</div>
          </div>
          <div className="images pt-28 text-center">Visit</div>
        </div>
      </div>
    </>
  );
}

export default SourceHero;
