//controller for settling shared expenses

function settleTrip(trip) {
  const ledger = {};
  let totalCost = 0;

  ledger[trip.owner.name] = 0;
  trip.members.forEach(member => {
    ledger[member.name] = 0;
  });

  trip.expenses.forEach(expense => {
    ledger[expense.paidBy.name] += expense.amount;
    expense.participants.forEach(participant => {
      ledger[participant.name] -= getCostPerPerson(expense);
    });
    totalCost += expense.amount;
  });

  ledger.totalCost = totalCost;
  return ledger;
}

function getCostPerPerson(expense) {
  return expense.amount / expense.participants.length;
}

module.exports.settleTrip = settleTrip;
