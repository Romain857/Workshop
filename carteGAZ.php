<?php require_once 'layout/header.php'; ?>

    <main>

        <h1 class="container text-center">Consommation de gaz par region</h1>

        <div class="container text-center" id="tip"> </div>
        <div class="pageMap">
            <div class="carte" id="cmapGAZ"></div>
            <script type="text/javascript" src="cmap/france.js"></script>
            <script type="text/javascript" src="cmap/cmapGAZ.js"></script>

            <div class="echelle">
                <img src="dist/images/echelle4.png">
            </div>
        </div>
    </main>

<?php require_once 'layout/footer.php'; ?>