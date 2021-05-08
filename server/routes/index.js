const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/cats", controllers.createCat);

router.get("/cats", controllers.getAllCats);

router.get("/cats/:id", controllers.getCatByID);

router.put("/cats/:id", controllers.updateCat);

router.delete("/cats/:id", controllers.deleteCat);

module.exports = router;
