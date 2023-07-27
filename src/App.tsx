import React from "react";

const App = () => {
  return (
    <div className="bg-grayblue w-full h-full px-40 pt-48">
      <h1 className="text-6xl text-graywhite mb-10">hello 👀👀</h1>
      <div className="w-1/2 mb-8">
        <span className="text-4xl font-light text-graywhite">
          I'm <span className="font-bold">Donovan Pintard</span>, a full-stack
          software engineer ⚒️🏗️ building all things software 🍦👕<span className="font-bold">.</span>
        </span>
      </div>
      <span className="text-2xl text-graywhite flex flex-row gap-10">
        <a href="https://github.com/pintard">github</a>
        <a href="https://linkedin.com/in/dpintard">linkedin</a>
      </span>
    </div>
  );
};

export default App;
