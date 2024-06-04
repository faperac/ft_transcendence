function login() {
	document.getElementById('app').innerHTML = `
	  <div class="container login-container">
		<h2 class="text-center">Login</h2>
		<form>
		  <div class="form-group">
			<label for="email">Email address</label>
			<input type="email" class="form-control" id="email" placeholder="Enter email">
		  </div>
		  <div class="form-group">
			<label for="password">Password</label>
			<input type="password" class="form-control" id="password" placeholder="Password">
		  </div>
		  <button type="submit" class="btn btn-primary btn-block">Login</button>
		  <div class="text-center">
			<a href="/dashboard" data-link>Go to Dashboard</a>
		  </div>
		</form>
	  </div>
	`;
  }
