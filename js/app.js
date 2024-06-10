document.addEventListener('DOMContentLoaded', function () { 
  
  function hideCurrentView() {
    const activeView = document.querySelector('.active-view');
    if (activeView) {
      activeView.classList.remove('active-view');
      activeView.style.display = 'none';
    }
  }

  function showView(viewId) {
    const view = document.getElementById(viewId);

    if (view) {
      view.classList.add('active-view');
      view.style.display = 'block';
    } else {
      console.error(`View with ID "${viewId}" not found`);
    }
  }

  window.addEventListener('hashchange', function () {
    const hash = window.location.hash;
    if (hash) {
      const viewId = hash.slice(1);
      hideCurrentView();
      showView(viewId);
    }
  });

  const initialHash = window.location.hash;
  if (initialHash) {
    const viewId = initialHash.slice(1);
    showView(viewId);
  }

  document.addEventListener('click', function (event) {
    if (event.target.matches('[data-link]')) {
      event.preventDefault(); // Prevent default link behavior
      const link = event.target.getAttribute('data-link');
      navigateTo(link);  // Call navigateTo with the data-link value
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target.matches('[data-link="/views/register"]')) {
      event.preventDefault(); // Prevent default link behavior
      hideCurrentView();
      showView('register'); // Show the 'register' view
    }
  });



  function navigateTo(url) {
    console.log('Navigating to', url);
    const viewId = url.slice(1); // Remove leading slash
    hideCurrentView();
    showView(viewId);
  }

    function router() {
        console.log('Current path:', window.location.pathname);
        const routes = {
            '/views/login': () => login(navigateTo),
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
