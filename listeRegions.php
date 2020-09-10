<?php 
require_once 'layout/header.php';

 ?>


    <main>
        
        
             <main class="container"
    <br><table class="table table-hover">
    <tr>
        
        <th>Région</th>
        <th>Nom</th>
        <th>Population</th>
        
    </tr>

    <?php
    
    $db = new PDO("mysql:host=".Config::SERVEUR.";dbname=".Config::BASEDEDONNEES
            ,Config::UTILISATEUR, Config::MOTDEPASSE);

            $r = $db->prepare("select * from region
                                         ORDER BY id");
            $r->execute();

            $resultats=$r->fetchAll();

    foreach ($resultats as $ligne) {
        ?>

        <tr>
           
            <td><?php echo $ligne["id"] ?></td>
            <td><?php echo $ligne["NCC"] ?></td>
            <td><?php echo $ligne["POP"] ?></td>
            
            <td>

            
        

<?php }?>

<?php require_once 'layout/footer.php'; ?>