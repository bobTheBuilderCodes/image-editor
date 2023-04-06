import { ChangeEvent, useState } from "react";
import EditingArea from "./components/EditingArea"
import Sidebar from "./components/Sidebar"



 
function App() {

  const [filters , setFilters] = useState(
    {grayScale: 0 , brightness: 0 , saturate: 0 , blur: 0}
    )

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>
      setFilters({ ...filters, [e.target.name]: e.target.value });
  

  const imageStyles = {
    filter: `saturate(${filters.saturate}) grayscale(${filters.grayScale}%) brightness(${filters.brightness}) blur(${filters.blur}px) `,
  };
  

  const imageProps = {
    filters,
    onChange,
  }

  return (
    <div className="flex">
      <Sidebar imageStyles={imageStyles} {...imageProps} />
      <EditingArea imageStyles={imageStyles} {...imageProps} />
    </div>
  );
}

 

export default App

