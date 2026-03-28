$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Login/Reservation Form Validation
    $('#formularioLogin, #formularioReservacion').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = $(this);
        
        // Simple fake validation
        form.find('input[required], textarea[required], select[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        });

        if (isValid) {
            // Simulate AJAX request
            const btn = form.find('button[type="submit"]');
            const originalText = btn.text();

            const email = form.find('#email').val();
            const password = form.find('#password').val();
            
            btn.text('Enviando...').prop('disabled', true);
            
            setTimeout(function() {
                form[0].reset();
                form.find('.is-valid').removeClass('is-valid');
                btn.text(originalText).prop('disabled', false);
            }, 1500);
            
        } else {
            alert('Por favor complete todos los campos requeridos.');
        }

        // Simple login check
        if (form.attr('id') === 'formularioLogin') {

            const email = form.find('#email').val();
            const password = form.find('#password').val();

            // Admin
            if (email === "admin123@gmail.com" && password === "admin123") {
                alert('¡Bienvenido Administrador!');
                window.location.href = "dashboard.html";
            } else if (email === "user123@gmail.com" && password === "user123") {
            // User
                alert('¡Bienvenido Usuario!');
                window.location.href = "home.html";
            } else {
                alert('Credenciales incorrectas.');
            }
        }
    });

    // Contact Form Validation
    $('#formularioContacto').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = $(this);
        
        // Simple fake validation
        form.find('input[required], textarea[required], select[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        });

        if (isValid) {
            // Simulate AJAX request
            const btn = form.find('button[type="submit"]');
            const originalText = btn.text();
            
            btn.text('Enviando...').prop('disabled', true);
            
            setTimeout(function() {
                alert('¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.');
                form[0].reset();
                form.find('.is-valid').removeClass('is-valid');
                btn.text(originalText).prop('disabled', false);
            }, 1500);
        } else {
            alert('Por favor complete todos los campos requeridos.');
        }
    });

    // Initialize Tooltips/Popovers
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
