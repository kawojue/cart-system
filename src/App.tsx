import React from 'react'
import Header from './components/Header'
import ItemLists from './components/ItemLists'

const App: React.FC = () => {
  return (
    <>
      <Header totalItem={0} />
      <main>
        <ItemLists />
      </main>
    </>
  )
}

export default App
