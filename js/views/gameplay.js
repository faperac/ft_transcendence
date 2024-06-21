function gameplay(navigateTo) {
	document.getElementById('ft_transcendence').innerHTML = `
	  <div class="container game-container">
		<div class="game-area">
		  <!-- Your game logic here (canvas, etc.) -->
		</div>
		<div class="game-info">
		  <h4>Score: 1000</h4>
		  <h5>Level: 2</h5>
		</div>
		<div class="controls mt-3">
		  <button class="btn btn-primary">Pause</button>
		  <button class="btn btn-danger">Exit</button>
		</div>
	  </div>
	  <footer class="py-3 my-4">
	  	<p class="text-center text-body-secondary">© 2024 42Company, Inc</p>
  		</footer>
	`;

	attachEventHandlers2(navigateTo);
  }

  function attachEventHandlers2(navigateTo) {
	//Navigate to dashboard is exit is clicked
	document.querySelector('.btn-danger').addEventListener('click', function (event) {
		event.preventDefault();
		console.log('Exit button clicked');
		navigateTo('dashboard');
	});
  }