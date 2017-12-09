
const axios = require('axios');

const { apiKey } = require("./../config");

let getApiData = (req, res, next) => {

    axios.get(`https://api.themoviedb.org/3/search/movie/${apiKey}/${req.body}`)
    .then(result => {
        return res.json(result.data);
    });
};

module.exports = {
    getApiData
};