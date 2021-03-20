import React, { createContext, useContext, useReducer } from "react";
//prepares the dataLayer
export const StateContext = createContext();
//wrap our app and provide the data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//Pull info from the data Layer
export const useStateValue = () => useContext(StateContext);