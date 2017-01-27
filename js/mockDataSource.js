const mockDate = Date.now() / 1000

const mockDataSource = (() => {
  const mockData = [
    {
      date: mockDate,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: mockDate + 10,
      text: 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: mockDate + 20,
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: mockDate + 30,
      text: ' nisi ut aliquip ex ea commodo consequat.',
      type: 'mock',
      team: 'Lone fox',
    },
  ]
  return {
    get: () => new Promise((resolve) => resolve(mockData))
  }
})()
const mockDataSource2 = (() => {
  const mockData = [
    {
      date: mockDate + 5,
      text: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: mockDate + 100,
      text: '2 eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: mockDate + 15,
      text: '2 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      type: 'mock',
      team: 'Lone fox',
    },
    {
      date: mockDate + 1,
      text: '2  nisi ut aliquip ex ea commodo consequat.',
      type: 'mock',
      team: 'Lone fox',
    },
  ]
  return {
    get: () =>  new Promise((resolve) => resolve(mockData))
  }
})()
