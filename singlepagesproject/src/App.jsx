import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
