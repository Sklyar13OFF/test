import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setCounter(counter + 1);
    setAnimate(true);
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
    setTimeout(() => setAnimate(false), 300); // Duration of the animation
  };

  return (
    <div className="bg-bl w-[100vw] h-[100vh] relative">
      <div className="flex flex-col items-center justify-center h-full gap-5 ">
        <Image
          onClick={handleClick}
          src={"/assets/icons/donald.png"}
          width={200}
          height={200}
          className={animate ? "scale" : ""}
        />
        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-semibold">{counter}</span>
          <Image src={"/assets/icons/coin.png"} width={32} height={32} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
        <div className="flex justify-around">
          <Link href={"/"}>
            <Image src={"/assets/icons/home.svg"} width={30} height={30} />
          </Link>
          <Link href={"/"}>
            <Image src={"/assets/icons/settings.svg"} width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
