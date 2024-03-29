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

export default function UploadJSON() {
  const [file, setFile] = useState();
  const classes = useStyle();

  function onFileChange(e) {
    setFile(e.target.file);
    showFileStatus();
  }

  function showFileStatus(e) {
    let div = document.getElementById("file-status");
    div.style.display = "block";
  }

  return (
    <div>
      <Button className={classes.root} variant="contained" component="label">
        Upload JSON
        <input type="file" onChange={onFileChange} hidden />
      </Button>
      <div className={classes.div} id="file-status" style={{ display: "None" }}>
        JSON file upload successful
      </div>
    </div>
  );
}
