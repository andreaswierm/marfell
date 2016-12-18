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
      impressions.primaryColor = '#08CCE5';
      impressions.secondaryColor = '#045268';

      revenue.type = 'Revenue';
      revenue.primaryColor = '#56D731';
      revenue.secondaryColor = '#016A01';

      visits.type = 'Visits';
      visits.primaryColor = '#FEC404';
      visits.secondaryColor = '#DA5C17';

      render(chart, 'impressions-chart', impressions);
      render(chart, 'revenue-chart', revenue);
      render(chart, 'visits-chart', visits);
    });
});
