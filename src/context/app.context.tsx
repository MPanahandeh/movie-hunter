import React, { Dispatch } from 'react';

import { AppActionTypes, AppState, Movie } from './types';

export const AppStateContext = React.createContext<AppState | undefined>(undefined);
export const AppDispatchContext = React.createContext<Dispatch<AppActionTypes> | undefined>(undefined);

const initState: AppState = {
  activeQuery : '',
  favoriteMovies: new Map<string, Movie>(), 
}


function appReducer(state: AppState, action: AppActionTypes): AppState {
	const newState = action.dispatcher(state, action.payload);
  return newState;
}


export function AppProvider({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [state, dispatch] = React.useReducer(appReducer, initState)
    return (
      <AppStateContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </AppStateContext.Provider>
    )
  }

export function useAppContext() {
  const context = React.useContext(AppStateContext)
  if (!context) {
    throw new Error(
      'useAppRegistryContext must be used within a AppStateContext'
    )
  }
  return context
}

export function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (!context) {
    throw new Error(
      'useAppRegistryDispatch must be used within a AppDispatchContext'
    )
  }
  return context
}
