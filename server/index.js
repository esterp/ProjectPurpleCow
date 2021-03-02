import express from 'express';

// create express app
const app = express();

// add middleware, so express serves all files on folder
app.use(express.static("public"));

//start express server on port 8080
app.listen(8080, () => {
    console.log("server started on port 8080");
});