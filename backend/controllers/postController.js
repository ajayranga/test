const user = require("../databases/mongoSchema");
function signUp(req, res) {
  const {
    name,
    email,
    password,
    gender,
    date,
    number,
    city,
    state,
    country,
  } = req.body;
  console.log("hello");
  var errStatus = 0;
  var letters = /^[A-Za-z]+$/;
  var digits = /^[0-9]+$/;
  if (!name.match(letters) || !number.match(digits)) {
    errStatus = 1;
  }
  if (
    email === "" ||
    password === "" ||
    date === "" ||
    number === "" ||
    state === "" ||
    city === "" ||
    gender === "Select your gender" ||
    country === "Select your Country"
  ) {
    errStatus = 1;
  }
  if (errStatus === 1) {
    req.session.errStatus = errStatus;
    return res.render("signUp", { errStatus: errStatus });
  } else {
    const newUser = new user({
      name: name,
      email: email,
      password: password,
      gender: gender,
      date: date,
      number: number,
      address: { city: city, state: state, country: country },
    });
    newUser
      .save()
      .then((usr) => {
        return res.redirect("/login");
      })
      .catch((err) => {
        console.log(err)
        res.render("signUp", { errStatus: 2, err: err });
      });
  }
}
module.exports = {
  signUp: signUp,
};
