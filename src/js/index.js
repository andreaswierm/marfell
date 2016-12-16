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
          visits = results[2];

      impressions.type = 'Impressions';
      revenue.type = 'Revenue';
      visits.type = 'Visits';

      render(chart, 'impressions-chart', impressions);
      render(chart, 'revenue-chart', revenue);
      render(chart, 'visits-chart', visits);
    });
});
