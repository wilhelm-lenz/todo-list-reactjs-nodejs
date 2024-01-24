const createdDateForCreatedAT = (newTodo) => {
  const date = new Date(Date.now());
  const day = date.getDate();
  const monthNumber = date.getMonth();
  const fullYear = date.getFullYear();

  if (!newTodo.created_at) {
    newTodo.created_at = `${fullYear}-${monthNumber < 10 ? 0 : null}${
      monthNumber + 1
    }-${day}`;
  }
};

module.exports = {
  createdDateForCreatedAT,
};
