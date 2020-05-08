const router = require("express").Router();

const actionRouter = require("../action-router");
const projectRouter = require("../project-router");

// router.use("/actions", actionRouter)

router.use("/projects", projectRouter);



module.exports = router;
