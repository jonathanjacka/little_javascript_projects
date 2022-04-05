const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

/* Using promises */
// const getUser = (username) => {
//   axios
//     .get(API_URL + username)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// };

/* Using async/await */
const getUser = async (username) => {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    console.log(error);
    createErrorCard();
  }
};

const getRepos = async (username) => {
  try {
    const { data } = await axios.get(
      API_URL + username + '/repos?sort=created'
    );
    addReposToCard(data);
  } catch (error) {
    console.log(error);
    createErrorCard('Problem displaying repos...');
  }
};

const createUserCard = (user) => {
  const { avatar_url, name, bio, followers, following, public_repos } = user;

  const cardHTML = `
    <div class="card">
        <div>
            <img src=${avatar_url} alt="user image" class="avatar">
        </div>
        <div class="user-info">
            <h2>${name ? name : 'No name found'}</h2>
            <p>${bio ? bio : ''}</p>

            <ul>
                <li>${followers} <strong>Followers</strong>&nbsp;</li>
                <li>${following} <strong>Following</strong>&nbsp;</li>
                <li>${public_repos} <strong>Repos</strong>&nbsp;</li>
            </ul>

            <div id="repos"></div>

        </div>
    </div>
  `;

  main.innerHTML = cardHTML;
};

const createErrorCard = (message = "That username doesn't exist...") => {
  const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposElement = document.getElementById('repos');

  repos.slice(0, 6).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposElement.appendChild(repoEl);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});
