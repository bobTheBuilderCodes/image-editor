import { Download } from '@mui/icons-material';
import { Button, IconButton, dividerClasses } from '@mui/material';
import React, { ChangeEvent, useRef , useState } from 'react'
import RobertSam from '../assets/RobertSam.jpg'

const EditingArea = () => {

  const imageRef = useRef<HTMLInputElement>(null);

  const [uploadedImage, setUploadedImage] = useState<string[]>([])
  console.log('iMAGE' , uploadedImage);
  console.log("LENGTH", uploadedImage.length);
  

  const uploadImage = () => {
 imageRef?.current?.click()
  }


const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  console.log('Files', files);
  
  if (files && files.length > 0) {
    setUploadedImage((imgfile) => [...imgfile, URL.createObjectURL(files[0])]);
    // setUploadedImage(files);
    
  }
};


  return (
    <div className="w-4/5 h-screen border-r-2 border-[#333]">
      <div>
        <div className="h-[6vh] border-b-2 border-[#333] flex items-center justify-end pr-6">
          <Button
            variant="outlined"
            color="primary"
            sx={{ mr: 3 }}
            disabled={uploadedImage.length === 0}
          >
            Remove photo
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ mr: 3 }}
            disabled={uploadedImage.length === 0}
          >
            Change photo
          </Button>
          <Button
            disabled={uploadedImage.length === 0}
            variant="contained"
            color="primary"
            endIcon={<Download className="text-gray-100" fontSize="large" />}
          >
            <a href={uploadedImage[0]} download>
              Download
            </a>
          </Button>
        </div>
        {uploadedImage.length > 0 ? (
          <div className="grid place-items-center h-[94vh]">
            <img
              src={uploadedImage[0]}
              alt="Uploaded image"
              className="max-h-[80vh]"
            />
          </div>
        ) : (
          <div
            id="#photo"
            className="flex justify-center text-center items-center mt-auto bg-[#222] h-[94vh] "
          >
            <div
              onClick={uploadImage}
              className=" border-2 border-[#333] border-dotted h-2/5 w-3/5 bg-[#242424] cursor-pointer grid place-items-center"
            >
              <div className="text-gray-400 text-2xl font-bold">
                {" "}
                Click here to upload a picture <br />
                <span className="text-center font-extralight text-sm">
                  We do not save your photos
                </span>
                <span>
                  <input
                    type="file"
                    name=""
                    id="photo"
                    className="hidden"
                    onChange={handleImageUpload}
                    ref={imageRef}
                  />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditingArea
