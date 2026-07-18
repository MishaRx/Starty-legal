// Переключатель языка (RU/EN) для юридических документов Starty.
// Один и тот же URL документа отдаётся в CWS Developer Dashboard независимо
// от языка — переключение происходит внутри страницы, а не через отдельные
// файлы/ссылки. Определение языка при первом заходе (по navigator.language)
// делается инлайн-скриптом в <head> каждой страницы — раньше первой отрисовки,
// чтобы не было мигания не тем языком. Этот файл только навешивает обработчики
// на кнопки переключения и подсвечивает активный язык — можно грузить не blocking.
document.addEventListener('DOMContentLoaded', function () {
  function setActiveButton(lang) {
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }
  setActiveButton(document.documentElement.getAttribute('data-lang') || 'ru');
  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.dataset.lang;
      document.documentElement.setAttribute('data-lang', lang);
      try { localStorage.setItem('starty_legal_lang', lang); } catch (e) {}
      setActiveButton(lang);
    });
  });
});
