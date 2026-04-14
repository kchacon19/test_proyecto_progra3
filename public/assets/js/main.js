/**
 * main.js — Lógica JavaScript Global
 * Hotel Brisa del Pacífico
 *
 * Este archivo se carga en todas las páginas públicas del sitio.
 * Contiene:
 *  - Efecto de scroll en la barra de navegación
 *  - Validación y envío simulado de formularios de contacto/reservación
 *  - Inicialización de Tooltips de Bootstrap
 *
 * Dependencias: jQuery 3.7+, Bootstrap 5.3+
 */

$(document).ready(function () {

    // =========================================================
    // NAVBAR — Efecto al hacer scroll
    // =========================================================
    // Añade la clase CSS 'scrolled' a la navbar cuando el usuario
    // desplaza la página más de 50px hacia abajo. Esto permite aplicar
    // estilos diferentes (ej: fondo más opaco) vía CSS.
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // =========================================================
    // FORMULARIOS — Validación y envío simulado
    // =========================================================
    // Aplica la misma lógica al formulario de reservación (#formularioReservacion)
    // y al formulario de contacto (#formularioContacto) en contact.html.
    //
    // Flujo:
    //  1. Previene el envío nativo del formulario (preventDefault).
    //  2. Recorre todos los campos requeridos (input, textarea, select).
    //  3. Si un campo está vacío, marca el campo como inválido (clase Bootstrap 'is-invalid').
    //  4. Si todos son válidos, simula una llamada AJAX con setTimeout de 1.5 segundos.
    //  5. Muestra un mensaje de éxito y resetea el formulario.
    $('#formularioReservacion, #formularioContacto').on('submit', function (e) {
        e.preventDefault(); // Evita recarga de página

        let isValid = true;
        const form = $(this);

        // Validación: verifica que ningún campo requerido esté vacío
        form.find('input[required], textarea[required], select[required]').each(function () {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');    // Muestra mensaje de error Bootstrap
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');      // Muestra check verde Bootstrap
            }
        });

        if (isValid) {
            // Simulación de envío AJAX:
            // En producción, reemplazar este bloque con una llamada real
            // usando fetch() o $.ajax() apuntando al endpoint del backend.
            const btn = form.find('button[type="submit"]');
            const originalText = btn.text();

            // Deshabilita el botón para evitar envíos duplicados
            btn.text('Enviando...').prop('disabled', true);

            // Simula latencia de red (1500ms)
            setTimeout(function () {
                alert('¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.');
                form[0].reset();                                  // Limpia el formulario
                form.find('.is-valid').removeClass('is-valid');   // Quita estados visuales
                btn.text(originalText).prop('disabled', false);  // Rehabilita el botón
            }, 1500);

        } else {
            // Si hay campos vacíos, muestra alerta y detiene el proceso
            alert('Por favor complete todos los campos requeridos.');
        }
    });

    // =========================================================
    // BOOTSTRAP — Inicialización de Tooltips
    // =========================================================
    // Activa todos los tooltips de Bootstrap en la página actual.
    // Para usar un tooltip en un elemento HTML, agregar:
    //   data-bs-toggle="tooltip" title="Texto del tooltip"
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    // =========================================================
    // CHATBOT — Consultas Basicas:
    // precio, ubicacion, reserva, hola
    // =========================================================

    $('#chatbot-toggle').click(function () {
        $('#chatbot-box').toggle();
    });

    $('#chatbot-close').click(function () {
        $('#chatbot-box').hide();
    });

    $('#chatbot-send').click(function () {
        sendMessage();
    });

    $('#chatbot-text').keypress(function (e) {
        if (e.which === 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        const input = $('#chatbot-text');
        const message = input.val().trim();

        if (message === '') return;

        $('#chatbot-messages').append(`<div class="user-message">${message}</div>`);
        input.val('');

        // Respuesta
        setTimeout(function () {
            let response = "Lo siento, no entendí tu mensaje.";

            if (message.toLowerCase().includes('precio')) {
                response = "Nuestras habitaciones van desde $220 por noche.";
            } else if (message.toLowerCase().includes('ubicacion')) {
                response = "Estamos ubicados en Guanacaste, Playa Danta.";
            } else if (message.toLowerCase().includes('reserva')) {
                response = "Puedes reservar desde la sección de contacto.";
            } else if (message.toLowerCase().includes('hola')) {
                response = "¡Hola! ¿En qué puedo ayudarte?";
            }

            $('#chatbot-messages').append(`<div class="bot-message">${response}</div>`);

            // Scroll automático
            $('#chatbot-messages').scrollTop($('#chatbot-messages')[0].scrollHeight);

        }, 500);
    }

});
