const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');

//Inserire la lettura della cartella public

app.use(express.static('public'));

app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

