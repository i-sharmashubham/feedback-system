const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateAddDepartment = require("../../validation/department");

const Dept = require("../../models/Dept");

router.post("/adddept", (req, res) => {

  const { errors, isValid } = validateAddDepartment(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
    Dept.findOne({ email: req.body.email }).then(department => {
      if (department) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newDept = new Dept({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone
        });

        newDept
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
      }
    });
  });

  router.get("/dept", (req, res) => {
  
    Dept.find() 
              .then(doc => res.json(doc))
              .catch(err => console.log(err));
  });

  module.exports = router;