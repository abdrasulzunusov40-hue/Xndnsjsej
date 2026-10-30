// Калькулятор стоимости ремонта
var a = document.getElementById('area'),
    k = document.getElementById('kind'),
    s = document.getElementById('sum');

function calc() {
  var v = Math.max(0, +a.value || 0) * (+k.value);
  s.textContent = v ? '≈ ' + v.toLocaleString('ru-RU') + ' сом' : '—';
}
a.oninput = k.onchange = calc;
calc();

document.getElementById('usecalc').onclick = function () {
  var t = document.querySelector('#lead [name=t]');
  t.value = 'Площадь ' + a.value + ' м², ' + k.options[k.selectedIndex].text.toLowerCase() +
            ' ремонт, примерно ' + s.textContent;
  document.getElementById('zayavka').scrollIntoView();
};
