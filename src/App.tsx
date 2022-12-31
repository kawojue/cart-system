import Header from './components/Header'
import React, { useContext } from 'react'
import Context from './components/Context'
import ItemLists from './components/ItemLists'
import TotalAmount from './components/TotalAmout'

const App: React.FC = () => {
  const { loading, errMsg, carts } = useContext<any>(Context)

  if (loading) {
    return (
    <>
      <h1 className="info text-4xl">
        LOADING...
      </h1>
    </>
    )
  }

  if (errMsg) {
    return (
      <>
        <h1 className="info text-xl">
          {errMsg}
        </h1>
      </>
    )
  }

  return (
    <>
      <Header totalItem={carts.length} />
      <main className="main">
        <h1 className="main-h1 md:text-5xl">your bag</h1>
        {carts.length > 0 ?
          <>
            <ItemLists />
            <TotalAmount />
          </> :
          <h1 className="empty-msg">
            is currently empty.
          </h1>}
      </main>
    </>
  )
}

export default App
