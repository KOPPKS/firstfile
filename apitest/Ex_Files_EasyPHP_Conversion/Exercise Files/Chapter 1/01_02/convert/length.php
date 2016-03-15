<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Convert Length</title>
    <link href="styles.css" rel="stylesheet" type="text/css">
  </head>
  <body>

    <div id="main-content">

      <h1>Convert Length</h1>
  
      <form action="" method="post">
        
        <div class="entry">
          <label>From:</label>&nbsp;
          <input type="text" name="from_value" value="" />&nbsp;
          <select name="from_unit">
            <option value="inches"<?php if($_POST['from_unit'] == 'inches') { echo " selected"; } ?>>inches</option>
            <option value="feet"<?php if($_POST['from_unit'] == 'feet') { echo " selected"; } ?>>feet</option>
            <option value="yards"<?php if($_POST['from_unit'] == 'yards') { echo " selected"; } ?>>yards</option>
            <option value="miles"<?php if($_POST['from_unit'] == 'miles') { echo " selected"; } ?>>miles</option>
            <option value="millimeters"<?php if($_POST['from_unit'] == 'millimeters') { echo " selected"; } ?>>millimeters</option>
            <option value="centimeters"<?php if($_POST['from_unit'] == 'centimeters') { echo " selected"; } ?>>centimeters</option>
            <option value="meters"<?php if($_POST['from_unit'] == 'meters') { echo " selected"; } ?>>meters</option>
            <option value="kilometers"<?php if($_POST['from_unit'] == 'kilometers') { echo " selected"; } ?>>kilometers</option>
          </select>
        </div>
        
        <div class="entry">
          <label>To:</label>&nbsp;
          <input type="text" name="to_value" value="" />&nbsp;
          <select name="to_unit">
            <option>To Unit</option>
          </select>
          
        </div>
        
        <input type="submit" value="Submit" />
      </form>
  
      <br />
      <a href="index.php">Return to menu</a>
      
    </div>
  </body>
</html>
