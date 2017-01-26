const render = (timelineData, root) => {
  let htmlString = ''
  timelineData.forEach((timelineEvent) => {
    htmlString += `<li>[${timelineEvent.type}] ${timelineEvent.text}</li>`
  })
  root.innerHTML = htmlString
}
