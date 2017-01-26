const dataSources = [
  mockDataSource,
  slackDataSource
]

let flattenArrays = (arrays) =>  [].concat.apply([], arrays)
let sortByDate = (item1, item2) => item1.date - item2.date

Promise.all(dataSources.map(src => src.get())).then(timelineArrays => {
  timelineItems = flattenArrays(timelineArrays).sort(sortByDate);
  render(timelineItems, document.querySelector('#timeline'))
});
