<?php

$route = $_GET['route'] ?? null;

$subroute = $_GET['subroute'] ?? null;

require 'templates/header.php';
require 'templates/nav.php';

switch ($route) {
    case '':
        require 'templates/main.php';
        break;
    case 'main':
        require 'templates/main.php';
        break;
    case 'lietotne':
        if ($subroute == 'download') {
            require 'templates/download.php';
        }else{
            require 'templates/lietotne.php';
        }
        break;
    case 'Bezmaksas':
        require 'templates/Bezmaksas.php';
        break;
    case 'Maksas':
        require 'templates/Maksas.php';
        break;
    case 'login':
        require 'templates/login.php';
        break;
    case 'registration':
        require 'templates/registration.php';
        break;
    case 'howtodownload':
        require 'templates/howtodownload.php';
        break;
    case 'howtoinstall':
        require 'templates/howtoinstall.php';
        break;
    case 'category-list':
        require 'templates/category/category-list.php';
        break;
    case 'category':
        require 'templates/category/category.php';
        break;
    case 'kopiena':
        require 'templates/kopiena.php';
        break;
    default:
        break;
}

require 'templates/footer.php';