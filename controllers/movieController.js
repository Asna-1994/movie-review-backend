const movieModel = require("../models/movieModel")


const getAllMovies = async (req, res, next) => {
    try {
        const movies = await movieModel.find({});
        res.status(200).send({
            message: 'Movie List',
            movies
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error in getting movies')
    }

}


const getOneMovie = async (req, res, next) => {
    try {
        const movie = await movieModel.findOne({slug : req.params.slug});
        res.status(200).send({
            message: 'Requested Movie',
            movie
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error in getting movie')
    }

}

const addMovie = async (req, res, next) => {
    try {
        const movies = new movieModel(req.body)
        await movies.save();
        res.status(201).send({
            message: 'Movie added successfully',
            movies
        })

    }
    catch (error) {
        console.log(error)
        res.status(400).send('Check Fileds')
    }
}

module.exports = {
    getAllMovies,
    addMovie,
    getOneMovie
}