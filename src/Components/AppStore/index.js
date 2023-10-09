import React, {useState} from 'react'
import AppItem from '../AppItem'
import TabItem from '../TabItem'
import './index.css'


const tabsList =[
  {tabId:'SOCIAL', displayText: 'Social'},
  {tabId:'GAMES', displayText: 'Games'},
  {tabId:'NEWS', displayText: 'News'},
  {tabId:'FOOD', displayText: 'Food'},
]

const initialAppsList =[
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
  },

  {
    appId: 1,
    appName: 'Messenger',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
  },
  {
    appId: 9,
    appName: 'Subway Surfers',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
  },
  {
    appId: 10,
    appName: 'Telegram',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Hills Climb 2',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'Inshorts',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
  },
  {
    appId: 17,
    appName: 'Way2News',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
  },
  {
    appId: 18,
    appName: 'Google News',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
  },
  {
    appId: 19,
    appName: 'Waitr',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
  },
  {
    appId: 20,
    appName: 'Saucey',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
  },
  {
    appId: 21,
    appName: 'Grubhub',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
  },
]
const AppStore = () =>{
  const [searchInput, setSearchInput] = useState('')
  const [activeTabId,setActiveTabId] = useState(tabsList[0].tabId)
   
  const onChangeSearchApp = event => {
    setSearchInput(event.target.value)
  }

  

  const changeGenreApps = id => {
    setActiveTabId(id)
  }

  

  const filterAppsBasedOnGenre = () => {

    const genreAppList = initialAppsList.filter(
      eachApp => eachApp.category === activeTabId,
    )
    return genreAppList
  }

  
    const appsList = initialAppsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const genreAppList = filterAppsBasedOnGenre()
    const filteredAppList = appsList.filter(eachApp =>
      genreAppList.includes(eachApp),
    )
  return(
    <div className="app-container-">
        <div className="app-store-container">
          <h1 className="main-heading">App Store</h1>
          <div className="search-bar-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Search"
              value={searchInput}
              onChange={onChangeSearchApp}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
              alt="search icon"
              className="search-img"
            />
          </div>
          <ul className="tabs-list-items-container">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                eachTab={eachTab}
                changeGenreApps={changeGenreApps}
                activeTabId={activeTabId}
              />
            ))}
          </ul>
          <ul className="app-list-items-container">
            {filteredAppList.map(eachApp => (
              <AppItem eachApp={eachApp} key={eachApp.appId} />
            ))}
          </ul>
        </div>
      </div>
    )
}

export default AppStore;