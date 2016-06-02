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
			<input type="submit" name="name" value="Submit" id="loginSubmit">

		</form>
		<h3>Don't have an account? <a class="toggle" href="#">Sign up</a></h3>
<br>
	<form id="register" class="auth__section-form auth__section-form--register" action="<?php echo $dashboardPath ?>" method="post">
		<h2 class="auth__section-title">Register</h2>
		<label for="registerEmail">Email</label>
		<input type="email" name="email" value="" id="registerEmail">
		<br>
		<label for="registerUsername">Username</label>
		<input type="text" name="pw" value="" id="registerUsername">
		<br>

		<label for="registerEmail">Password</label>
		<input type="password" name="pw" value="" id="registerPw">


		<input type="submit" name="name" value="Submit" id="registerSubmit">
	</form>
	</section>



	<?php include 'partials/footer.php' ;?>
