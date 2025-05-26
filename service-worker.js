self.addEventListener("fetch", function (event) {
  // Пропускаем все запросы — ничего не кэшируем
  return false;
});
