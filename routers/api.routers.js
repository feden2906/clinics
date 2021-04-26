const router = require('express').Router();

const clinicsRouter = require('./clinics.routers');
const doctorsRouter = require('./doctors.routers');

router.use('/admin/clinics', clinicsRouter);
router.use('/admin/doctors', doctorsRouter);

module.exports = router;
