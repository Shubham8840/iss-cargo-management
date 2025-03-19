const express = require("express");
const router = express.Router();

// Sample data (Replace with DB later)
const storedItems = [
  { itemId: "001", name: "Food Packet", containerId: "contA", zone: "Crew Quarters" },
  { itemId: "002", name: "Oxygen Cylinder", containerId: "contB", zone: "Airlock" },
  { itemId: "003", name: "First Aid Kit", containerId: "contC", zone: "Laboratory" },
];

// Search API Route
router.get("/", (req, res) => {
  const { itemId, itemName } = req.query;

  if (!itemId && !itemName) {
    return res.status(400).json({ error: "Please provide either itemId or itemName" });
  }

  let foundItem = storedItems.find(
    (item) => item.itemId === itemId || item.name.toLowerCase() === itemName?.toLowerCase()
  );

  if (!foundItem) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json({ success: true, item: foundItem });
});

module.exports = router;
