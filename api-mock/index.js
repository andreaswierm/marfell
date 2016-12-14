const express = require('express');

const app = express();

app.get('/health', function(req, res) {
  res.json({ok: true});
});

app.listen(3000, function() {
  console.log('Mock API running on port 3000!');
});
