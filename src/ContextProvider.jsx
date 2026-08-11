import { createContext, useState } from "react";

const DataContext = createContext()

function ContextProvider(data){
    const [Arr, SetArr] = useState([
    {
        id: 1,
        Name: "Balaji",
        Favorite: false,
    },
    {
        id: 2,
        Name: "Priyan",
        Favorite: true,
    },
    {
        id: 3,
        Name: "Arun",
        Favorite: false,
    },
    {
        id: 4,
        Name: "Karthik",
        Favorite: true,
    },
    {
        id: 5,
        Name: "Vijay",
        Favorite: false,
    },
    {
        id: 6,
        Name: "Surya",
        Favorite: true,
    },
    {
        id: 7,
        Name: "Praveen",
        Favorite: false,
    },
    {
        id: 8,
        Name: "Rohit",
        Favorite: true,
    },
    {
        id: 9,
        Name: "Dinesh",
        Favorite: false,
    },
    {
        id: 10,
        Name: "Ajay",
        Favorite: true,
    }
]);
    return(
        <>
        <DataContext.Provider value={{Arr,SetArr}}>
            {data.children}
        </DataContext.Provider>
        </>
    )

}
export default ContextProvider;
export {DataContext}