// All global declarations are 'var' so you that you can run this script
// for several problems subsequently in the same browser tab.

var resultArr = [];

// PROMPT
var prompt = $('.CodeMirror')[3].CodeMirror;
resultArr.push('/* PROMPT:\n' + prompt.getValue() + '\n*/\n');

// HINTS
var hintContainer = $('.CodeMirror')[4].CodeMirror;
var hints = ['1. ' + hintContainer.getValue() + '\n']; // First hint
var hintButtons = $('.hintContainerList .special'); // Remaining hints
for (let i = 0; i < hintButtons.length; i++) {
  hintButtons[i].click();
  if (i === hintButtons.length - 1) {
    break;
    /* This is a div that plays by different rules; I didn't feel like going
    through the trouble to figure this out. Code would be:
    hints.push('Optimal Space & Time Complexity:\n'+ doSomething() + '\n');
    */
  } else {
    hints.push(i + 2 + '. ' + hintContainer.getValue() + '\n');
  }
}
resultArr.push('/* HINTS:\n\n' + hints.join('\n') + '\n*/\n');

// SOLUTIONS
var ourSolutionButton = $('.inputContainer .editorBannerList li').last()[0];
ourSolutionButton.click();
var solutionContainer = $('.CodeMirror')[0].CodeMirror;
if (!$('.inputContainerSolutionList').length) {
  resultArr.push('// SOLUTION:\n\n' + solutionContainer.getValue() + '\n');
} else {
  const solutions = ['// SOLUTION #1:\n' + solutionContainer.getValue() + '\n']; // First solution
  const solutionButtons = $('.inputContainerSolutionList .special'); // Remaining solutions
  for (let i = 0; i < solutionButtons.length; i++) {
    solutionButtons[i].click();
    solutions.push(
      '// SOLUTION #' + (i + 2) + ':\n' + solutionContainer.getValue() + '\n'
    );
  }
  resultArr.push('////// SOLUTIONS\n\n' + solutions.join('\n') + '\n');
}

// TESTS
var testCode = $('.CodeMirror')[1].CodeMirror;
resultArr.push('////// TESTS\n\n' + testCode.getValue() + '\n');

console.log(resultArr.join('\n'));
