export function createRepository(db) {
  return {
    async getALl() {
      return await db;
    },
  };
}
