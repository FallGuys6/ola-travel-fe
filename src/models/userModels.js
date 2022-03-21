class UserModels {
  constructor(data = {}) {
    this.id = data.id || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.address = data.address || '';
    this.avatarUrl = data.avatarUrl || '';
    this.title = data.title || '';
    this.status = data.status || '';
    this.coupons= data.coupons || [];
    this.fullName = data?.fullName?.split(' ')[0] || '';
    this.dob = data.dob || '';
    this.countryCode = data.countryCode || '+84';
    this.roles = data.roles || [];
    this.email_verified_at = data.email_verified_at || '';
    this.created_at = data.created_at || Date.now();
    this.updated_at = data.updated_at || '';
    this.deleted_at = data.deleted_at || '';
  }

  isSuperAdmin() {
    return this.roles.includes('super_admin');
  }

  isBusinessManager() {
    return this.roles.includes('business_manager');
  }

  isUser() {
    return this.roles.includes('user');
  }
}

export default UserModels;
