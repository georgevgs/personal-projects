<!DOCTYPE html>
<html>
<body>

<h1>Ergasia 4</h1>

Username: <?php echo htmlspecialchars($_POST['username']); ?>
<?php echo "<br/>"; ?>
Password: <?php echo (int)$_POST['password']; ?>
<?php echo "<br/>"; ?>
Property: <?php echo htmlspecialchars($_POST['property']); ?>
<?php echo "<br/>"; ?>
<?php echo "<br/>"; ?>

<?php echo "Cookies:"; ?>
<?php echo "<br/>"; ?>
<?php foreach ($_COOKIE as $key=>$val) { print $key . " => " . $val . "<br/>"; } ?>

</body>
</html>
