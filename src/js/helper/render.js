define(['helper/interpolate'], function(interpolate) {
  return function(componentDefinition, elementId, scope) {
    var state = componentDefinition.state(scope),
        template = document.getElementById(componentDefinition.templateId).innerHTML,
        element = document.getElementById(elementId);

    element.innerHTML = interpolate(template, state);

    setTimeout(function() {
      componentDefinition.afterRender(scope, element);
    });
  }
});
