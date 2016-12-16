define(function() {
  var apiPath = "http://localhost:3000";

  function get(path) {
    return fetch(apiPath + path)
      .then(function(response) {
        return response.json();
      });
  }

  return {get: get};
});
