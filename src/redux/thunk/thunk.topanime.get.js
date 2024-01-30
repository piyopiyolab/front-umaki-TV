import { getRequest } from "../../API/api";
import { setData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";

export const topanimeThunk = () => async (dispatch, getState) => {

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest("https://api.jikan.moe/v4/top/anime")
    const data = response.data

    if (response.error) {
        console.error("Error favorite user's List:", error);
        dispatch(addError());
    }



    dispatch(setData(data.data))
    console.log(data.data)

    // Remove Loading  
    dispatch(removeLoading())


};

