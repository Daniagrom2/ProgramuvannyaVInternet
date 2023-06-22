function maxOfMin(a, b, c, d) {
  const min1 = Math.min(a, b);
  const min2 = Math.min(c, d);
  return Math.max(min1, min2);
}

// Приклад виклику функції:
console.log(maxOfMin(5, 8, 3, 9)); // повинно вивести 5
