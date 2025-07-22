// Menu fixo
$(function(){   
    var nav = $('#heading');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 92) { 
            nav.addClass("menu-fixo");
            $('body').css('padding-top', 70);
        } else { 
            nav.removeClass("menu-fixo"); 
            $('body').css('padding-top', 0);
        } 
    });  
});


$(document).ready(function(){
    $('#parentVerticalTab').easyResponsiveTabs();
  });

  //Vertical Tab
  $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });


    $(document).ready(function(){
        $('#parentVerticalTab2').easyResponsiveTabs();
      });
    
      //Vertical Tab
      $('#parentVerticalTab2').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_2', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
    });

    $('#parentVerticalTab3').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_3', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
});
    
    

// Travar fundo modal
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe 'modal'
    var modais = document.querySelectorAll(".modal");

    // Event listener para quando um modal é exibido
    modais.forEach(function (modal) {
        modal.addEventListener("show.bs.modal", function () {
            document.documentElement.style.overflowY = "hidden";
        });

        // Event listener para quando um modal é fechado
        modal.addEventListener("hidden.bs.modal", function () {
            document.documentElement.style.overflowY = "auto";

            // Remove o elemento .modal-backdrop
            var backdrop = document.querySelector(".modal-backdrop");
            if (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
            }
        });

        // Event listener para quando um modal é escondido
        modal.addEventListener("hide.bs.modal", function () {
            document.documentElement.style.overflowY = "auto";
        });

        // Event listener para quando um modal é totalmente oculto
        modal.addEventListener("hidden.bs.modal", function () {
            document.documentElement.style.overflowY = "auto";
        });
    });

    // Adicione event listeners para os botões/links que abrem os modais
    var modalTriggers = document.querySelectorAll("[data-bs-toggle='modal']");

    modalTriggers.forEach(function (modalTrigger) {
        modalTrigger.addEventListener("click", function () {
            // Abra o modal manualmente
            var modal = new bootstrap.Modal(modalTrigger.dataset.bsTarget);
            modal.show();
        });
    });
});