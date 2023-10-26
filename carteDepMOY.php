<?php require_once './layout/header.php'; ?>

    <main>

        <h1 class="container text-center">Moyenne totale des classements par département</h1>

        <div class="container text-center" id="tip"></div>
        <div class="carte" id="depcMapMOY"></div>
        <script type="text/javascript" src="cmap/depFrance.js"></script>
        <script type="text/javascript" src="cmap/depcMapMOY.js"></script>
        <div class="echelle">
            <img src="dist/images/echelle4.png">
    </main>

<?php require_once './layout/footer.php'; ?>