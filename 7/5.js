async function loadUsers(ids) {
  const promises = ids.map(id => getUser(id));
  try {
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Error loading users');
  }
}

// Приклад використання
loadUsers([0, 1, 2, 5])
  .then(users => console.log(users))
  .catch(error => console.error(error));
