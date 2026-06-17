<?php
$marker = "PHP_EXECUTION_" . "OBSERVED_MARKER";
header("Content-Type: text/plain");
echo $marker;
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RQ2 PHP Dynamic Boundary Probe</title>
</head>
<body>
  <h1>RQ2 controlled author-owned sandbox</h1>
  <p>RQ2 controlled author-owned sandbox. No phishing, malware, credential collection, exploit delivery, or real command execution.</p>
  <p>This benign probe checks whether GitHub Pages executes PHP. If the PHP source is visible or this page is served unchanged, server-side PHP execution was not observed.</p>
</body>
</html>
