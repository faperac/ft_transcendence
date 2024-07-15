function register(navigateTo) {
  document.getElementById('ft_transcendence').innerHTML = `
    <h1>Register</h1>
    <div class="container login-container">
      <form id="registerForm">
        <p>
          <label for="username">username</label>
          <input type="text" value="" placeholder="Enter Username" id="username">
        </p>
        <p>
          <label for="password">password</label>
          <div class="password-wrapper">
            <input type="password" value="" placeholder="Enter Password" id="password" class="password">
            <button class="unmask" type="button" title="Mask/Unmask password to check content">
						  <i class="fas fa-lock"></i>
					  </button>
          </div>
        </p>
        <p>

    <div class="choose-avatar">
    <span class="title">Choose your avatar</span>
    <div class="avatars-container">
      <span class="left"></span>
      <div class="avatars">
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/C2WLdyY/avatar1.png');">
          <span id="text-avatar">Choose</span>
        </div>
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/0t3JTMz/avatar2.png');">
          <span id="text-avatar">Choose</span>
        </div>
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/K08BjJx/avatar3.png');">
          <span id="text-avatar">Choose</span>
        </div>
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/6XW1X2L/avatar4.png');">
          <span id="text-avatar">Choose</span>
        </div>
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/DVfTxB2/avatar5.png');">
          <span id="text-avatar">Choose</span>
        </div>
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/Bzvqgg3/avatar6.png');">
          <span id="text-avatar">Choose</span>
        </div>
        <div class="avatar-item" style="background-image: url('https://i.ibb.co/FDg3t8m/avatar7.png');">
          <span id="text-avatar">Choose</span>
        </div>
      </div>
      <span class="right"></span>
    </div>
    <button class="button-simple">Back</button>
  </div>


        </p>
        <button id ="registerbutton" type="submit" class="btn btn-primary btn-block">Register</button>
        <button id ="registerbutton42"type="submit" class="btn btn-primary btn-block">Register with 42</button>
        <button id ="arrowbackregister" class="btn btn-primary ">  
          <i class="bi bi-arrow-left"></i>
        </button>
      </form>
    </div>
    <footer class="py-3 my-4">
		  <p class="text-center text-body-secondary">© 2024 42Company, Inc</p>
	  </footer>
  `;

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

  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // create account and add to database

    alert('Account created successfully');
    navigateTo('login');
  });

  document.getElementById('arrowbackregister').addEventListener('click', function (event) {
    event.preventDefault();
    navigateTo('login');
  });
}