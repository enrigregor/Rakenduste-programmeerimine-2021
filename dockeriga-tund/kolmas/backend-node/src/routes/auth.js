const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
      //trim pole vaja kui .matches on olemas
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      //escape() meetod lõhkus saatmise ära ning googles ütles et reactis peaks see sees olema automaatselt(kui ma postitusest õigesti aru sain)
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;