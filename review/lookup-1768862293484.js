(function(window, undefined) {
  var dictionary = {
    "2db7ea32-5b42-41ae-aa66-5e39adf97b65": "Dining",
    "72281afb-25cf-4992-b745-c602625c8573": "About",
    "ffd92c85-4509-409e-9bd9-f64d448a7a80": "Lodging",
    "e501410d-4a4e-442a-94f1-1dd2aa9c3c5a": "Transportation",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "e4c67669-0a4b-426c-b2c1-b144be5ee458": "Attractions",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);