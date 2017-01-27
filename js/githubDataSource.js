const repos = [
  {
    owner: 'hubudibu',
    repo: 'a66-hackathon',
  },
  {
    owner: 'gex',
    repo: 'a66-hackathon-backend',
  },
  {
    owner: 'bednayb',
    repo: 'BednayPracserMasterTeam',
  },
  {
    owner: 'bsoptei',
    repo: 'konflikt',
  },
  {
    owner: 'greenfox-zerda-raptors',
    repo: 'Nonogram',
  },
  {
    owner: 'matheb',
    repo: 'TaskManager',
  },
  {
    owner: 'radaladar',
    repo: 'FedExDay-OneEyedJacks-SequenceGame',
  },
  {
    owner: 'oliviaisarobot',
    repo: 'whist-scoreboard-project',
  },
  {
    owner: 'CzabaiT',
    repo: 'HighContrast',
  },
  {
    owner: 'greenfox-zerda-sparta',
    repo: 'Qt_Against_Humanity',
  },
  {
    owner: 'geritwo',
    repo: 'teamSpaceCake',
  },
  {
    owner: 't2botond',
    repo: 'TrainStat',
  },
  {
    owner: 'greenfox-zerda-sparta',
    repo: 'Voice_Hangman',
  },
]

const githubDataSource = ((repos) => {

  const fetchRepo = (owner, repo) => fetch(
    `https://a66-hackathon.herokuapp.com/repos/${owner}/${repo}/commits`,
    { method: 'get' }
  )
  .then(response => response.json())
  .then(responseJSON => responseJSON.map((commit) => ({
    date: Date.parse(commit.date)/1000,
    text: commit.message,
    author: commit.author,
    type: 'github',
    team: repo,
    avatar: commit.avatar,
  })))

  return {
    get: () => Promise.all(repos.map(repo => fetchRepo(repo.owner, repo.repo))).then(items => utils.flattenArrays(items))
  }
})(repos)
