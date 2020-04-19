function indexPage(req, res) {
  return res.render("index");
}

function doctorPage(req, res) {
  return res.render("doctor");
}

function hospitalPage(req, res) {
  return res.render("hospital");
}

function treatmentPage(req, res) {
  return res.render("treatment");
}

function aboutUsPage(req, res) {
  return res.render("aboutUs");
}

function faqPage(req, res) {
  return res.render("faq");
}

function loginPage(req, res) {
  return res.render("login");
}

function signUpPage(req, res) {
if(req.session.errStatus){
  return res.render(("signUp"), {errStatus: req.session.errStatus});
}
else{
  req.session.errStatus=0;
  return res.render(("signUp"), {errStatus: req.session.errStatus});
}}

function aboutDoctorPage(req, res) {
  return res.render("aboutDoctor");
}

function aboutHospitalPage(req, res) {
  return res.render("aboutHospital");
}

function appointmentPage(req, res) {
  return res.render("appointment");
}

function contactUsPage(req, res) {
  return res.render("contactUs");
}

module.exports = {
  indexPage: indexPage,
  doctorPage: doctorPage,
  hospitalPage: hospitalPage,
  treatmentPage: treatmentPage,
  aboutUsPage: aboutUsPage,
  faqPage: faqPage,
  loginPage: loginPage,
  signUpPage: signUpPage,
  aboutDoctorPage: aboutDoctorPage,
  aboutHospitalPage: aboutHospitalPage,
  appointmentPage: appointmentPage,
  contactUsPage: contactUsPage,
};
