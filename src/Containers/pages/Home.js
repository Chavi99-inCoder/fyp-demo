import { Button, Grid } from "@material-ui/core";
import React from "react";
import UploadImage from "../../Components/Input/Image";
import UploadJSON from "../../Components/Input/json";

export default function Home() {
  return (
    <div>
      <h1>Use Case #1</h1>
      <Grid container spacing={2}>
        <Grid item xs={5} style={{ height: "200px" }}>
          Upload the Mobile Application UI screenshot
          <UploadImage />
        </Grid>
        <Grid item xs={5} style={{ height: "200px" }}>
          Upload the corresponding metadata through a JSON file
          <UploadJSON />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}
