var str="Create Stunning";
var lang;
var arrLang = {
    'en' : {
   
    },
    'lt' : {
        'general' : 'PAGRINDINIS',
        'price' : 'KAINOS',
        'contactus' : 'SUSISIEKITE',
        'bre' : 'BREKETAI',
        'den' : 'DANTŲ PLOKŠTELĖS',
        'we' : 'MES DIRBAM DĖL JŪSŲ!',
        'tret' : 'Gydymas',
        'imp' : 'Dantų implantai',
        'pro' : 'Dantų protezavimas',
        'ort' : 'Ortodontinis gydymas',
        'pastraipa' : 'Kodėl verta rinktis mūsų kliniką?',
        'pastraipa1' : 'Mūsų odontologijos klinika atlieka visų rūšių odontologines procedūras. Pasitelkiant pažangias skaitmenines odontologijos technologijas atliekamas: terapinis ir endodontinis dantų gydymas, dantų implantavimas, dantų protezavimas, estetinis dantų plombavimas, ortodontinis gydymas, profesionali burnos higiena, dantų balinimas, vaikų dantų gydymas ir profilaktinė priežiūra.',
        'pastraipa2' : 'Pagrindinė priežastis, kodėl mūsų klinikoje „Odontika“ per metus apsilanko dagiau nei 1000 pacientų iš įvairiausių šalių yra ta, kad mes specializuojamės į greitą ir profesionalų dantų gydymą.',
        'pastraipa3' : 'Kvalifikuota gydytojų komanda, nauja pažangi skaitmeninė odontologinė įranga, kokybę užtikrinančios naujausios technologijos, lankstus darbo grafikas, mums leidžia pasiūlyti įvairiausią gydymą, nuo nedidelių estetinių korekcijų ar dantų higienos iki dantų protezavimo bei chirurgijos.',
        'lang' : 'Kalbos',
        'cons' : 'Konsultacija',
        'name' : 'Vardas',
        'alias' : 'Slapyvardis',
        'eemail' : 'Įveskite elektroninį paštą',
        'message' : 'Jūsų žinutė',
        'sub' : 'Siųsti',
        'cont' : 'Kontaktai',
        'ins' : 'Apžiūra',
        'teet' : 'Dantų balinimas',
        'inden' : 'dantisto ofise',
        'tit' : 'Titano',
        'imppla' : 'implantas'


    }
};
$(function(){
    $('.dropdown a').click(function(){
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });
    
    $('.nav-link').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dic1 h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dic1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dic2 h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dic2 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    })

    $('.penis h3').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.penis1 h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.penis1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('pricing-list-v4-header h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.forma legend').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.forma label').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.forma b').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.tret h3').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.col-lg-6 h3').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-lg-6 p').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.col-lg-6 li').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.container h6 a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dropdown button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.card-title a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.carousel-item.carousel-caption d-none d-md-block.h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.col-4 a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.modal-body h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });


    $('.forma').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.btn.btn-secondary dropdown-toggle').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.sign-up').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.content1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.content span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.container span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    
    $('.t.container th').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.text-white').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.nav-link').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

});
