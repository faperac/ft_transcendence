document.addEventListener('DOMContentLoaded', function () {
    function navigateTo(url) {
        console.log('Navigating to', url);
        history.pushState(null, null, url);
        router();
    }

    function router() {
        console.log('Current path:', window.location.pathname);
        const routes = {
            // '/views/': login,
            '/views/login': login,
            '/views/dashboard': dashboard,
            '/views/chat': chat,
            '/views/gameplay': gameplay,
        };

        const path = window.location.pathname;
        const route = routes[path] || login;
        route();
    }

    window.addEventListener('popstate', router);

    document.addEventListener('click', function (event) {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });

    router();
});
