import React from 'react'

const HeaderContext = React.createContext({
  activeTab: '',
  changeTab: () => {},
})

export default HeaderContext
