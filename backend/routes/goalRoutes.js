const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hustle man hustle" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set yourself man hustle" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Change ${req.params.id} tactics man hustle` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Remove ${req.params.id} if it's not moving` });
});

// export router
module.exports = router;
