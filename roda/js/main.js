'use strict';

(function ($) {
    // Preloader
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        // Configuração do filtro de categorias
        if ($('#category-filter').length > 0) {
            var containerEl = document.querySelector('#category-filter');
            var mixer = mixitup(containerEl);
        }
        $(".categories-filter-section .filter-item ul li").on('click', function () {
            $(".categories-filter-section .filter-item ul li").removeClass('active');
            $(this).addClass('active');
        });
    });

    // Configuração do plano de fundo
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Abrir e fechar modelo de busca
    $('.search-switch').on('click', function() {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function() {
        $('.search-model').fadeOut(400, function() {
            $('#search-input').val('');
        });
    });

    // Menu de navegação móvel
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    // Configuração dos seletores
    $('#category').niceSelect();
    $('#tag').niceSelect();

    // Função de busca de artigos - alterada para redirecionar para a página de resultados
    $('.search-switch').on('click', function() {
        var searchTerm = $('#search-input').val().toLowerCase(); // Captura o valor da pesquisa
        if (searchTerm) {
            // Redireciona para a página de resultados com o termo de pesquisa como parâmetro
            window.location.href = 'results.html?search=' + encodeURIComponent(searchTerm);
        }
    });
})(jQuery);
