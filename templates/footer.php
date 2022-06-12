<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="/js/data_category.js"></script>



<?php
switch ($route) {
    case '':
        echo '<script src="/js/data_output.js"></script>';
        break;
    case 'main':
        echo '<script src="/js/data_output.js"></script>';
        break;
    case 'lietotne':
        echo '<script src="/js/data_output_lietotne.js"></script>';
        break;
    case 'category':
        echo '<script src="/js/data_output_category.js"></script>';
        break;
    case 'download':
        echo '<script src="/js/data_output_lietotne.js"></script>';
        break;
    case 'login':
        echo '<script src="/js/formu2.js"></script>';
        break;
    case 'registration':
        echo '<script src="/js/formu.js"></script>';
        break;
    default:
        break;
}
?>
<script src='/js/main.js'></script>
<script src='/js/kopiena.js'></script>

<footer class="footer">
    <i class="fas fa-chevron-up"></i>
    <p>Darba autors: Aleksandrs Koroļovs @ 2021</p>
    <p><a href="mailto:akorolovs1123@gmail.com">akorolovs1123@gmail.com</a></p>
</footer>
</body>
</html>