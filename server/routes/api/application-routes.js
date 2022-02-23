const router = require("express").Router();
const { Application } = require("../../models");

// GET /api/applications
router.get("/", (req, res) => {
  // Access our Application model and run .findAll() method)
  Application.findAll({});
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
router.put("/:id", (req, res) => {});

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
