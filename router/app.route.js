const portfolioController = require("../controller/app.controller");
const testimonialController = require("../controller/app.controller");
const express = require('express');
const router = express.Router();


router.get('/portfolio', portfolioController.portfolioAppRoute);
router.get('/testimonial', testimonialController.testimonialRoute);


module.exports = router;



/* const controller = require("../controller/app.controller");
const express = require("express");
const router = express.Router();

router.get('/portfolio', controller.portfolioAppRoute);
router.get('/testimonial', controller.testimonialRoute);

module.exports = router;*/





