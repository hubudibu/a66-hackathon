const render = (timelineData, root) => {
  let htmlString = ''
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
                      ${timelineEvent.text}
                    </div>
                  </li>`
  })
  root.innerHTML = htmlString
}
