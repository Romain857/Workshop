<?php require_once 'layout/header.php'; ?>

    <main>

        <h1>Consommation de Super Sans Plomb par région</h1>

        <div id="tip"> </div>
        <div class="pageMap">
            <div class="carte" id="cmapSSP"></div>
            <script type="text/javascript" src="cmap/france.js"></script>
            <script type="text/javascript" src="cmap/cmapSSP.js"></script>

            <div class="echelle">
                <img src="dist/images/echelle4.png">
            </div>
        </div>
    </main>

<?php require_once 'layout/footer.php'; ?>