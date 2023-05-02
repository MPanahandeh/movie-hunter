export interface Movie {
    Poster: string,
    Title: string
    Type: string,
    Year: string,
    imdbID: string
}

export interface AppState {
    activeQuery: string,
    favoriteMovies: Map<string, Movie>
}

export interface Action<State> {
    dispatcher: { (state: State, payload?: any): State };
    payload?: any;
}

export type AppActionTypes = Action<AppState>;