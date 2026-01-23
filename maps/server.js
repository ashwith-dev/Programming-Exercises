const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Convert address → lat/lon
async function geocode(address) {
  const queries = [
    address,
    address + ", Hyderabad, Telangana, India",
    address + ", India"
  ];

  for (let q of queries) {
    const res = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: q,
          format: "json",
          limit: 1
        },
        headers: {
          "User-Agent": "free-maps-learning-project"
        }
      }
    );

    if (res.data && res.data.length > 0) {
      return {
        lat: res.data[0].lat,
        lon: res.data[0].lon
      };
    }
  }

  return null;
}

// Distance + time from OSRM
async function getRoute(start, end) {
  const url = `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=false`;
  const res = await axios.get(url);
  return res.data.routes[0];
}

app.post("/calculate", async (req, res) => {
  try {
    const { origin, destination } = req.body;

    const start = await geocode(origin);
    const end = await geocode(destination);

    if (!start || !end) {
      return res.status(400).json({ error: "Invalid address" });
    }

    const route = await getRoute(start, end);

    res.json({
      distance_km: (route.distance / 1000).toFixed(2) + " km",
      duration_min: (route.duration / 60).toFixed(1) + " mins"
    });

  } catch (err) {
    res.status(500).json({ error: "Unable to calculate" });
  }
});

app.listen(3000, () =>
  console.log("FREE server running at http://localhost:3000")
);
