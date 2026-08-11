import { useContext, useState } from "react";
import { DataContext } from "../ContextProvider.jsx";

function StudentsList() {
  const { Arr, SetArr } = useContext(DataContext);
  const [Var, SetVar] = useState("");

  function AddStudent() {
    SetArr([...Arr, { Name: Var, Favorite: false }]);
    SetVar("");
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Student List</h2>
        <p className="text-slate-400 text-sm sm:text-base mt-1">Add new students and manage your class list.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-3 bg-slate-900/70 border border-slate-700/50 rounded-2xl p-4 sm:p-5 shadow-lg shadow-black/20 backdrop-blur-sm">
          <input
            className="flex-1 min-w-[200px] bg-slate-800/70 border border-slate-700/60 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 text-sm sm:text-base outline-none transition-all duration-300 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
            value={Var}
            onChange={(e) => {
              SetVar(e.target.value);
            }}
            type="text"
            placeholder="Enter student name"
          />
          <button
            className="rounded-xl px-5 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            onClick={AddStudent}
          >
            Add Student
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 shadow-inner shadow-black/30 p-5 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">List of Students</h1>
            <span className="text-xs sm:text-sm text-slate-500 font-medium">{Arr.length} total</span>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Arr.map((element, key) => {
                return (
                  <div
                    className="flex flex-col justify-between gap-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40"
                    key={key}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-slate-100 font-medium text-sm sm:text-base truncate">
                        {element.Name}
                      </div>
                    </div>

                    <button
                      disabled={element.Favorite}
                      className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        element.Favorite
                          ? "bg-slate-800/60 text-slate-500 border border-slate-700/50 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      }`}
                      onClick={() => {
                        SetArr(
                          Arr.map((student) =>
                            student.id === element.id
                              ? { ...student, Favorite: true }
                              : student,
                          ),
                        );
                      }}
                    >
                      {element.Favorite ? "Favorited" : "Add to Favorite"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentsList;