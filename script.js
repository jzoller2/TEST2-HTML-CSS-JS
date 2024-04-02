<!DOCTYPE html>
<html>
<head>
   <title>JavaScript Demo</title>
   <meta charset="UTF-8">
</head>
<body>
   <h1>Popup Demo</h1>
   <script>

   let okPressed = false;
   if (okPressed) {
      let myWindow = window.open("", "", "width=250, height=100");
      myWindow.document.writeln("<h1>Hello, Popup!</h1>");
   }

   </script>
</body>
</html>
