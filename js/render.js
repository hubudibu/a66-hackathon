const render = (timelineData, root) => {
  let htmlString = ''
  timelineData.forEach((timelineEvent) => {
    htmlString += `<li>${timelineEvent.text}</li>`
  })
  root.innerHTML = htmlString
}
