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

    }
  }
});
