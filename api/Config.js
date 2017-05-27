import Base from './Base';

export default class ConfigAPI extends Base {
    async getAPI() {
        const prefix = await this.apiMedia.get('config');

        this.apiClient.setPrefix(prefix.apiUrl);
    }
}
