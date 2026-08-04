import Footer from './Components/Footer'
import Header from './Components/Header'
import PackingForm from './Components/PackingForm'
import PackingList from './Components/PackingList'
import { ChecklistProvider } from './contexts/ChecklistProvider'

function App() {
  return (
    <ChecklistProvider>
      <Header />
      <PackingForm />
      <PackingList />
      <Footer />
    </ChecklistProvider>
  )
}

export default App
