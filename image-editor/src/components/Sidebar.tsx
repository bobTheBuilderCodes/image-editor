interface IStyles {
  imageStyles : React.CSSProperties;
  filters?: {grayScale: number , brightness: number , saturate: number , blur: number};
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 
 
}


const Sidebar = ({onChange , filters}: IStyles) => {

  return (
    <div className="w-1/5 h-screen border-r-2 border-[#333]">
      <div className="h-[6vh] flex items-center pl-6 border-b-2 text-gray-300 border-[#333] font-black text-2xl">
        SMART EDITOR APP
      </div>
      <div className=" h-[94vh] flex flex-col justify-between">
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Gray scale
          </label>{" "}
          <br />
          <input
          name="grayScale"
            type="range"
            min="1"
            max="10"
            value={filters?.grayScale}
            onChange={onChange}
            step="1"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Brightness
          </label>{" "}
          <br />
          <input name="brightness"
            type="range"
            min="0"
            max="10"
            value={filters?.brightness}
            onChange={onChange}
            step="0.2"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Saturation
          </label>{" "}
          <br />
          <input name="saturate"
            type="range"
            min="0"
            max="10"
            value={filters?.saturate}
            onChange={onChange}
            step="0.5"
            className="w-11/12 mt-3 appearance-none bg-gray-500 h-3 rounded-lg outline-none"
          />
        </div>
       

        <hr className="mx-6 bg-[#333] opacity-5" />
        <div className="m-6">
          <label htmlFor="file" className="font-bold">
            Blur
          </label>{" "}
          <br />
          <input name="blur"
            type="range"
            min="0"
            max="100"
            value={filters?.blur}
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
            // value={brightness}
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
            // value={brightness}
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
            // value={brightness}
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
