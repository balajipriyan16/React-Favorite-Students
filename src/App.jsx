import ContextProvider from "./ContextProvider.jsx"
import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
import StudentsList from "./components/StudentsList.jsx"
import FavStudentsList from "./components/FavStudentsList.jsx"

function App() {
  return (
    <>
    <BrowserRouter>

      <ContextProvider>
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0b1220] to-slate-950 font-sans">
          <div className="flex flex-wrap items-center justify-center gap-4 px-6 sm:px-10 py-5 bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-black/20 sticky top-0 z-20">

            <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-full p-1.5">
              <Link to={"/"}>
                <h1 className="px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold text-slate-300 transition-all duration-300 hover:text-white hover:bg-slate-700/60">
                  Students
                </h1>
              </Link>

              <Link to={"/favorite"}>
                <h1 className="px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold text-slate-300 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-md hover:shadow-blue-500/30">
                  Favorites 
                </h1>
              </Link>
            </div>
          </div>



          <Routes>
              <Route path="/"element={<StudentsList />}/>
              <Route path="favorite/"element={<FavStudentsList />}/>
          </Routes>
        </div>

      </ContextProvider>

  </BrowserRouter>
    
    </>
  )
}

export default App