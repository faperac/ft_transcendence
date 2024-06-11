function login(navigateTo) {
	document.getElementById('ft_transcendence').innerHTML = `
	<h1>ft_pong_online</h1>
	<div class="container login-container">
		<form id="loginForm">
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
			<button type="submit" class="btn btn-primary btn-block">Login</button>
			<div class="text-center">
				<a href="#" data-link="/views/register">create account</a>
			</div>
		</form>
	</div>
	<div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="errorModalLabel">Login Error</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					Invalid username or password
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	`;

	document.getElementById('loginForm').addEventListener('submit', function (event) {
		event.preventDefault();
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;
		
		if (username === 'admin' && password === 'admin') {
			console.log('Login successful');
			navigateTo('/views/dashboard');
		} else {
			const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
			errorModal.show();
		}
	});
}