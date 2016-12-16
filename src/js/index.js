require([
  'api/fetch',
  'helper/render',
  'components/chart'
], function(
  fetch,
  render,
  chart
) {
  Promise.all([
      fetch.get('/impressions'),
      fetch.get('/revenue'),
      fetch.get('/visits')
    ]).then(function(results) {
      var impressions = results[0],
          revenue = results[1],
          visits = results[2],
          impressionsContainer = document.getElementById('impressions-chart'),
          revenueContainer = document.getElementById('revenue-chart'),
          visitsContainer = document.getElementById('visits-chart');

      impressionsContainer.innerHTML = render(chart, impressions);
      revenueContainer.innerHTML = render(chart, revenue);
      visitsContainer.innerHTML = render(chart, visits);
    });
});
