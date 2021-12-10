"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d == 0) {
    arr.push(-b / (2 * a));
  }
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let bodyAmount = amount - contribution;

  let toDay = new Date();

  let currentDayOfMonth = date.getUTCMonth() - toDay.getUTCMonth() + (date.getFullYear() - toDay.getFullYear()) * 12;

  let weeklyPayPerMonth = bodyAmount * (percent / 12 / 100 + (percent / 12 / 100) / (((1+ percent / 12 /100)**currentDayOfMonth)-1));

  totalAmount = Number((weeklyPayPerMonth * currentDayOfMonth).toFixed(2));

  return totalAmount;
}