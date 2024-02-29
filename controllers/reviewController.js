const reviewModel = require("../models/reviewModel")


const getAllreviews = async (req, res, next) => {
    try {
        const reviews = await reviewModel.find(req.query);
        res.status(200).send({
            message: 'review List',
            reviews
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Error in getting reviews')
    }

}




const addreview = async (req, res, next) => {
    try {
        const review = new reviewModel(req.body)
        await review.save();
        res.status(201).send({
            message: 'review added successfully',
            review
        })

    }
    catch (error) {
        console.log(error)
        res.status(400).send('Check Fileds')
    }
}

module.exports = {
    getAllreviews,
    addreview,
    
}