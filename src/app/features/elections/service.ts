export function createService(db) {
  const repository = createRepository(db);

  return {
    async getAll() {
      return repository.getAll()
    },
  };
}
