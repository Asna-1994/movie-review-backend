const express = require('express')
const {
    getAllreviews,
    addreview
 } = require('../controllers/reviewController')


const router = express.Router()


router.get('/', getAllreviews)

router.post('/add-review', addreview)



module.exports = router