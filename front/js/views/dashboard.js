function dashboard(navigateTo, $player_name) {
	document.getElementById('ft_transcendence').innerHTML = `
	<div class="dashboard-container">
		<ul class="nav justify-content-center">
			<a class="nav-link disabled">pongonline</a>
			<a class="nav-link disabled">${$player_name}</a>
			<a class="nav-link" href="" id="logoutLink">Logout</a>
		</ul>
		<h3 id ="header-dashboard"class="text-center">
			${$player_name}'s Dashboard
		</h3>
		<div class="text-center" id=profile-picture>
			<img src="content/profil.png" class="img-thumbnail rounded-circle d-flex justify-content-center" style="width: 200px; height: 200px; " alt="Profile Picture">
		</div>
		<div class="container-fluid">
			<div class="row">
			<div class="col-md-3 sidebar">
				<h4 id="title_dashboard">Friends</h4>
				<ul id="friends" class="list-group">
					<li class="list-group-item" data-friend="Friend1">Friend1</li>
					<li class="list-group-item" data-friend="Friend2">Friend2</li>
					<li class="list-group-item" data-friend="Friend3">Friend3</li>
				</ul>
				<div id="friendDropdown" class="dropdown-menu" style="display: none;">
					<a class="dropdown-item" href="#" id="sendMessage">Send Private Message</a>
					<a class="dropdown-item" href="#" id="startGame">Start a Game</a>
				</div>
			</div>
				<div class="col-md-9 main-content">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${$player_name}</h5>
							<p class="card-text">Details about ${$player_name}</p>
						</div>
					</div>
					<div class="card">
						<div class="card-body">
							<div class="btn-group" id="play_button" "role="group" aria-label="Basic example">
								<button type="button" class="btn btn-primary">Play</button>
								<button type="button" class="btn btn-primary">Play with friend</button>
								<button type="button" class="btn btn-primary">Play tournament</button>
						  	</div>
						</div>
					</div>
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Leaderboard</h5>
							<ul class="list-group">
								<li class="list-group-item">Player1</li>
								<li class="list-group-item">Player2</li>
								<li class="list-group-item">Player3</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="py-3 my-4">
			<p class="text-center text-body-secondary">©2024 42Company, Inc</p>
		</footer>
	</div>`;

	attachEventHandlers(navigateTo, $player_name);
  }

function attachEventHandlers(navigateTo, $player_name) {
    // Navigate to login page when logout is clicked
    document.getElementById('logoutLink').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Logout successful');
        navigateTo('login');
    });

    document.getElementById('play_button').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Play button clicked');
        navigateTo('gameplay', $player_name);
    });

    // Show dropdown menu when friend is clicked
    document.querySelectorAll('#friends .list-group-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdown = document.getElementById('friendDropdown');
            const friendName = this.getAttribute('data-friend');
            const rect = this.getBoundingClientRect();
            
            // Position the dropdown near the clicked friend item
            dropdown.style.top = `${rect.bottom}px`;
            dropdown.style.left = `${rect.left}px`;
            dropdown.style.display = 'block';

            // Store the clicked friend's name
            dropdown.setAttribute('data-friend', friendName);
        });
    });

    // Hide the dropdown menu when clicking outside of it
    document.addEventListener('click', function () {
        document.getElementById('friendDropdown').style.display = 'none';
    });

    // Prevent the dropdown menu from closing when clicking inside it
    document.getElementById('friendDropdown').addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Event handlers for dropdown menu actions
    document.getElementById('sendMessage').addEventListener('click', function (event) {
        event.preventDefault();
        const friendName = document.getElementById('friendDropdown').getAttribute('data-friend');
        console.log(`Send message to ${friendName}`);
        chat($player_name, friendName);
    });

    document.getElementById('startGame').addEventListener('click', function (event) {
        event.preventDefault();
        const friendName = document.getElementById('friendDropdown').getAttribute('data-friend');
        console.log(`Start a game with ${friendName}`);
        // Add your logic here to start a game
    });
}

// Initial call to attachEventHandlers in case the elements are already present
$(document).ready(function() {
    attachEventHandlers();
});