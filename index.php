<?php require_once 'layout/header.php'; ?>


    <main>

        <?php use League\Csv\Reader;

        //load the CSV document from a file path
        $csv = Reader::createFromPath('donnees_gaz_2017.csv', 'r');
        $csv->setHeaderOffset(0);

        $header = $csv->getHeader(); //returns the CSV header record
        $records = $csv->getRecords(); //returns all the CSV records as an Iterator object

        //    var_dump($header);
        /*
        foreach ($records as $ligne){
            var_dump($ligne);

        };  */ ?>

    </main>

<?php require_once 'layout/footer.php'; ?>