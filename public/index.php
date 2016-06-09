<<<<<<< HEAD
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" href="/assets/style.css" media="screen" title="no title" charset="utf-8">
	</head>
	<body>

	</body>
</html>
=======
<?php include 'partials/header.php' ;?>
<?php

$dashboardPath = '/dashboard.php';

?>

	<section class="auth__section">
			<form id="loginForm" class="auth__section-form auth__section-form--login" action="<?php echo $dashboardPath ?>" method="post">
			<h2 class="auth__section-title">Login</h2>
			<label for="loginEmail">Email</label>
			<input type="email" name="email" id="loginEmail">
			<br>
			<label for="loginPw">Password</label>
			<input type="password" name="pw" id="loginPassword">
			<br>
			<input type="checkbox" name="name" value="" id="rememberMe">
			<label for="rememberMe">Remember Me</label>
			<br>
<!-- 			<a href="#" data-target="forgetPassword">Forget Password</label>
 -->			<br>
			<input type="submit" name="name" value="Submit" id="loginSubmitButton">

		</form>
		<h3>Don't have an account? <a class="toggle" href="#">Sign up</a></h3>
<br>
	<form id="registerForm" class="auth__section-form auth__section-form--register" action="<?php echo $dashboardPath ?>" method="post">
		<h2 class="auth__section-title">Register</h2>
		<label for="registerEmail">Email</label>
		<input type="email" id="registerEmail">
		<br>
		<label for="registerUsername">Username</label>
		<input type="text" id="registerUsername">
		<br>

		<label for="registerEmail">Password</label>
		<input type="password"  id="registerPassword">


		<input type="submit" value="Submit" id="registerSubmit">
	</form>
	<br>

<span class="signout" style="display:none;">Signout</span>
	</section>



	<?php include 'partials/footer.php' ;?>
>>>>>>> origin/master
