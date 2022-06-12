var izvele;
//Ļauj palaist to kas iekšā,
//tikai pēc tā kad tiks palaists html
$('document').ready(function(){
    //izsauc funkciju loadLietotne
    loadLietotnes(JSON.parse(localStorage.getItem('category')));
});

function loadLietotnes(category) {
    //ielādē lietotnes mājas lapā
    $.getJSON('/lietotnes.json', function (data) {
        //pariet cauri objektam, izvadit info masiva
        var out = '';
        var cat_heading_out = '';
        localStorage.setItem('izvele', '');
        //ar cikla palidzibu pariet pari masiviem
        for (var key in data) {
            //ja ir vienāds ar izvēlēto kategoriju
            if (data[key]['category'] == category) {
                //sadala web lietotnes un parējas lietotnes html, jo atšķirās
                if (data[key]['category'] == "Web lietotne") {
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
                    out+='      <div class="download">Apskatīt</div>';
                    out+='      </a>';
                    out+='  </div>';
                    out+='</div>';
                }
                else{
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
        }
        cat_heading_out+='<h1>'+category+'</h1>';
        //izvada var out saturu , taga ar id lietotnes

        $('#lietotnes').html(out);
        $('#heading').html(cat_heading_out);
        //uzspiezot izsauc saveLietotneArt
        $('a.lietotnes-page').on('mousedown', goInLietotnePage);
    });

function goInLietotnePage() {
    //pievino lietotni izvelei
    izvele = $(this).attr('data-art');
    localStorage.setItem('izvele', JSON.stringify(izvele));
}
}

