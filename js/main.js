
//kopiena lapai uzdot jautajumu
$("#jaut-btn").click(function () {
  var jautajumaVirsraksts = $("#jaut-virsraksts").val();
  var jautajumaText = $("#jaut-text").val();
  checkInputs(jautajumaVirsraksts, jautajumaText);
});

//funkcija pārbauda vai ievadītais ir pareizi uzrakstīts
function checkInputs(jautajumaVirsraksts, jautajumaText) {

  if(jautajumaVirsraksts === '' || jautajumaText === '') {
     $("#result").html("<h2>Nevar būt tukšs</h2>");
  } else {
    $("#result").html("<h2>"+jautajumaVirsraksts+"</h2><p>"+jautajumaText+"</p>");
  }
}






//////////////////////////////////////////////////////////////
//raitinga funkcija, lapā lietotne.php
var rating = document.getElementById('description'),
    ratingItem = document.getElementsByClassName('rating-item');

//funkcija nostrādā ja ir nospiests, vispirs nonem un tad pievieno klasi current active,
//bet pievieno nospiestai
//if lai neradas kluda kad ir null
if (rating) {
  rating.onclick = function(e){
    var target = e.target;
    //ja ir klase rating-item
    if(target.classList.contains('rating-item')){
      //pado masivo un izdzēš doto klasei
      removeClass(ratingItem,'current-active')
      //pievieno dotas klases
      target.classList.add('active','current-active');
    }
  }
      
  //funkcija nostrādā ja pele ir virs, vispirms nonem, tad pievieno klasi active,
  //bet pievieno kur pele ir virs
  rating.onmouseover = function(e) {
    var target = e.target;
    if(target.classList.contains('rating-item')){
      //pado masivu un klasi kuru izdzēst
      removeClass(ratingItem,'active')
      //pievieno dotās klases
      target.classList.add('active');
      mouseOverActiveClass(ratingItem)
    }
  }
  //funkcija nostrādā, ja pele ir arpus, pievieno visiem klasi active,
  //un pēc tam nonem lidz current-active
  rating.onmouseout = function(){
    addClass(ratingItem,'active');
    mouseOutActiveClas(ratingItem);
  }
   
  //funkcija noņem klases
  function removeClass(arr) {
    for(var i = 0, iLen = arr.length; i <iLen; i ++) {
      for(var j = 1; j < arguments.length; j ++) {
        ratingItem[i].classList.remove(arguments[j]);
      }
    }
  }
  
  //funkcija pievieno klases
  function addClass(arr) {
    for(var i = 0, iLen = arr.length; i <iLen; i ++) {
      for(var j = 1; j < arguments.length; j ++) {
        ratingItem[i].classList.add(arguments[j]);
      }
    }
  }
      
  //funkcija pirms klases curret-active, visiem elementiem pievieno klasi active
  function mouseOverActiveClass(arr){
    for(var i = 0, iLen = arr.length; i < iLen; i++) {
      if(arr[i].classList.contains('active')){
        break;
      }else {
        arr[i].classList.add('active');
      }
    }
  }
  
  //funkcija lidz klases curret-active, visiem elementiem nonem klasi active,
  // cikls iet no beigam uz sakumu
  function mouseOutActiveClas(arr){
    for(var i = arr.length-1; i >=1; i--) {
      if(arr[i].classList.contains('current-active')){
        break;
      }else {
        arr[i].classList.remove('active');
      }
    }
  }
}




//////////////////////////////////////////////////////////////////
//ja uzpiež uz pogu apraksts parādās vai pazūd, category-list.php
var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
///////////////////////////////////////////////////////////////////
//hamburger, parādās navigācijas elementi, nav.php
function myFunction() {
  var x = document.getElementById("myElement");
  var y = document.getElementById("myElement2");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    x.style.block = "none";
  } else {
    x.style.visibility = "visible";
    x.style.block = "block";
  }
}


//////////////////////////////////////
//funkcija priekš bilžu galerijas
//atver bildi, bloku
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  //aizver, palēpj
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  //parāda bildes
  var slideIndex = 1;
  showSlides(slideIndex);
  //pārslēdz slaidu uz priekšu vai atpakaļ
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  //attver konkrētu slaidu
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  //parāda nepieciešamo slaidu, no divām augšējām funkcijām
  function showSlides(n) {
    var i;
    try {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    } catch (error) {
        
    }
  }