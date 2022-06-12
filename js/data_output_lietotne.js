$('document').ready(function(){
    //izsauc funkciju loadLietotne, kam tiek dota vērtība no localStorage
    loadLietotne(JSON.parse(localStorage.getItem('izvele')));
});

//funkcija, kura saņem vērtību un...
function loadLietotne(izvelets) {
    //...ielādē lietotnes info mājas lapā
    $.getJSON('/lietotnes.json', function (data) {
        //inicializē mainīgos ar tikšām vērtībām
        var outheading = '';
        var outimg = '';
        //outdescriptiontext ir garš apraksts par programmu.
        var outdescriptiontext = '';
        var outdescription = '';
        //priekš gallery
        var outrow = '';
        var outmodalcontent = '';
        //prieks download
        var outdownloadfromofficial = '';
        //prieks web lietotnem
        var outvietnefromofficial = '';
        //prieks video
        var outvideo = '';

        //savienot var out..., ar kodu kas lejā
        outheading+='   <h2>'+data[izvelets]['name']+'</h2>';
        outimg+='  <img src="/'+data[izvelets]['image']+'" alt="'+data[izvelets]['name']+'">';
        //garš teksts
        outdescriptiontext+='<p>'+data[izvelets]['description']+'</p>';
        //izveido tabulas veida aprakstu
        outdescription+='<table>';
        outdescription+='<tr>';
        outdescription+='<th>Novērtējums:</th>';
        outdescription+='<td>';
        outdescription+='<div class="rating">';
        outdescription+='<div class="rating-item active" data-rate="1"><i class="rating-item fas fa-star"></i></div>';
        outdescription+='<div class="rating-item" data-rate="2"><i class="rating-item fas fa-star"></i></div>';
        outdescription+='<div class="rating-item" data-rate="3"><i class="rating-item fas fa-star"></i></div>';
        outdescription+='<div class="rating-item" data-rate="4"><i class="rating-item fas fa-star"></i></div>';
        outdescription+='<div class="rating-item" data-rate="5"><i class="rating-item fas fa-star"></i></div>';
        outdescription+='</div>';
        outdescription+='</td>';
        outdescription+='</tr>';
        outdescription+='<tr>';
        outdescription+='<th>Sistēma:</th>';
        outdescription+='<td>'+data[izvelets]['system']+'</td>';
        outdescription+='</tr>';
        outdescription+='<tr>';
        outdescription+='<th>Izmērs:</th>';
        outdescription+='<td>'+data[izvelets]['size']+' MB</td>';
        outdescription+='</tr>';
        outdescription+='<tr>';
        outdescription+='<th>Izstrādātājs:</th>';
        outdescription+='<td>'+data[izvelets]['developer']+'</td>';
        outdescription+='</tr>';
        outdescription+='<tr>';
        outdescription+='<th>Licence:</th>';
        outdescription+='<td>'+data[izvelets]['license']+' ('+data[izvelets]['freeornot']+')'+'</td>';
        outdescription+='</tr>';
        outdescription+='</table>';

        //izveido gallery    
        outrow+='<h2>Galerija</h2>';
        for (let index = 0; index < data[izvelets]['image-array'].length; index++) {
        
            outrow+='<div class="column">';
            outrow+='<img src="/'+data[izvelets]['image-array'][index].source+'" alt="'+data[izvelets]['image-array'][index]['alt']+'" style="width:100%" onclick="openModal();currentSlide('+(index+1)+')" class="hover-shadow cursor">';
            outrow+='</div>';
            outmodalcontent+='<div class="mySlides">';
            outmodalcontent+='<div class="numbertext">'+(index+1)+' / '+data[izvelets]['image-array'].length+'</div>';
            outmodalcontent+='<img src="/'+data[izvelets]['image-array'][index].source+'" alt="'+data[izvelets]['image-array'][index]['alt']+'" style="width:100%">';
            outmodalcontent+='</div>';
        }
        outmodalcontent+='<a class="prev" onclick="plusSlides(-1)">&#10094;</a>';
        outmodalcontent+='<a class="next" onclick="plusSlides(1)">&#10095;</a>';
        outmodalcontent+='<div class="caption-container">';
        outmodalcontent+='<p id="caption"></p>';
        outmodalcontent+='</div>';

        outmodalcontent+='<h2>Galerija</h2>';
        for (let index = 0; index < data[izvelets]['image-array'].length; index++) {
            outmodalcontent+='<div class="column">';
            outmodalcontent+='<img class="demo cursor" src="/'+data[izvelets]['image-array'][index].source+'" style="width:100%" onclick="currentSlide('+(index+1)+')" alt="'+data[izvelets]['image-array'][index]['alt']+'">';
            outmodalcontent+='</div>';
        }



        //prieks download
        outdownloadfromofficial+='<h2 class="downloadfromofficialheading">Lejupielādēt '+data[izvelets]['name']+' no oficiālās vietnes</h2>';
        outdownloadfromofficial+='<a class="realdownload" href="/'+data[izvelets]['officialdownload']+'">';
        outdownloadfromofficial+='    <div><i class="fas fa-download"></i>Lejupielādēt</div>'
        outdownloadfromofficial+='</a>';
        outdownloadfromofficial+='<div id="size">';
        outdownloadfromofficial+='<p>'+data[izvelets]['size']+' MB</p>';
        outdownloadfromofficial+='</div>';

        //prieks web lietotnem
        outvietnefromofficial+='<h2 class="downloadfromofficialheading">Apskatīt '+data[izvelets]['name']+' no oficiālās vietnes</h2>';
        outvietnefromofficial+='<a class="realdownload" href="/'+data[izvelets]['officialdownload']+'">';
        outvietnefromofficial+='    <div><i class="fas fa-download"></i>Apskatīt vietni</div>'
        outvietnefromofficial+='</a>';
        outvietnefromofficial+='<div id="size">';
        outvietnefromofficial+='<p>'+data[izvelets]['size']+' MB</p>';
        outvietnefromofficial+='</div>';


        //prieks video
        outvideo+='<h2>Video pamācības</h2>';
        for (let index = 0; index < data[izvelets]['video-array'].length; index++) {
            outvideo+='<div class="video-responsive">';
            outvideo+='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+data[izvelets]['video-array'][index].source+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
            outvideo+='</div>';
        }
        

        //izvada var out saturu , taga ar atbilsetošu id vai class
        $('#img').html(outimg);
        $('#app-heading').html(outheading);
        $('#description-text-out').html(outdescriptiontext);
        $('#description').html(outdescription);
        $('.row').html(outrow);
        $('.modal-content').html(outmodalcontent);
        $('#video').html(outvideo);
        //lai izvadītos web lietotnes html kods, ja ne izvadīsies cits html kods
        if (data[izvelets]['category'] == "Online") {
            $('.downloadfromofficial').html(outvietnefromofficial);
        }else {
            $('.downloadfromofficial').html(outdownloadfromofficial);
        }
    });
}

