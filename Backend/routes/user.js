const express = require("express");

const router = express.Router();
const usercontroller = require("../controller/user");
const multer=require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./images"); // Directory to save uploads
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

//post
router.post("/signUp", usercontroller.signUp);
router.post("/signIn", usercontroller.signIn);
router.post("/registerChicken", usercontroller.registerChicken);
router.post("/registerGoat", usercontroller.registerGoat);
router.post("/storeEggData", usercontroller.storeEggData);
router.post("/storeMilkData", usercontroller.storeMilkData);
router.post('/checkHealth',upload.single('image'),usercontroller.checkHealth)
router.post("/registerTransaction",usercontroller.registerTransaction);
router.post("/getExpenses",usercontroller.getExpenses);
router.post("/getRevenue",usercontroller.getRevenue);

//get
router.get("/getFlockbyID", usercontroller.getFlockbyID);
router.get("/getFlockbyUser", usercontroller.getFlockbyUser);
router.get("/getGoatbyID", usercontroller.getGoatbyID);
router.get("/getGoatbyUser", usercontroller.getGoatbyUser);
router.get("/getEggData", usercontroller.getEggData);
router.get("/getMilkData", usercontroller.getMilkData);

//put

//patch

//delete

module.exports = router;
