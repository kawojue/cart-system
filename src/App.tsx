import React, {useContext} from 'react'
import Header from './components/Header'
import Context from './components/Context'
import ItemLists from './components/ItemLists'
import TotalAmount from './components/TotalAmout'

const App: React.FC = () => {
  const { loading, errMsg } = useContext<any>(Context)

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
