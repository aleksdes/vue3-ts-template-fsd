/**
 * Настройка прав доступа и ролей
 */

/**
 * Все имеющиеся разрешения.
 * Использовать строго из этой константы.
 */
export enum PERMISSION {
  replication,
  settings,
  dataEditing,
  users,
  partners,
  informing,
  employeesOfPartner,
  partnerDocuments,
  contracts,
  attachment,
  detachment,
  changeData,
  applicationHistory,
  chat,
  overallStatistics,
  insuredReport,
  paymentSchedule,
  franchise,
  invoices,
}

/**
 * Описание доступов для роли
 */
type RolePermissions = ReadonlySet<PERMISSION>;

/**
 * Роль админа
 */
const adminRole: RolePermissions = new Set([
  PERMISSION.replication,
  PERMISSION.settings,
  PERMISSION.dataEditing,
  PERMISSION.users,
  PERMISSION.partners,
  PERMISSION.informing,
  PERMISSION.employeesOfPartner,
  PERMISSION.partnerDocuments,
  PERMISSION.contracts,
  PERMISSION.attachment,
  PERMISSION.detachment,
  PERMISSION.changeData,
  PERMISSION.applicationHistory,
  PERMISSION.chat,
  PERMISSION.overallStatistics,
  PERMISSION.insuredReport,
  PERMISSION.paymentSchedule,
  PERMISSION.franchise,
  PERMISSION.invoices,
]);

/**
 * Роль оператора поддержки
 */
const supportOperatorRole: RolePermissions = new Set([
  // PERMISSION.replication,
  // PERMISSION.settings,
  // PERMISSION.dataEditing,
  PERMISSION.users,
  PERMISSION.partners,
  PERMISSION.informing,
  PERMISSION.employeesOfPartner,
  PERMISSION.partnerDocuments,
  PERMISSION.contracts,
  PERMISSION.attachment,
  PERMISSION.detachment,
  PERMISSION.changeData,
  PERMISSION.applicationHistory,
  PERMISSION.chat,
  PERMISSION.overallStatistics,
  PERMISSION.insuredReport,
  PERMISSION.paymentSchedule,
  PERMISSION.franchise,
  PERMISSION.invoices,
]);

/**
 * Роль куратора
 */
const curatorRole: RolePermissions = new Set([
  // PERMISSION.replication,
  // PERMISSION.settings,
  // PERMISSION.dataEditing,
  // PERMISSION.users,
  // PERMISSION.partners,
  PERMISSION.informing,
  PERMISSION.employeesOfPartner,
  PERMISSION.partnerDocuments,
  PERMISSION.contracts,
  PERMISSION.attachment,
  PERMISSION.detachment,
  PERMISSION.changeData,
  PERMISSION.applicationHistory,
  PERMISSION.chat,
  PERMISSION.overallStatistics,
  PERMISSION.insuredReport,
  PERMISSION.paymentSchedule,
  PERMISSION.franchise,
  PERMISSION.invoices,
]);

/**
 * Роль HR
 */
const hrRole: RolePermissions = new Set([
  // PERMISSION.replication,
  // PERMISSION.settings,
  // PERMISSION.dataEditing,
  // PERMISSION.users,
  // PERMISSION.partners,
  // PERMISSION.informing,
  // PERMISSION.employeesOfPartner,
  // PERMISSION.partnerDocuments,
  PERMISSION.contracts,
  PERMISSION.attachment,
  PERMISSION.detachment,
  PERMISSION.changeData,
  PERMISSION.applicationHistory,
  PERMISSION.chat,
  PERMISSION.overallStatistics,
  PERMISSION.insuredReport,
  PERMISSION.paymentSchedule,
  PERMISSION.franchise,
  PERMISSION.invoices,
]);

/**
 * Роль гостя (стандартная до выяснения роли)
 */
const guestRole: RolePermissions = new Set();

/**
 * Список ролей с их доступами
 */
export const configuringRoleAccess:Record<string, RolePermissions> = {
  adminRole, supportOperatorRole, curatorRole, hrRole, guestRole,
};
