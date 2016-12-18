define(['highcharts'], function(highcharts) {
  function getPercentage(number, total) {
    return Math.floor((number / total) * 100);
  }

  return {
    templateId: 'chart-template',

    state: function(scope) {
      scope.tabletShare = getPercentage(scope.tablet, scope.total);
      scope.smartphoneShare = getPercentage(scope.smartphone, scope.total);

      return scope;
    },

    afterRender: function(scope, element) {
      var chartContainer = element.getElementsByClassName('radiusChartContainer')[0];

      highcharts.chart(chartContainer, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          width: 200,
          height: 200
        },
        credits: {position: {y: -1000}},
        title: {
          text: scope.total,
          align: 'center',
          verticalAlign: 'middle',
          y: 20
        },
        subtitle: {
          text: scope.type,
          y: 80
        },
        plotOptions: {
          pie: {
            dataLabels: {enabled: false},
            startAngle: 0,
            endAngle: 360,
          }
        },
        series: [{
          type: 'pie',
          name: 'data',
          innerSize: '90%',
          data: [
            {
              name: 'Smartphone',
              y: scope.smartphoneShare,
              color: scope.secondaryColor
            },
            {
              name:'Tablet',
              y: scope.tabletShare,
              color: scope.primaryColor
            }
          ]
        }]
      });
    }
  }
});
