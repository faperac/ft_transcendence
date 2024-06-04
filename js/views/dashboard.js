function dashboard() {
	document.getElementById('app').innerHTML = `
	  <nav class="navbar navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Dashboard</a>
		<span class="navbar-text">
		  Welcome, User | <a href="#" class="text-light" data-link>Logout</a>
		</span>
	  </nav>
	  <div class="container-fluid">
		<div class="row">
		  <div class="col-md-3 sidebar">
			<h4>Friends</h4>
			<ul class="list-group">
			  <li class="list-group-item">Friend 1</li>
			  <li class="list-group-item">Friend 2</li>
			  <li class="list-group-item">Friend 3</li>
			</ul>
		  </div>
		  <div class="col-md-9 main-content">
			<div class="card">
			  <div class="card-body">
				<h5 class="card-title">User Info</h5>
				<p class="card-text">Details about the user</p>
			  </div>
			</div>
			<div class="card">
			  <div class="card-body">
				<h5 class="card-title">Ranked Match</h5>
				<button class="btn btn-primary">Start Queueing</button>
			  </div>
			</div>
			<div class="card">
			  <div class="card-body">
				<h5 class="card-title">Leaderboard</h5>
				<ul class="list-group">
				  <li class="list-group-item">Player 1</li>
				  <li class="list-group-item">Player 2</li>
				  <li class="list-group-item">Player 3</li>
				</ul>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	`;
  }
