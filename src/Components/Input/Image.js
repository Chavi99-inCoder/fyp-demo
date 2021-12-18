import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
  },
  div: {
    marginTop: "10px",
  },
}));

export default function UploadImage() {
  const [image, setImage] = useState();
  const classes = useStyle();

  function onImageChange(e) {
    setImage(e.target.image);
    showStatus();
  }

  function showStatus(e) {
    let div = document.getElementById("upload-status");
    div.style.display = "block";
  }

  return (
    <div>
      <Button className={classes.root} variant="contained" component="label">
        Upload image
        <input type="file" accept="image/*" onChange={onImageChange} hidden />
      </Button>
      <div
        className={classes.div}
        id="upload-status"
        style={{ display: "None" }}
      >
        Image upload successful
      </div>
    </div>
  );
}
