const repos = [
  {
    owner: 'hubudibu',
    repo: 'a66-hackathon',
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
]

const githubDataSource = ((repos) => {

  const fetchRepo = (owner, repo) => fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits`,
    { method: 'get' }
  )
  .then(response => response.json())
  .then(responseJSON => responseJSON.map((commit) => ({
    date: Date.parse(commit.commit.committer.date),
    text: commit.commit.message,
    author: commit.commit.committer.name,
    type: 'github',
    team: repo,
  })))

  return {
    get: () => Promise.all(repos.map(repo => fetchRepo(repo.owner, repo.repo))).then(items => utils.flattenArrays(items))
  }
})(repos)
