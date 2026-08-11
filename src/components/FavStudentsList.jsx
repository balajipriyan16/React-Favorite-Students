import { DataContext } from "../ContextProvider.jsx";
import { useContext } from "react";

function FavStudentsList() {

    const { Arr, SetArr } = useContext(DataContext);

    function removeFavorite(id) {
        SetArr(
            Arr.map((student) =>
                student.id === id ? { ...student, Favorite: false } : student
            )
        );
    }

    return (
        <>
            <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-10 pb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Favorite Students</h2>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-10">
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 shadow-inner shadow-black/30 p-5 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">List of Favorite Students</h1>
                        <span className="text-xs sm:text-sm text-slate-500 font-medium">
                            {Arr.filter((s) => s.Favorite).length} favorited
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Arr.filter((student) => student.Favorite).length === 0 ? (
                            <div className="col-span-full rounded-2xl border border-slate-700/80 bg-slate-900/70 p-8 text-center text-slate-400">
                                No favorite students added yet.
                            </div>
                        ) : (
                            Arr.filter((element) => element.Favorite).map((element) => (
                                <div
                                    className="flex flex-col justify-between gap-4 bg-slate-800/50 border border-blue-500/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40"
                                    key={element.id}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600/40 to-indigo-700/40 border border-blue-500/30 text-blue-200 font-semibold text-sm">
                                            {element.Name ? element.Name.charAt(0).toUpperCase() : "?"}
                                        </div>
                                        <div className="text-slate-100 font-medium text-sm sm:text-base truncate">
                                            {element.Name}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeFavorite(element.id)}
                                        className="w-full rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800/70 border border-slate-600/50 transition-all duration-300 hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                                    >
                                        Remove Favorite
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavStudentsList;