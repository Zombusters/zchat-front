import Base from './Base';

export default class ScheduleAPI extends Base {
    async getMessages() {
        return await this.apiClient.get('api/messages');
    }

    async updateActivityStatus(activityId) {
        return await this.apiClient.post(`video/surveySectionResponse/${activityId}/mediaServices`);
    }
}
