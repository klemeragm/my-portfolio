//Disparado como callback para ?cb=googleTranslateElementInit

function googleTranslateElementInit()
{
    new google.translate.TranslateElement({
        pageLanguage: 'pt', //Idioma principal da página
        includedLanguages: 'en,es', //Idiomas que pode traduzir
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element'); //google_translate_element é o elemento no div
}