import { produce } from "immer"
import { AppState, Movie } from "./types";

export const AddOrRemoveFavorite = (state: AppState, movie: Movie): AppState => {
    return produce(state, (draft) => {
        if (draft.favoriteMovies.has(movie.imdbID)) {
            draft.favoriteMovies.delete(movie.imdbID)
        }
        else {
            draft.favoriteMovies.set(movie.imdbID, movie);
        }
    });
}

export const SetActiveQuery = (state: AppState, payload: string): AppState => {
    return produce(state, (draft) => {
        draft.activeQuery = payload
    });
}

export const ClearActiveQuery = (state: AppState): AppState => {
    return produce(state, (draft) => {
        draft.activeQuery = ''
    });
}