const express = require('express');
const dolci = require('./data/dolci');
const app = express()
const port = 3000
app.use(express.static('public'))
const postsRouter = require("./routers/postRouter")
app.use("/posts", postsRouter);
const controller = require("../controllers/controlloCibo");
const errorsHandler = require("./middlewares/errorsHandler")

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

// Middleware 404
app.use(notFound);
// Middleware 500
app.use(errorsHandler);


// index
router.get('/dolci', (req, res) => {
    res.json(postsDolci)
})

// show
router.get('/dolci/:id', (req, res)=> {
    if (isNaN(req.params.id)) {
        return res.sendStatus(400);
      }
    
      const posts = postsDolci.find((elm) => elm.id == req.params.id);
    
      if (posts) {
        return res.sendStatus(404);
      }

      res.json(dolci);
})

// create
router.post("/dolci", (req, res) => {
    res.send("Creazione nuovo post");
  });

// update
router.put("/dolci/:id", (req, res) => {
    res.send(`Modifica integrale del post: ${req.params.id}`);
  });

// modify
router.patch("/dolci/:id", (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`);
  });

//delete
router.delete("/dolci/:id", (req, res) => {
    res.send(`Eliminazione del post: ${req.params.id}`);
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })