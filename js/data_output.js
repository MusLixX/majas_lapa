var izvele;
//Ļauj palaist to kas iekšā,
//tikai pēc tā kad tiks palaists html
$('document').ready(function(){
    //izsauc funkciju loadLietotne
    loadLietotnes();
});

function loadLietotnes() {
    //ielādē lietotnes mājas lapā
    $.getJSON('lietotnes.json', function (data) {
        //pariet cauri objektam, izvadit info masiva
        var out = '';
        localStorage.setItem('izvele', '');
        //ar cikla palidzibu pariet pari masiviem
        for (var key in data) {
            if (data[key]['system'] != "Browser") {
                //savienot ar var out, kodu kas lejā
                out+='<div class="grid-item item-'+key+'">';
                out+='  <a href="/lietotne" class="lietotnes-page" data-art="'+key+'">';
                out+='      <h2>'+data[key]['name']+' <i class="fas fa-book-open"></i></h2>';
                out+='      <img src="/'+data[key]['image']+'" alt="'+data[key]['name']+'">';
                out+='  </a>';
                out+='  <p class="prog-info">'+data[key]['short-description']+'</p>';
                out+='  <div class="item-bottom-block">';
                out+='      <a href="/'+data[key]['freeornot']+'">';
                out+='      <div class="freeornot"><p class="'+data[key]['freeornot']+'">'+data[key]['freeornot']+'</p></div>';
                out+='      </a>';
                    out+='      <a href="/lietotne/download" class="lietotnes-page" data-art="'+key+'">';
                    out+='      <div class="download">Lejupielādēt</div>';
                    out+='      </a>';
                out+='  </div>';
                out+='</div>';
            }
        }
        //izvada var out saturu , taga ar id lietotnes
        $('#lietotnes').html(out);
        //uzspiežot saglabā data-art
        $('a.lietotnes-page').on('mousedown', goInLietotnePage);
    });

function goInLietotnePage() {
    //pievino lietotni izvelei
    izvele = $(this).attr('data-art');
    //saglabā localStorage, mainigajā izvele
    localStorage.setItem('izvele', JSON.stringify(izvele));
}
}

