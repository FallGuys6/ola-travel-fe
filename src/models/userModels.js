class UserModels {
    constructor(data = {}) {
        this.id = data.id || '';
        this.email = data.email || '';
        this.phone = data.phone || '';
        this.address = data.address || '';
        this.avatarUrl = data.avatarUrl || '';
        this.title = data.title || '';
        this.fullName = data.fullName || '';
        this.countryCode = data.countryCode || '+84';
        this.roles = data.roles || [];
    }

    isSuperAdmin() {
        return this.roles.includes('super_admin');
    }

    isBusinessManager() {
        return this.roles.includes('business_manager');
    }

    isUser(){
        return this.roles.includes('user');
    }
}

export default UserModels;