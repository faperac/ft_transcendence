document.addEventListener('DOMContentLoaded', function () {

  function navigateTo(url, updateHistory = true) {
    console.log('Navigating to', url);
    const viewId = url.startsWith('/') ? url.slice(1) : url;
    hideCurrentView();
    showView(viewId);
    if (updateHistory) {
      history.pushState({}, '', url);
    }
  }

  function hideCurrentView() {
    const activeView = document.querySelector('.active-view');
    if (activeView) {
      activeView.classList.remove('active-view');
      activeView.style.display = 'none';
    }
  }

  const viewActions = {
    register: (navigateTo) => RegistrationForm(navigateTo),
    login: (navigateTo) => login(navigateTo),
    dashboard: (navigateTo) => dashboard(navigateTo),
    gameplay: (navigateTo) => gameplay(navigateTo),
    chat: (navigateTo, playerName, friendName) => chat(navigateTo, playerName, friendName)
  };


  function showView(viewId) {
    const view = document.getElementById(viewId);

    if (view) {
      view.classList.add('active-view');
      view.style.display = 'block';
    } else if (viewActions[viewId]) {
      viewActions[viewId](navigateTo);
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
  } else {  // Show login view on initial load (no hash)
    showView('login');
  }

  document.addEventListener('click', function (event) {
    if (event.target.matches('[data-link]')) {
      event.preventDefault();
      const link = event.target.getAttribute('data-link');
      navigateTo(link);
    }
  });

});
