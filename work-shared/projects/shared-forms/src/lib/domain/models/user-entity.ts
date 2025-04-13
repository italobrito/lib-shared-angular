export enum UserPermissions {
  admin = 'ADMIN',
  common = 'COMMON',
}

export interface UserEntity {
  name: string;
  permission: UserPermissions;
}
