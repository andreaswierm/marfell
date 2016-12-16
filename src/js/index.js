requirejs.config({
  baseUrl: 'js',
  paths: {
    highcharts: "http://code.highcharts.com/highcharts"
  },
  shim: {
    highcharts: {
      exports: 'Highcharts'
    }
  }
});

requirejs(['app']);
