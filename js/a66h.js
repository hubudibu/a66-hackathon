const dataSources = [
  mockDataSource,
  slackDataSource,
  // githubDataSource,
]

let sortByDate = (item1, item2) => item2.date - item1.date

Promise.all(dataSources.map(src => src.get())).then(timelineArrays => {
  timelineItems = utils.flattenArrays(timelineArrays).sort(sortByDate);
  console.log(timelineItems);
  render(timelineItems, document.querySelector('#timeline'))
});
