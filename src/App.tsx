import React from 'react'
import Header from './components/Header'
import ItemLists from './components/ItemLists'
import TotalAmount from './components/TotalAmout'

const App: React.FC = () => {
  return (
    <>
      <Header totalItem={0} />
      <main className="main">
        <h1 className="main-h1 md:text-5xl">your bag</h1>
        <ItemLists />
        <TotalAmount />
      </main>
    </>
  )
}

export default App
