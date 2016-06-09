<?php include 'partials/header.php' ;?>

<?php

$path = '/index.php';

?>
<section>
  <header>
    <form class="" action="<?php echo $path; ?>" method="post">
      <input id="logOut" type="submit" name="name" value="Logout">
    </form>

    <a class="add-entry" href="#">Add Entry</a>

  </header>
</section>


<section>
  <div class="user-info"></div>
  <div class="add-data">
    <form class="" action="" method="post">
      <label for="">Date</label>
      <input type="input" name="date" value="<?php echo date('l, F j, Y') ?>">

      <input type="submit" name="submit" value="submit">
    </form>

  </div>

</section>

<section>
  User Profile
  <div class="profile">

  </div>
</section>

<?php include 'partials/footer.php' ;?>
