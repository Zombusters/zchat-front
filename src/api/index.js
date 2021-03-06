import ApiClient from './ApiClient';

import SessionAPI from './Session';
import MessagesAPI from './Messages';

export default function apiConstruct(config) {
    const api = new ApiClient({ prefix: 'https://dj9onz9lb9.execute-api.eu-west-1.amazonaws.com/zchat_base' });

    return {
        apiClient   : api,
        session     : new SessionAPI({ apiClient: api }),
        messages: new MessagesAPI({ apiClient: api })
    };
}
