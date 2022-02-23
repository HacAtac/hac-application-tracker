const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const applicationRoutes = require("./application-routes.js");

router.use("/users", userRoutes);
router.use("/applications", applicationRoutes);

module.exports = router;
