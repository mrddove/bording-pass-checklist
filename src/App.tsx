import Footer from './Components/Footer'
import Header from './Components/Header'
import ListControl from './Components/ListControl'
import PackingForm from './Components/PackingForm'
import PackingList from './Components/PackingList'
import { ChecklistProvider } from './contexts/ChecklistProvider'

function App() {
  return (
    <ChecklistProvider>
      <Header />
      <div className="container">
        <PackingForm />
        <PackingList />
        <ListControl />
      </div>
      <Footer />
    </ChecklistProvider>
  )
}

export default App
