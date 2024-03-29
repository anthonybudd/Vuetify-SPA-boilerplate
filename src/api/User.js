import Service from './Service';

class User extends Service {
    get() {
        return this.axios.get('/user');
    }

    getByInviteKey(inviteKey) {
        return this.axios.get(`/user/invite-key/${inviteKey}`);
    }

    update(user) {
        return this.axios.post('/user', user);
    }

    updatePassword(password) {
        return this.axios.post('/user/update-password', password);
    }
}

export default User;
