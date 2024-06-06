document.addEventListener('DOMContentLoaded', function () {
    function navigateTo(url) {
        console.log('Navigating to', url);
        history.pushState(null, null, url);
        router();
    }

    function router() {
        console.log('Current path:', window.location.pathname);
        const routes = {
            '/views/login': login,
            '/views/dashboard': dashboard,
            '/views/chat': chat,
            '/views/gameplay': gameplay,
            '/views/register' : RegistrationForm,
        };

        const path = window.location.pathname;
        const route = routes[path] || login;
        route();
    }

    window.addEventListener('popstate', router);

    document.addEventListener('click', function (event) {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.getAttribute('data-link'));
        }
    });

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('unmask') || event.target.closest('.unmask')) {
          const button = event.target.closest('.unmask');
          const input = button.previousElementSibling;
          if (input.type === 'password') {
            input.type = 'text';
            button.querySelector('i').classList.remove('fa-lock');
            button.querySelector('i').classList.add('fa-lock-open');
          } else {
            input.type = 'password';
            button.querySelector('i').classList.remove('fa-lock-open');
            button.querySelector('i').classList.add('fa-lock');
          }
        }
      });

    router();
});
