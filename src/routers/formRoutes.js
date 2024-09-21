const express = require("express");
const formController = require("../controllers/formController");

const router = express.Router();

router.get(
  "/forms",
  (req, res, next) => {
    next();
  },
  formController.getAllForms
);

router.get(
  "/forms/:id",
  (req, res, next) => {
    next();
  },
  formController.getFormById
);

router.post(
  "/forms",
  (req, res, next) => {
    next();
  },
  formController.createForm
);

router.put(
  "/forms/:id",
  (req, res, next) => {
    next();
  },
  formController.updateForm
);

router.delete(
  "/forms/:id",
  (req, res, next) => {
    next();
  },
  formController.deleteForm
);

module.exports = router;
