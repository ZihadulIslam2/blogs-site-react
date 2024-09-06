import Footer from './Footer'
import Nav from './Nav'
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <h1 className="bg-cyan-300">this is app jsx</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
