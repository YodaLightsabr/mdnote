const md = document.querySelector('div.md');

document.querySelector('div.md').onkeyup = () => {
  console.log(document.querySelector('div.md').innerHTML);
  function h (num) {
  if (md.innerHTML.includes('<div>' + ('#').repeat(num) + ' </div>') || md.innerHTML.includes('<div>' + ('#').repeat(num) + '&nbsp;</div>')) {
    let selector = md.innerHTML.includes('<div>' + ('#').repeat(num) + ' </div>') ? ' ' : '&nbsp;';
    let id = btoa(Date.now()).substring(0, 16);
    md.innerHTML = md.innerHTML.replace('<div>' + ('#').repeat(num) + '' + selector + '</div>', '<h' + num + ' contenteditable="true" class="' + id + '">' + ('#').repeat(num) + ' </h' + num + '>');
    let h1 = document.querySelector('h' + num + '.' + id);
    setTimeout(function() {
      h1.focus();
      let range = document.createRange();
      range.selectNodeContents(h1);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }, 0);
  } else if (md.innerHTML.startsWith('' + ('#').repeat(num) + ' ') || md.innerHTML.startsWith('' + ('#').repeat(num) + '&nbsp;')) {
    let selector = md.innerHTML.startsWith('' + ('#').repeat(num) + ' ') ? ' ' : '&nbsp;';
    let id = btoa(Date.now()).substring(0, 16);
    md.innerHTML = md.innerHTML.replace('' + ('#').repeat(num) + '' + selector + '', '<h' + num + ' contenteditable="true" class="' + id + '">' + ('#').repeat(num) + '</h' + num + '>');
    let h1 = document.querySelector('h' + num + '.' + id);
    setTimeout(function() {
      h1.focus();
      let range = document.createRange();
      range.selectNodeContents(h1);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }, 0);
  }
  }
  function replace (input, element, middle) {

  if (md.innerHTML.includes('<div>' + input + ' </div>') || md.innerHTML.includes('<div>' + input + '&nbsp;</div>')) {
    let selector = md.innerHTML.includes('<div>' + input + ' </div>') ? ' ' : '&nbsp;';
    let id = btoa(Date.now()).substring(0, 16);
    md.innerHTML = md.innerHTML.replace('<div>' + (middle || input) + '' + selector + '</div>', '<' + element + ' contenteditable="true" class="' + id + '">' + input + ' </' + element + '><br>');
    let h1 = document.querySelector('' + element + '.' + id);
    setTimeout(function() {
      h1.focus();
      let range = document.createRange();
      range.selectNodeContents(h1);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }, 0);
  }
  if (md.innerHTML.startsWith('' + input + ' ') || md.innerHTML.startsWith('' + input + '&nbsp;')) {
    let selector = md.innerHTML.startsWith('' + input + ' ') ? ' ' : '&nbsp;';
    let id = btoa(Date.now()).substring(0, 16);
    md.innerHTML = md.innerHTML.replace('' + input + '' + selector + '', '<' + element + ' contenteditable="true" class="' + id + '">' + (middle || input) + ' </' + element + '><br>');
    let h1 = document.querySelector('' + element + '.' + id);
    setTimeout(function() {
      h1.focus();
      let range = document.createRange();
      range.selectNodeContents(h1);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }, 0);
  }
  }
  h(1);
  h(2);
  h(3);
  h(4);
  h(5);
  h(6);
  replace('-', 'ul', '<li>-</li>')
  replace(' -', 'ul', '<li>-</li>')
  replace(' *', 'ul', '<li>*</li>')
  replace('*', 'ul', '<li>*</li>')
  replace('`', 'code');
  replace('``', 'code');
  replace('```', 'pre');
}
document.querySelector('div[contenteditable="true"]').addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    });
