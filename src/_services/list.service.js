import config from 'config';
import { handleResponse  } from '../_helpers';

export const listService = {
    getImages
};

function getImages () {
    const requestOptions = {
        method: 'GET',
        crossDomain: true
    };

    return fetch(`${config.apiUrl}/snwctv/cache/ctvserver/kids-json.json`, requestOptions).then(handleResponse);
};