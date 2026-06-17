(function () {
  var targets = [
    document.getElementById("external-js-result"),
    document.getElementById("external-resource-status")
  ];
  targets.forEach(function (target) {
    if (target) {
      target.textContent = "Benign cross-origin resource loaded successfully";
    }
  });
  console.log("Benign cross-origin resource loaded successfully");
}());

