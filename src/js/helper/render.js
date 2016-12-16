define(['helper/interpolate'], function(interpolate) {
  return function(componentDefinition, scope) {
    var state = componentDefinition.state(scope);
    var template = document.getElementById(componentDefinition.templateId).innerHTML;

    var endTemplate = interpolate(template, state);

    componentDefinition.afterRender(scope);

    return endTemplate;
  }
});
