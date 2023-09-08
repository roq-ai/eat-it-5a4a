interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: [],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'System Administrator'],
  tenantName: 'Restaurant',
  applicationName: 'Eat IT',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage restaurant registration',
    'Invite and manage Restaurant Managers',
    'Edit restaurant details',
    "Manage restaurant's account status",
  ],
};
