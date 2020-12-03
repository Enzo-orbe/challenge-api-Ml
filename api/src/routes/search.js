const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/", (req, res) => {
    const query = req.query.q;
    const offset = req.query.offset;
    const sort = req.query.sort;
    axios.get(`https://api.mercadolibre.com//sites/MLA/search?q=${query}&limit=30&offset=${offset}&sort=${sort}`)
    .then((respuesta) => {
        res.status(200).json(respuesta.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  
});


module.exports = router;