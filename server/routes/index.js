//require the express npm package
const router = require("express").Router();

//here were require the api folder so that we can run all endpoints through /api
const apiRoutes = require("./api");

//this use of router.use is so that all the routes below it will be protected by the apiRoutes middleware
//in layman terms, this is saying "if any of these routes are hit, run the apiRoutes middleware"
router.use("/api", apiRoutes);

//here we use router.use again so if we go to an incorrect endpoint we can catch it and send a 404
router.use((req, res) => {
  res.status(404).end();
});

//exporting the router so that it can be used elsewhere
module.exports = router;
