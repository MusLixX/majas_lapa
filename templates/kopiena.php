<!--.grid-container, for css-->
<div class="grid-container">
    
    <!--Centrs, instrukcija -->
    <div class="grid-instruction">
        <div class="heading">
            <h1>Kopiena</h1>
            <h2>Jautājumi un atbildes</h2>
        </div>
        <div class="jautajums">
            <h2 class="jautajums-item jautajums-heading">
                Uzdodiet savu jautājumu
            </h2>
            <p class="jautajums-item jautajums-text">
                Jautājuma virsraksts:
            </p>
            <input class="jautajums-item jautajums-input" id="jaut-virsraksts"></input>
            <p class="jautajums-item jautajums-text">
                Jautājuma skaidrojums:
            </p>
            <textarea class="jautajums-item jautajums-input-long" id="jaut-text"></textarea>
            <button id="jaut-btn">Uzdod jautājumu</button>
        </div>
        <div id="result">
            
        </div>
    </div>
    
    <!--Labā pusē, Nodaļas,-->
    <?php
    require 'templates/aside.php';
    ?>
</div>