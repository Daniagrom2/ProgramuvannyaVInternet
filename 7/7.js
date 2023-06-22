async function showUsers(ids) {
  console.log('loading');
  try {
    const users = await loadUsers(ids);
    console.log(users);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('loading finished');
  }
}

// Приклад використання
showUsers([0, 1, 2, 5]);
