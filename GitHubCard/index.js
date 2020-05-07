/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

axios.get('https://api.github.com/users/hera')
	.then (response => {
		let card = createCard(response.data);
		displayCard(card);
	})
	.catch(error => {
		console.log(error);
	});



function createCard (user) {

	// main card div
	let card = document.createElement('div');
	card.classList.add('card');

	let img = document.createElement('img');
	img.setAttribute('src', user.avatar_url);
	card.appendChild(img);

	let cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	card.appendChild(cardInfo);

	// card info

	let h3 = document.createElement('h3');
	h3.classList.add('name');
	h3.textContent = user.name;
	cardInfo.appendChild(h3);

	let userName = document.createElement('p');
	userName.classList.add('username');
	userName.textContent = user.login;
	cardInfo.appendChild(userName);

	let location = document.createElement('p');
	location.textContent = user.location;
	cardInfo.appendChild(location);

	let profile = document.createElement('p');
	let profileLink = document.createElement('a');
	profileLink.setAttribute('href', user.html_url);
	profileLink.textContent = user.html_url;
	profile.appendChild(profileLink);
	cardInfo.appendChild(profile);


	let followers = document.createElement('p');
	followers.textContent = `Followers: ${user.followers}`;
	cardInfo.appendChild(followers);

	let following = document.createElement('p');
	following.textContent = `Following: ${user.following}`;
	cardInfo.appendChild(following);

	let bio = document.createElement('p');
	bio.textContent = user.bio || "No biography";
	cardInfo.appendChild(bio);


	return card;
}

function displayCard (card) {
	let cards = document.querySelector('.cards');
	cards.appendChild(card);
}

