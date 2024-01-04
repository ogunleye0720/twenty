import { DataSource } from 'typeorm';

const tableName = 'workspace';

export const seedWorkspaces = async (
  workspaceDataSource: DataSource,
  schemaName: string,
  workspaceId: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${tableName}`, [
      'id',
      'displayName',
      'domainName',
      'inviteHash',
      'logo',
      'subscriptionStatus',
    ])
    .orIgnore()
    .values([
      {
        id: workspaceId,
        displayName: 'Demo',
        domainName: 'demo.dev',
        inviteHash: 'demo.dev-invite-hash',
        logo: 'data:image/png;base64,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',
        subscriptionStatus: 'incomplete',
      },
    ])
    .execute();
};

export const deleteWorkspaces = async (
  workspaceDataSource: DataSource,
  schemaName: string,
  workspaceId: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .delete()
    .from(`${schemaName}.${tableName}`)
    .where(`${tableName}."id" = :id`, { id: workspaceId })
    .execute();
};
