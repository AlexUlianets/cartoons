import {listConstants} from '../_constants';
import {listService} from "../_services";

export const listActions = {
    getImages
};

function getImages () {
    return dispatch => {
        listService.getImages()
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(data) { return { type: listConstants.GET_SUCCESS, data } }
    function failure(error) { return { type: listConstants.GET_FAILURE, error } }
}