import Base from './Base';

export default class Session extends Base {
    async set(params) {
        const data = await this.apiClient.post('api-token-auth/', params);

        console.log('data.token', data.token)
        await this.apiClient.setAuthToken(`JWT ${data.token}`);

        return data;
    }

    async verifyToken(params) {
        const data = await this.apiClient.post('api-token-verify/', params);
         
        await this.apiClient.setAuthToken(`JWT ${params.token}`);

        return data;
    }

    async getUserData() {
        return await this.apiClient.get('participant');
    }
}
