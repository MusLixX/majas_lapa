<div class="grid-container">
    <!--Centrs, Populārākās lietotnes -->
    <div class="grid-lietotne">
        <h2 class="parskats">Lejupielādēt</h2>
        <div id="img">
            <!--Seit izvadas lietotnes img(outimg) no lietotnes.json, ar javascript data_output_lietotne.js-->
        </div>
        <div id="app-heading">
            <!--Seit izvadas lietotnes nosaukums(outheading) no lietotnes.json, ar javascript data_output_lietotne.js-->
        </div>
        <!--Apraksts-->
        <div id="description">
            <!--Šeit izvadās apraksts(outdescription) no lietotnes.json, ar javascript data_output_lietotne.js-->
        </div>
        <!--Lejupielades poga-->
        <a href="/lietotne" class="download back">
        <div><i class="fas fa-arrow-left"></i>Pārskats</div>
        </a>
        <!--Ka instalet-->
        <a id="howtoinstall" href="/howtoinstall">Kā instalēt?</a>
        <!--Lejupielādēt FAILUS-->
        <div id="faili">
            <h2>Faili</h2>
            
            <!--No officiālās vietnes-->
            <div class="downloadfromofficial">
              <!--Šeit izvadās download from official(outdownloadfromofficial) no lietotnes.json, ar javascript data_output_lietotne.js-->
            </div>
        </div>
        
    </div>

<!--Labā pusē, Nodaļas,-->
<?php
require 'templates/aside.php';
?>
</div>
