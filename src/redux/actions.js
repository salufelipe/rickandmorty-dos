export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const addFavorite = (favorite) => {

    return {type: ADD_FAVORITE, payload: favorite }
};

export const deleteFavorite = (id) => {

    return {type: DELETE_FAVORITE, payload: id }
};