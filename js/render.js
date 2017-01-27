const render = (timelineData, root) => {
  let htmlString = ''
  const parseTXT = (event) => event.type === "insta" ?
                              event.text :
                              utils.parseURLs(event.text)
  const formatOptions = { minute: '2-digit', hour: '2-digit' }

  timelineData.forEach((timelineEvent) => {
    const time = new Date(timelineEvent.date*1000)
    const formattedTime = time.toLocaleTimeString('en-US', formatOptions)
    // {
    //   type
    //   text
    //   date
    //   team
    //   author
    // }
    htmlString += `<li class="${timelineEvent.type}">
                    <div>
                      ${timelineEvent.avatar ? '<img class="avatar" src="' +  timelineEvent.avatar + '">' : ''}
                      <p class="author">${timelineEvent.author || ''} [${formattedTime}]:</p>
                      ${codex.translate(parseTXT(timelineEvent))}
                    </div>
                  </li>`
  })
  root.innerHTML = htmlString
}
