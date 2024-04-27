import React from "react";
import Marquee from "react-fast-marquee";
import { Store } from "lucide-react";

const Marque = () => {
  return (
    <div>
      <div className="Line_Icone1 flex gap-4 top-2 ">
        <Marquee className=" gap-6 " direction="right" speed={80} pauseOnHover>
          <div className="flex gap-9 mt-2">
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>{" "}
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
          </div>
        </Marquee>
      </div>
      <div className="Line_Icone1 flex gap-4 top-2 ">
        <Marquee className=" gap-6 " direction="left" speed={80} pauseOnHover>
          <div className="flex  gap-9 mt-2">
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>{" "}
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
            <h4 className=" font-Quicksand font-bold border-2  w-36 border-gray-500 flex gap-2 items-center p-2.5 rounded-xl text-white">
              Logoipsum <Store />
            </h4>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
