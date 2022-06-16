const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

const setGoal = (req, res) => {
  res.status(200).json({ message: "set goals" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoals,
};
