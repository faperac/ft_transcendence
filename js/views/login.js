function login() {
	document.getElementById('ft_transcendence').innerHTML = `
	<h1>ft_pong_online</h1>
	<div class="container login-container">
	<form>
	  <p>
		<label for="username">username</label>
		<input type="text" value="" placeholder="Enter Username" id="username">
	  </p>
	  <p>
		<label for="password">password</label>
		<input type="password" value="" placeholder="Enter Password" id="password" class="password">
		<button class="unmask" type="button" title="Mask/Unmask password to check content">Unmask</button>
		</button>
	  </p>
	  <button type="submit" class="btn btn-primary btn-block">Login</button>
	  <div class="text-center">
	  	<a href="#" onclick="showRegistrationForm()" data-link>create account</a>
	  </div>
	</form>
  </div>
	`;
  }
