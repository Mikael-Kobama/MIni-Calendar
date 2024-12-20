const monthEl = document.getElementById("month");
const dayNameEl = document.getElementById("day");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

// Atualizando o mês
monthEl.innerHTML = date.toLocaleDateString("pt-BR", {
  month: "long",
});

// Atualizando o nome do dia da semana
dayNameEl.innerHTML = date.toLocaleDateString("pt-BR", {
  weekday: "long",
});

// Atualizando o número do dia
dayNumEl.innerHTML = date.getDate();

// Atualizando o ano
yearEl.innerHTML = date.getFullYear();
