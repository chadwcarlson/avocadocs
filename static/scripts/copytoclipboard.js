 // Also see vendor/prism

 // Also see
 //   - Hermit theme example: https://themes.gohugo.io//theme/hermit/post/markdown-syntax/#code-blocks
 //   - Hermit theme script: https://github.com/Track3/hermit/blob/master/assets/js/code-copy.js
 //   - Referenced here: https://discourse.gohugo.io/t/highlight-how-to-not-add-copy-button-automatically/22253


// The below source was taken from here: https://discourse.gohugo.io/t/add-copy-to-clipboard-button-to-each-highlight-code-with-javascript/21057

// copy to clipboard
const d = document;
const tempCopyInput = d.createElement('input');
d.body.appendChild(tempCopyInput);
tempCopyInput.style.position = 'fixed';
tempCopyInput.style.top = '-1000px';
// copy to clipboard function
const copyToCB = () => {
  tempCopyInput.select();
  d.execCommand('copy');
};

// Hugo outputs code `div` with `highlight` class name.
// copy from highlight container
let highlight = d.querySelectorAll('.highlight'),// or any div containing code stuff
    copyIcon = d.createElement('button');
copyIcon.innerHTML = 'copy to clipboard';

highlight.forEach((hl) => {
  hl.appendChild(copyIcon.cloneNode([true]));
  hl.children[1].addEventListener('click',() => {
  let codeText = hl.childNodes[0].textContent;
  tempCopyInput.setAttribute('value', codeText);
    copyToCB();
  })

})
