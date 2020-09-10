<?php require_once 'layout/header.php';

$db = new PDO("mysql:host=" . Config::SERVEUR . ";dbname=" . Config::BASEDEDONNEES, Config::UTILISATEUR, Config::MOTDEPASSE);

$r = $db->prepare("select region.NCC, region.POP, SUM(donnees_gaz.CONSOR) as \"donnees_gaz\" from donnees_gaz
                                join departement on departement.Dep = donnees_gaz.Dep
                                join region on region.region = departement.region
                                GROUP BY REGION.REGION
                                ORDER BY SUM(donnees_gaz.CONSOR)");
$r->execute();
$results_gaz = $r->fetchAll();


$r = $db->prepare(" select region.NCC, region.POP,SUM(donnees_elec.CONSOR) as \"donnees_elec\" from donnees_elec
                                    join departement on departement.Dep = donnees_elec.Dep
                                    join region on region.region = departement.region
                                    
                                    GROUP BY REGION.NCC
                                    ORDER BY SUM(donnees_elec.CONSOR)");
$r->execute();
$results_elec = $r->fetchAll();


$r = $db->prepare(" select region.NCC, region.POP, SUM(donnees_petrole.SUPER_SANS_PLOMB) as \"donnees_ssp\" from donnees_petrole
                                join departement on departement.Dep = donnees_petrole.Dep
                                join region on region.region = departement.region
                                GROUP BY REGION.NCC
                                ORDER BY SUM(donnees_petrole.SUPER_SANS_PLOMB)");
$r->execute();
//$r->debugDumpParams();
$results_ssp = $r->fetchAll();

$r = $db->prepare(" select region.NCC, region.POP, SUM(donnees_petrole.GAZOLE) as \"donnees_gazol\" from donnees_petrole
                                join departement on departement.Dep = donnees_petrole.Dep
                                join region on region.region = departement.region
                                GROUP BY REGION.NCC
                                ORDER BY SUM(donnees_petrole.GAZOLE)");
$r->execute();
//$r->debugDumpParams();
$results_gazol = $r->fetchAll();

/*
$r = $db->prepare(" select region.NCC, region.POP, SUM(donnees_gaz.CONSOR) as "donnees_gaz", 0 as "donnees_elec", 0 as "donnees_gazol" from donnees_gaz
    join departement on departement.Dep = donnees_gaz.Dep
    join region on region.region = departement.region
    GROUP BY REGION.NCC
UNION
select region.NCC, region.POP, 0 as "donnees_gaz", SUM(donnees_elec.CONSOR) as "donnees_elec", 0 as "donnees_gazol" from donnees_elec
    join departement on departement.Dep = donnees_elec.Dep
    join region on region.region = departement.region
    GROUP BY REGION.NCC
UNION
select region.NCC, region.POP, 0 as "donnees_gaz", 0 as "donnees_elec", SUM(donnees_petrole.GAZOLE) as "donnees_gazol" from donnees_petrole
    join departement on departement.Dep = donnees_petrole.Dep
    join region on region.region = departement.region
    GROUP BY REGION.NCC
");

$r->execute();
//$r->debugDumpParams();
$results = $r->fetchAll();

$tab["elec"] = $results_elec;
$tab["gaz"] = $results_gaz;
$tab["ssp"] = $results_ssp;
$tab["gazol"] = $results_gazol;
*/
?>
    <main class="container">
        <table class="table">
            <thead>
            <tr>
                <th>Classement</th>
                <th>Region</th>
                <!--                <th>Consommation de gaz par an par personne en MWh</th>-->
                <th>Consommation d'éléctricité en MWh par personne par an</th>
                <!--                <th>Consommation de SUPER SANS PLOMB en tonne par an</th>-->
                <!--                <th>Consommation de GAZOL en tonne par an</th>-->
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($results_elec as $index => $lign) {
                $stats_elec[$index]["donnees_elec"] = intval(intval($lign["donnees_elec"]) / intval($lign["POP"]));
                $stats_elec[$index]["NCC"] = $lign["NCC"];
            }

            asort($stats_elec);
            $stats_elec = array_values(array_filter($stats_elec));

            foreach ($stats_elec as $index => $lign) {
                echo "<tr>";
                echo "<td>" . $index . "</td>";
                echo "<td>" . $lign["NCC"] . "</td>";
                echo "<td>" . $lign["donnees_elec"] . "</td>";
                echo "</tr>";
            } ?>
            </tbody>
        </table>
    </main>

    <main class="container">
        <table class="table">
            <thead>
            <tr>
                <th>Classement</th>
                <th>Region</th>
                <th>Consommation de gaz en MWh par personne par an</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($results_gaz as $index => $lign) {
                $stats_gaz[$index]["donnees_gaz"] = intval(intval($lign["donnees_gaz"]) / intval($lign["POP"]));
                $stats_gaz[$index]["NCC"] = $lign["NCC"];
            }

            asort($stats_gaz);
            $stats_gaz = array_values(array_filter($stats_gaz));

            foreach ($stats_gaz as $index => $lign) {
                echo "<tr>";
                echo "<td>" . $index . "</td>";
                echo "<td>" . $lign["NCC"] . "</td>";
                echo "<td>" . $lign["donnees_gaz"] . "</td>";
                echo "</tr>";
            } ?>
            </tbody>
        </table>
    </main>

    <main class="container">
        <table class="table">
            <thead>
            <tr>
                <th>Classement</th>
                <th>Region</th>
                <th>Consommation de SUPER SANS PLOMB en tonne par an</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($results_ssp as $index => $lign) {
                $stats_ssp[$index]["donnees_ssp"] = intval(intval($lign["donnees_ssp"]));
                $stats_ssp[$index]["NCC"] = $lign["NCC"];
            }

            asort($stats_ssp);
            $stats_ssp = array_values(array_filter($stats_ssp));

            foreach ($stats_ssp as $index => $lign) {
                echo "<tr>";
                echo "<td>" . $index . "</td>";
                echo "<td>" . $lign["NCC"] . "</td>";
                echo "<td>" . $lign["donnees_ssp"] . "</td>";
                echo "</tr>";
            } ?>
            </tbody>
        </table>
    </main>

    <main class="container">
        <table class="table">
            <thead>
            <tr>
                <th>Classement</th>
                <th>Region</th>
                <th>Consommation de GAZOL en tonne par an</th>
                <!--                <th>Consommation de SUPER SANS PLOMB en tonne par an</th>-->
                <!--                <th>Consommation de gazolOL en tonne par an</th>-->
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($results_gazol as $index => $lign) {
                $stats_gazol[$index]["donnees_gazol"] = intval(intval($lign["donnees_gazol"]));
                $stats_gazol[$index]["NCC"] = $lign["NCC"];
            }

            asort($stats_gazol);
            $stats_gazol = array_values(array_filter($stats_gazol));

            foreach ($stats_gazol as $index => $lign) {
                echo "<tr>";
                echo "<td>" . $index . "</td>";
                echo "<td>" . $lign["NCC"] . "</td>";
                echo "<td>" . $lign["donnees_gazol"] . "</td>";
                echo "</tr>";
            } ?>
            </tbody>
        </table>
    </main>
<?php
/*//var_dump($tab);
foreach ($tab as $data) {
    echo "<tr>";
    echo "<td>" . $data[0]["NCC"] . "</td>";
    foreach ($data as $lign) {
        echo "<td>";
        if (!empty($lign["GAZOLE"])) {
            echo $lign["GAZOLE"];
        } elseif (!empty($lign["donnees_ssp"])) {
            echo $lign["donnees_ssp"];
        } elseif (!empty($lign["donnees_elec"])) {
            echo $lign["donnees_elec"];
        } elseif (!empty($lign["donnees_gaz"])) {
            echo $lign["donnees_gaz"];
        }
        echo "</td>";
    }


    echo "<tr>";
}
*/
require_once 'layout/footer.php';
