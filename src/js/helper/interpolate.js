define(function() {
  return function(template, scope) {
    template = template.replace(/(\r\n|\n|\r)/gm,"");

    function getInner() {
      var functionBody = [];

      while(template.length) {
        if (template.indexOf('{{') > -1 && template.indexOf('{{') < template.indexOf('}}')) {
          functionBody.push("'" + template.slice(0, template.indexOf('{{')) + "'");

          template = template.slice(template.indexOf('{{') + 2, template.length);
        } else if (template.indexOf('}}') > -1) {
          functionBody.push("state." + template.slice(0, template.indexOf('}}')));

          template = template.slice(template.indexOf('}}') + 2, template.length);
        } else {
          functionBody.push("'" + template + "'");

          break;
        }
      }

      return functionBody.join(' + ');
    }

    var newFunc = new Function('state', 'return ' + getInner());

    return newFunc(scope)
  }
})
