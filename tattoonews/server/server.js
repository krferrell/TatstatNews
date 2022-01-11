const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json('hi');
});

app.get('/news', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
          q: 'tattoo',
          pageNumber: '1',
          pageSize: '50',
          autoCorrect: 'true',
          fromPublishedDate: 'null',
          toPublishedDate: 'null'
        },
        headers: {
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
          'x-rapidapi-key': 'f67d13a6f5msh97e30166990fd25p17f360jsn567dcd2e10df'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });
})

app.listen(8000, () => console.log(`backend is running on port ${PORT}`));
