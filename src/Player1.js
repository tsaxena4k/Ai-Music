import { storage } from "./firebase/firebase";
import React, { useState } from "react";

function Player1({message}) {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  console.log(imageAsFile);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .putString(message.replace(/\s/g, ''), "base64")
      .then(function (snapshot) {
        console.log("Uploaded a base64 string!");
      });
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
    );
  };

  //   const detectEmotion=()=>{
  //     const url = 'https://emotion-detection2.p.rapidapi.com/emotion-detection';
  //     const data = { key1: 'value1', key2: 'value2' };
  //     const response = await axios.post(url, data);
  //     console.log(response.data);
  //   }

  return (
    <div className="App">
      <form onSubmit={handleFireBaseUpload}>
        <input type="file" onChange={handleImageAsFile} />
        <button>upload to firebase</button>
      </form>
      <img src={imageAsUrl.imgUrl} alt="image tag" />
    </div>
  );
}

export default Player1;
