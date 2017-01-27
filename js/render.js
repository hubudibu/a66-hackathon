const render = (timelineData, root) => {
  let htmlString = ''
  const parseTXT = (event) => event.type === "insta" ?
                              event.text :
                              utils.parseURLs(event.text)

  timelineData.forEach((timelineEvent) => {
    // {
    //   type
    //   text
    //   date
    //   team
    //   author
    // }
    htmlString += `<li class="${timelineEvent.type}">
                    <div>
                      <p class="author">${timelineEvent.author || ''}:</p>
                      ${parseTXT(timelineEvent)}
                    </div>
                  </li>`
  })
  root.innerHTML = htmlString
}
