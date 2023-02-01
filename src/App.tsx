import { useState } from "react";
import me from "./assets/images/me.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-[100vh] bg-[url('/src/assets/images/background.jpg')] bg-cover absolute z-0">
      <div className="absolute z-10 w-full h-[100vh] backdrop-blur-sm flex items-center content-center">
        <div className="w-4/6 m-auto bg-transparent backdrop-blur-lg shadow-2xl h-[90vh] rounded-2xl flex">
          <div className="w-3/6 h-full rounded-tl-2xl rounded-bl-2xl flex flex-col items-center content-center">
            <img
              src={me}
              className="h-full w-full rounded-tl-2xl rounded-bl-2xl object-cover shadow-2xl"
            />
          </div>
          <div className="w-3/6 h-full rounded-tr-2xl rounded-br-2xl flex flex-col items-center content-center justify-center">
            <h1 className="font-bold text-4xl text-white">Ikwue Inalegwu</h1>
            <p className="font-medium text-lg mt-2 text-white">
              Mobile Developer
            </p>

            <div className="flex mt-5 w-full items-center content-center justify-center flex-wrap">
              <a
                href="https://github.com/Inalegwu"
                target="_blank"
                className="p-2 pl-5 pr-5 ml-2 mr-2 bg-fuchsia-600 rounded-lg font-medium text-white"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/inalegwu-ikwue-3b97b4243/"
                target="_blank"
                className="p-2 pl-5 pr-5 ml-2 mr-2 bg-fuchsia-600 rounded-lg font-medium text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/casuallyproperportraits/"
                target="_blank"
                className="p-2 pl-5 pr-5 ml-2 mr-2 bg-fuchsia-600 rounded-lg font-medium text-white"
              >
                Instagram
              </a>
            </div>
            <a
              href="./assets/files/CV.pdf"
              target="_blank"
              className="mt-5 p-2 pl-5 pr-5 bg-fuchsia-600 rounded-lg font-medium text-white"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
