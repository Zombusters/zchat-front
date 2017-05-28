import Base from './Base';

export default class MessageAPI extends Base {
    async getMessages() {
        return await this.apiClient.get('api/messages/');
    }

    async sendMessage(message) {
        return await this.apiClient.post('api/my-messages/', { msg: message });
    }
}
