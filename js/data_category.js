var category;
//Ļauj palaist to kas iekšā,
//tikai pēc tā kad tiks palaists html
$('document').ready(function(){
    //ja poga tika uzspiesta izsauc funkciju, pogas ir aside.php un category-list.php
    $('a.categ').on('mousedown', goInLietotneCategory);
});

function goInLietotneCategory() {
    //pievino uzspiesto kategoriju, localStorage ar nosaukumu category
    category = $(this).attr('data-art');
    localStorage.setItem('category', JSON.stringify(category));
}