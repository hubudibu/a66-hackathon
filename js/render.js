const render = (timelineData, root) => {
  let htmlString = ''
  const parseTXT = (event) => event.type === "insta" ?
                              event.text :
                              utils.parseURLs(event.text)

  timelineData.forEach((timelineEvent) => {
    const time = new Date(timelineEvent.date*1000)
    const formatOptions = { minute: '2-digit', hour: '2-digit' }
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
                      <p class="author">${timelineEvent.author || ''} [${formattedTime}]:</p>
                      ${parseTXT(timelineEvent)}
                    </div>
                  </li>`
  })
  root.innerHTML = htmlString
}
