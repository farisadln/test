module.exports = app => {

    const csv = require("../controllers/csvControllers")

    const router = require("express").Router();

    router.get("/:sensor_id", csv.findId );
    router.get("/", csv.findData)
   

    app.use('/api', router);

};