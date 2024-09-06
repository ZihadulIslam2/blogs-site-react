import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
