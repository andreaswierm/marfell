const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/revenue', function(req, res) {
  res.json({
    total: 200000,
    smartphone: 80000,
    tablet: 120000
  });
});

app.get('/impressions', function(req, res) {
  res.json({
    total: 50000000,
    smartphone: 30000000,
    tablet: 20000000
  });
});

app.get('/visits', function(req, res) {
  res.json({
    total: 600000000,
    smartphone: 120000000,
    tablet: 480000000
  });
});

app.get('/health', function(req, res) {
  res.json({ok: true});
});

app.listen(3000, function() {
  console.log('Mock API running on port 3000!');
});
