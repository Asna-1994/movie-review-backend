const express = require('express')
const {
    getAllMovies,
    addMovie, 
    getOneMovie} = require('../controllers/movieController')

const router = express.Router()


router.get('/', getAllMovies)

router.post('/add-movie', addMovie)

router.get('/:slug', getOneMovie)

module.exports = router