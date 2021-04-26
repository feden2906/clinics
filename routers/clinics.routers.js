const router = require('express').Router();

const { clinicsController } = require('../controllers');
const { mwClinics } = require('../middlewares');

router.route('/')
    .get(clinicsController.getClinics);

module.exports = router;
