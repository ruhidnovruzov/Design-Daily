import './App.css'
import Navbar from './components/navbar'
import Settings from './components/settings'

function App() {

  return (
    <div>
      <Navbar />
      <div className='flex'>
      <Settings/>
      </div>
    </div>
  )
}

export default App
