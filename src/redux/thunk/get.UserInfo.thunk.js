import { setUserData, setLoggedInStatus, addError, addLoading, removeLoading } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";
import { APP_ROUTES } from "../../constants/routes.constants";

export const getUserInfos = () => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');


    //Loading => Await response
    dispatch(addLoading());

    try {
        const response = await getRequest(`${APP_ROUTES.API_URL}${APP_ROUTES.USER}`, token);

        const data = response.data


        const userInfos = data.data.response.result.map((infos) => {
            const { email, pseudo, avatar, password } = infos;

            return {

                email,
                pseudo,
                avatar,
                password,

            }

        });

        dispatch(setUserData({ ...userInfos, user_id: data.data.userId }))


        // Remove Loading
        dispatch(removeLoading())
    } catch (error) {
        console.error("Failed to fetch user's infos:", error);
        token = localStorage.removeItem('accessToken')
        dispatch(removeLoading());
        dispatch(addError());
    }


}