const express = require("express");
const getController = require("../controllers/getController");
const postControler = require("../controllers/postController");
const router = express.Router();
const app = express();
router.route("/").get(getController.indexPage);
router.route("/doctor").get(getController.doctorPage);
router.route("/hospital").get(getController.hospitalPage);
router.route("/treatment").get(getController.treatmentPage);
router.route("/aboutUs").get(getController.aboutUsPage);
router.route("/faq").get(getController.faqPage);
router.route("/login").get(getController.loginPage);
router.route("/signUp").get(getController.signUpPage);
router.route("/aboutDoctor").get(getController.aboutDoctorPage);
router.route("/aboutHospital").get(getController.aboutHospitalPage);
router.route("/appointment").get(getController.appointmentPage);
router.route("/contactUs").get(getController.contactUsPage);

router.route("/signUp").post(postControler.signUp);
module.exports = router;