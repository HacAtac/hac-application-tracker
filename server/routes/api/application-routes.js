const router = require("express").Router();
const { Application } = require("../../models");

// GET /api/applications
//get all applications from the database
router.get("/", (req, res) => {
  // Access our Application model and run .findAll() method)
  Application.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((dbApplicationData) => res.json(dbApplicationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/applications/1
router.get("/:id", (req, res) => {
  Application.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbApplicationData) => {
      if (!dbApplicationData) {
        res.status(404).json({ message: "No application found with this id" });
        return;
      }
      res.json(dbApplicationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/applications
router.post("/", (req, res) => {
  // expects {jobname: 'yada', jobtype: etc. etc. etc.}
  Application.create(req.body)
    .then((dbApplicationData) => res.json(dbApplicationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1
//route to update an application by id
router.put("/:id", (req, res) => {
  // expects {jobname: 'yada', jobtype: etc. etc. etc.}
  Application.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbApplicationData) => {
      if (!dbApplicationData) {
        res.status(404).json({ message: "No application found with this id" });
        return;
      }
      res.json(dbApplicationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/applications/1
router.delete("/:id", (req, res) => {
  Application.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbApplicationData) => {
      if (!dbApplicationData) {
        res.status(404).json({ message: "No application found with this id" });
        return;
      }
      res.json(dbApplicationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
