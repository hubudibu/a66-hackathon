const mockDataSource = (() => {
  const mockData = [
    {
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: new Date(),
      text: 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: new Date(),
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: new Date(),
      text: ' nisi ut aliquip ex ea commodo consequat.',
      type: 'mock',
      team: 'Lone fox',
    },
  ]
  return {
    get: () => mockData
  }
})()
