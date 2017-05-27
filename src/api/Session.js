import Base from './Base';

export default class Session extends Base {
    async set(params) {
        const data = await this.apiClient.post('api-token-auth/', params);

        if (data.access_token) {
            const token = `${data.token_type[0].toUpperCase()}${data.token_type.substring(1)} ${data.access_token}`;
        }

        return data;
    }

    async verifyToken(params) {
        const data = await this.apiClient.post('api-token-verify/', params);

        return data;
    }

    async getUserData() {
        return await this.apiClient.get('participant');
    }
}
