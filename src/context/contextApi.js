import React, { useState,useEffect,createContext } from "react";
import { FetchDataFromApi } from "../utils/api";


// Here i am create context to use over another component
export const Context = createContext();

export const AppContext = (props)=>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);


    

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);
    
    const fetchSelectedCategoryData = (query) =>
        {
            setLoading(true); //it means if data not recived it will load
            FetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
                console.log(contents);
                setSearchResults(contents);
                setLoading(false); //after it will false
            });

        };

        return (
            <Context.Provider //create context provider to use usecontext
                value={{
                    loading,
                    setLoading,
                    searchResults,
                    selectedCategory,
                    setSelectedCategory,
                    mobileMenu,
                    setMobileMenu,
                }}
            >
                {props.children} 
            </Context.Provider>
        );
    


};