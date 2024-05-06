
import './App.css'

import { AppRoutes } from './routes';

function App() {


  return (
    <div className=' w-100 overflow-y-auto overflow-x-hidden' style={{ height: "100vh", backgroundColor: "#00042a" }}>
      <AppRoutes />
    </div>
  )
}

export default App;
