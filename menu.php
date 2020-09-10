<?php 
require_once 'layout/header.php';
?>

    <div class="menu">
        <p>
            <br>
            <br>
        <i>
        Application Web qui va permettre au chef de département de savoir si le département qu’il a choisit permet de visualiser les différentes énergies utilisés.
        </p>
        <p>
        Cela permettra de savoir si le département est soucieux de son environnement et les points à améliorer.

        Utiliser la géolocalisation de l’utilisateur 
        </p>

        <p>Développé par Erwan, Gabriel, Romain</p>
        <p>Designé par Jean et Martin</p>
        </i>


    </div>
    <div class="page">
    <div class="notice">
        <br>
        <br>
        <br>
        <br>
        <br>
        <p style="color: green;">L'objectif est de résponsabiliser les chefs de départements et de régions égalements sur ses habitants </p>
        <p style="color: orange;">On analyse la quantité d'énergies utilisés soit le gaz, l'électricité et le pétrole</p>
        <p style="color: red;">La régions doit être éco responsable et soucieuse de l'environnement ce qui est retransmis sur la couleur des chaussures </p>
    </div>
    
    

    <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="dist/images/animation_500_kewl71mi.gif" >
      <div class="carousel-caption">
      </div>   
    </div>
    <div class="carousel-item">
      <img src="dist/images/animation_orange.gif">
         
    </div>
    <div class="carousel-item">
      <img src="dist/images/animation_rouge.gif">
         
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

</div>

<?php require_once 'layout/footer.php'; ?>