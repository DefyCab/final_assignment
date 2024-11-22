export function createRepository(db: any) {
  return {
    getAll() {
      return db;
    },
  };
}
