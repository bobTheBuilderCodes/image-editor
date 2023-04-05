import { useState } from "react";


const Sidebar = () => {

  const [brightness , setBrightness ] = useState(30)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(Number(e.target.value));
  }

  return (
    <div className="w-1/5 h-screen border-r-2 border-[#333]">
      <div className="h-[6vh] flex items-center pl-6 border-b-2 text-gray-300 border-[#333] font-black text-2xl">
        SMART EDITOR APP
      </div>
      <div className=" h-[94vh] flex flex-col justify-between">
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Brightness
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Invert
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Temperature
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
       

        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Vibrance
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Sepia
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Contrast
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Sharpness
          </label>{" "}
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={brightness}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
      </div>
    </div>
  );
}

export default Sidebar
