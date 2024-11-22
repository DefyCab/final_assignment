export function createRepository(db: any) {
  return {
    async getAll() {
      return await db;
    },
  };
}
