const router = require('express').Router();

const { doctorsController } = require('../controllers');
const { mwDoctors } = require('../middlewares');

router.route('/')
    .get(doctorsController.getDoctors);

module.exports = router;
