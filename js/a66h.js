const dataSources = [
  // mockDataSource,
  slackDataSource,
  instaDataSource,
  githubDataSource,
]

let sortByDate = (item1, item2) => item2.date - item1.date

Promise.all(dataSources.map(src => src.get())).then(timelineArrays => {
  timelineItems = utils.flattenArrays(timelineArrays)
  timelineItems.sort(sortByDate)
  render(timelineItems, document.getElementById('timeline'))
});
