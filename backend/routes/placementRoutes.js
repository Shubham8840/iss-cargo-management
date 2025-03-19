const express = require("express");
const router = express.Router();

// Sample containers (Replace with DB later)
const containers = [
  { containerId: "contA", zone: "Crew Quarters", width: 100, depth: 85, height: 200 },
  { containerId: "contB", zone: "Airlock", width: 50, depth: 85, height: 200 },
  { containerId: "contC", zone: "Laboratory", width: 200, depth: 85, height: 200 },
];

// Placement API Route
router.post("/", (req, res) => {
  const { items } = req.body; // Get incoming items from request

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Invalid input format" });
  }

  let placements = [];

  items.forEach((item) => {
    // Find the first available container
    let suitableContainer = containers.find((c) => c.zone === item.preferredZone);

    if (!suitableContainer) {
      suitableContainer = containers[0]; // Default to first container if preferred is unavailable
    }

    placements.push({
      itemId: item.itemId,
      containerId: suitableContainer.containerId,
      position: { width: 0, depth: 0, height: 0 }, // Simplified placement logic
    });
  });

  res.json({ success: true, placements });
});

module.exports = router;
