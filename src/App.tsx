import React from "react";

const App = () => {
  return (
    <div className="bg-grayblue w-full h-full">
      <div className="pl-8 pt-8 md:pl-16 md:pt-16">
        <div className="w-11/12 md:w-8/12 text-xl md:text-4xl mb-2 md:mb-4 font-light text-graywhite">
          I'm <h1 className="font-bold inline">Donovan Pintard</h1> and I'm a
          Full-Stack Software Engineer 🏗️ building end-to-end solutions
          <span className="font-bold">.</span>
        </div>
        <Links />
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <span className="text-l md:text-3xl text-graywhite flex flex-row gap-8">
      <Link name="github" url="https://github.com/pintard" />
      <Link name="linkedin" url="https://linkedin.com/in/dpintard" />
      <Link name="email" url="mailto:donovanpintard@gmail.com" />
    </span>
  );
};

interface LinkProps {
  name: string;
  url: string;
}

const Link = ({ name, url }: LinkProps) => {
  return (
    <a
      className="underline-offset-4 hover:underline hover:text-blue-500"
      href={url}
    >
      {name}
    </a>
  );
};

export default App;
