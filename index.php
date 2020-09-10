<?php require_once 'layout/header.php';

$db = new PDO("mysql:host=" . Config::SERVEUR . ";dbname=" . Config::BASEDEDONNEES, Config::UTILISATEUR, Config::MOTDEPASSE);

$r = $db->prepare("select region.NCC, SUM(donnees_petrole.SUPER_SANS_PLOMB), SUM(donnees_petrole.GAZOLE) from donnees_petrole
                                join departement on departement.Dep = donnees_petrole.Dep
                                join region on region.region = departement.region
                                GROUP BY REGION.NCC
                                ORDER BY region.NCC ASC ");
$r->execute();
//$r->debugDumpParams();
$resultats_oil = $r->fetchAll();


$r = $db->prepare("select region.NCC, SUM(donnees_gaz.CONSOR) from donnees_gaz
                                join departement on departement.Dep = donnees_gaz.Dep
                                join region on region.region = departement.region
                                GROUP BY REGION.NCC
                                ORDER BY region.NCC ASC");
$r->execute();
//$r->debugDumpParams();
$resultats_gaz = $r->fetchAll();


$r = $db->prepare("select region.NCC, SUM(donnees_elec.CONSOR) from donnees_elec
                                    join departement on departement.Dep = donnees_elec.Dep
                                    join region on region.region = departement.region
                                    GROUP BY REGION.NCC
                                    ORDER BY region.NCC ASC");
$r->execute();
//$r->debugDumpParams();
$resultats_elec = $r->fetchAll();


?>
    <table>
        <tr>
            <th>Region</th>
            <th>Consommation résidentiel (en gaz en MWh)</th>
            <th>Consommation résidentiel (en éléctricité en MWh)</th>
            <th>Consommation de gazole (en tonne)</th>
            <th>Consommation de super sans plomb (en tonne)</th>
        </tr>
        <tr>

            <td></td>


        </tr>

    </table>

<?php


require_once 'layout/footer.php';
