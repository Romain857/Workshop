<?php require_once 'layout/header.php'; ?>

    <main>


        <h1>Consommation de GAZOLE par département</h1>

        <div id="tip"></div>

        <div class="carte" id="depcMap"></div>
        <script type="text/javascript" src="cmap/depFrance.js"></script>
        <script type="text/javascript" src="cmap/depcMap.js"></script>
        <div class="echelle">
            <img src="dist/images/echelle4.png">
        </div>
    </main>

<?php require_once 'layout/footer.php'; ?>