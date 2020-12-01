const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/", (req, res) => {
    const query = req.query.q;
    const offset = req.query.offset;
    console.log(query)
    axios.get(`https://api.mercadolibre.com//sites/MLA/search?q=${query}&limit=30&offset=${offset}`)
    .then((respuesta) => {
        res.status(200).json(respuesta.data);
      })
  
      .catch((err) => {
        console.log(err.message);
      });
  
});


module.exports = router;