import './index.css'

const TabItem = props => {
  const {eachTab, changeGenreApps, activeTabId} = props
  const {displayText, tabId} = eachTab

  const activateTab = () => {
    changeGenreApps(tabId)
  }

  const highlightTab = activeTabId === tabId ? 'highlight-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${highlightTab}`}
        onClick={activateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
