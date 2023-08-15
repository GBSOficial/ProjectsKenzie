/*
  Aqui se encontram os testes do seu script.

  NÃO ALTERE NADA
*/

const batchTest = {
    teste1: {
      shipPositions: [
        [0, 0],
        [1, 1],
        [2, 2],
        [2, 3],
        [4, 0],
        [4, 4],
      ],
      expectedSeaBoard: [
        ["S", ".", ".", ".", "."],
        [".", "S", ".", ".", "."],
        [".", ".", "S", "S", "."],
        [".", ".", ".", ".", "."],
        ["S", ".", ".", ".", "S"],
      ],
      guessesTest: {
        pass: {
          guesses: [
            [0, 0],
            [1, 1],
            [2, 2],
            [2, 3],
            [4, 0],
            [4, 4],
          ],
          expectedAfterGuessesBoard: [
            ["X", ".", ".", ".", "."],
            [".", "X", ".", ".", "."],
            [".", ".", "X", "X", "."],
            [".", ".", ".", ".", "."],
            ["X", ".", ".", ".", "X"],
          ],
          expectedIsWinner: true,
        },
        fail: {
          guesses: [
            [0, 0],
            [0, 1],
            [4, 4],
          ],
          expectedAfterGuessesBoard: [
            ["X", ".", ".", ".", "."],
            [".", "S", ".", ".", "."],
            [".", ".", "S", "S", "."],
            [".", ".", ".", ".", "."],
            ["S", ".", ".", ".", "X"],
          ],
          expectedIsWinner: false,
        },
      },
    },
    teste2: {
      shipPositions: [
        [0, 0],
        [1, 1],
        [1, 2],
        [3, 3],
        [4, 4],
      ],
      expectedSeaBoard: [
        ["S", ".", ".", ".", "."],
        [".", "S", "S", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", "S", "."],
        [".", ".", ".", ".", "S"],
      ],
      guessesTest: {
        pass: {
          guesses: [
            [0, 0],
            [1, 1],
            [1, 2],
            [3, 3],
            [4, 4],
          ],
          expectedAfterGuessesBoard: [
            ["X", ".", ".", ".", "."],
            [".", "X", "X", ".", "."],
            [".", ".", ".", ".", "."],
            [".", ".", ".", "X", "."],
            [".", ".", ".", ".", "X"],
          ],
          expectedIsWinner: true,
        },
        fail: {
          guesses: [
            [0, 1],
            [1, 0],
            [1, 3],
            [3, 3],
          ],
          expectedAfterGuessesBoard: [
            ["S", ".", ".", ".", "."],
            [".", "S", "S", ".", "."],
            [".", ".", ".", ".", "."],
            [".", ".", ".", "X", "."],
            [".", ".", ".", ".", "S"],
          ],
          expectedIsWinner: false,
        },
      },
    },
    teste3: {
      shipPositions: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3],
        [3, 4],
        [4, 0],
        [4, 1],
        [4, 2],
        [4, 3],
        [4, 4],
      ],
      expectedSeaBoard: [
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
      ],
      guessesTest: {
        pass: {
          guesses: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
            [4, 0],
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 4],
          ],
          expectedAfterGuessesBoard: [
            ["X", "X", "X", "X", "X"],
            ["X", "X", "X", "X", "X"],
            ["X", "X", "X", "X", "X"],
            ["X", "X", "X", "X", "X"],
            ["X", "X", "X", "X", "X"],
          ],
          expectedIsWinner: true,
        },
        fail: {
          guesses: [
            [0, 0],
            [0, 1],
            [1, 2],
            [2, 0],
            [4, 3],
          ],
          expectedAfterGuessesBoard: [
            ["X", "X", "S", "S", "S"],
            ["S", "S", "X", "S", "S"],
            ["X", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "X", "S"],
          ],
          expectedIsWinner: false,
        },
      },
    },
  };
  
  const resetedSeaBoard = [
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ];
  
  function areArrayBoardsEqual(boardOne, boardTwo) {
    return JSON.stringify(boardOne) === JSON.stringify(boardTwo);
  }
  
  function mountAllocateShipsResults(shipPositions, expectedSeaBoard) {
    const resetedBoardCopy = JSON.parse(JSON.stringify(resetedSeaBoard));
  
    const resultedSeaBoard = allocateShips(shipPositions, resetedBoardCopy);
  
    const areBoardsEqual = areArrayBoardsEqual(
      expectedSeaBoard,
      resultedSeaBoard
    );
  
    return {
      areBoardsEqual,
      shipPositions,
      expectedSeaBoard,
      resultedSeaBoard,
    };
  }
  
  function mountCheckGuessesResults(guessesBatch, mountedSeaBoard, testIndex) {
    const mountedCheckGuessesTestResults = {};
  
    let testCounter = 2 * testIndex + 1;
    for (const [key, value] of Object.entries(guessesBatch)) {
      // Needed data
      const mountedSeaBoardCopy = JSON.parse(JSON.stringify(mountedSeaBoard));
      const expectedAfterGuessesBoard = value.expectedAfterGuessesBoard;
      const guesses = value.guesses;
  
      // Call checkGuesses
      const resultedGuessedBoard = checkGuesses(guesses, mountedSeaBoardCopy);
  
      // Verify expected versus resulted
      const areGuessedBoardsEqual = areArrayBoardsEqual(
        resultedGuessedBoard,
        expectedAfterGuessesBoard
      );
  
      mountedCheckGuessesTestResults[`teste${testCounter}`] = {
        mountedSeaBoard,
        guesses,
        expectedAfterGuessesBoard,
        resultedGuessedBoard,
        areGuessedBoardsEqual,
      };
  
      testCounter++;
    }
  
    return mountedCheckGuessesTestResults;
  }
  
  function mountCheckWinConditionResults(guessesBatch, testIndex) {
    const mountedCheckWinConditionTestResults = {};
  
    let testCounter = 2 * testIndex + 1;
    for (const [key, value] of Object.entries(guessesBatch)) {
      // Needed data
      const expectedIsWinner = value["expectedIsWinner"];
      const expectedAfterGuessesBoard = value.expectedAfterGuessesBoard;
      // console.log("expectedAfterGuessesBoard", expectedAfterGuessesBoard);
  
      // Call CheckWinCondition()
      const resultedIsWinner = checkWinCondition(expectedAfterGuessesBoard);
  
      // // Check game final result
      // const resultedIsWinner = checkWinCondition(expectedAfterGuessesBoard);
  
      mountedCheckWinConditionTestResults[`teste${testCounter}`] = {
        expectedIsWinner,
        resultedIsWinner,
        expectedAfterGuessesBoard,
      };
  
      testCounter++;
    }
  
    return mountedCheckWinConditionTestResults;
  }
  
  function testCheckGuesses() {
    // TODO:
    // Criar 1 objeto para cada uma das 3 funçoes, com mesmos nomes de chave
    // teste1, teste2. Não teremos a necessidade de iterar multiplar vezes sobre a mesma coisa.
    let checkGuessesTestResults = {};
  
    let testCounter = 0;
  
    for (const [key, value] of Object.entries(batchTest)) {
      // key -> teste1; value -> object
      // guessTests
      const guessesBatch = value.guessesTest;
      const mountedSeaBoard = value.expectedSeaBoard;
  
      const mountedCheckGuessesTestResults = mountCheckGuessesResults(
        guessesBatch,
        mountedSeaBoard,
        testCounter
      );
  
      // CHANGED (REMEBER TO ADAPT)
      // checkGuessesTestResults[key]["guessesTest"] =
      //   mountedCheckGuessesTestResults;
      // checkGuessesTestResults[`teste${testCounter}`] =
      //   mountedCheckGuessesTestResults;
      checkGuessesTestResults = {
        ...checkGuessesTestResults,
        ...mountedCheckGuessesTestResults,
      };
      testCounter++;
    }
  
    // console.log("checkGuessesTestResults", checkGuessesTestResults);
    /*
    {teste1: {…}, teste2: {…}, teste3: {…}, teste4: {…}, teste5: {…}, …}
    */
    return checkGuessesTestResults;
  }
  
  function testCheckWinCondition() {
    let checkWinConditionTestResults = {};
  
    let testCounter = 0;
  
    for (const [key, value] of Object.entries(batchTest)) {
      const guessesBatch = value.guessesTest;
  
      const mountedCheckWinConditionTestResults = mountCheckWinConditionResults(
        guessesBatch,
        testCounter
      );
  
      checkWinConditionTestResults = {
        ...checkWinConditionTestResults,
        ...mountedCheckWinConditionTestResults,
      };
      testCounter++;
    }
  
    // console.log("checkWinConditionTestResults", checkWinConditionTestResults);
  
    return checkWinConditionTestResults;
  }
  
  function testAllocateShips() {
    const allocateShipsTestResults = {};
  
    for (const [key, value] of Object.entries(batchTest)) {
      // Allocate Ships
      const shipPositions = value.shipPositions;
      const expectedSeaBoard = value.expectedSeaBoard;
  
      const mountedAllocateShipsTestResults = mountAllocateShipsResults(
        shipPositions,
        expectedSeaBoard
      );
  
      allocateShipsTestResults[key] = mountedAllocateShipsTestResults;
    }
  
    return allocateShipsTestResults;
  }
  
  function allocateShipsDOMFilling(index, allocateShipsBoardResults) {
    let testCounter = index + 1;
    let zeroPadTestCounter = ("00" + testCounter).slice(-2);
  
    const areBoardsEqual =
      allocateShipsBoardResults[`teste${index + 1}`].areBoardsEqual;
  
    // Change accordion button innerHTML
    const buttonInnerHTML = areBoardsEqual
      ? `<span style='color: green; font-size: 1.15em'>[&nbsp<strong> PASS </strong>&nbsp]</span> <span style='font-size: 1.15em;'>&nbsp -> [Teste #A${zeroPadTestCounter}] Testando a função <strong>allocateShips</strong></span>`
      : `<span style='color: red; font-size: 1.15em'>[&nbsp<strong> FAIL </strong>&nbsp]</span> <span style='font-size: 1.15em;'>&nbsp -> [Teste #A${zeroPadTestCounter}] Testando a função <strong>allocateShips</strong></span>`;
  
    const accordionButtonId = `#teste${index + 1}-allocate-ships`;
    const button = document.querySelector(accordionButtonId);
    button.innerHTML = buttonInnerHTML;
    testCounter++;
  
    // Capturing accordion body
    const accordionItem = document.querySelector(
      `#ac${index + 1}-allocate-ships`
    );
  
    if (index + 1 == 1) {
      const acButton = accordionItem.getElementsByTagName("button")[0];
      acButton.classList.add("collapsed");
  
      const acDiv = accordionItem.getElementsByTagName("div")[0];
      acDiv.classList.remove("show");
    }
  
    const accordionBody = accordionItem.querySelector(".accordion-body");
  
    // Change accordion-body innerHTML
    const expectedSeaBoard =
      allocateShipsBoardResults[`teste${index + 1}`].expectedSeaBoard;
    const resultedSeaBoard =
      allocateShipsBoardResults[`teste${index + 1}`].resultedSeaBoard;
    const testedValues =
      allocateShipsBoardResults[`teste${index + 1}`].shipPositions;
  
    // Inner body style
    const innerBodyColorStyle = `color:${areBoardsEqual ? "green" : "red"};`;
    const innerBodyFontSize = "font-size: 1.075em;";
    let innerBodyHTMLTestedValues = `<pre style='${innerBodyFontSize}'><strong>Valores Testados:</strong><br>[<br>`;
    let innerBodyHTMLExpected = `<pre style='${innerBodyFontSize} color: green'><strong>Resultado esperado:</strong><br>[<br>`;
    let innerBodyHTMLResulted = `<pre style='${innerBodyFontSize} ${innerBodyColorStyle}' ><strong>Resultado obtido:</strong><br>[<br>`;
  
    // Formating board arrays to string for better visualization in HTML
    for (let i = 0; i < expectedSeaBoard.length; i++) {
      innerBodyHTMLExpected += "&nbsp&nbsp";
      innerBodyHTMLExpected += JSON.stringify(expectedSeaBoard[i]);
      innerBodyHTMLExpected += ",";
      innerBodyHTMLExpected += "<br>";
  
      innerBodyHTMLResulted += "&nbsp&nbsp";
      innerBodyHTMLResulted += JSON.stringify(resultedSeaBoard[i]);
      innerBodyHTMLResulted += ",";
      innerBodyHTMLResulted += "<br>";
    }
  
    // Formating tested values arrays to string for better visualization in HTML
    for (let j = 0; j < testedValues.length; j++) {
      innerBodyHTMLTestedValues += "&nbsp&nbsp";
      innerBodyHTMLTestedValues += JSON.stringify(testedValues[j]);
      innerBodyHTMLTestedValues += ",";
      innerBodyHTMLTestedValues += "<br>";
    }
  
    // Closing pre tags
    innerBodyHTMLExpected += "]</pre>";
    innerBodyHTMLResulted += "]</pre>";
    innerBodyHTMLTestedValues += "]</pre>";
  
    // Actual change in inner HTML
    accordionBody.innerHTML = `<div style="display: flex;justify-content: space-around;"> ${innerBodyHTMLTestedValues} ${innerBodyHTMLResulted} ${innerBodyHTMLExpected} </div>`;
  }
  
  function checkGuessesDOMFilling(checkGuessesTestResults) {
    let testCounter = 1;
  
    for (const [key, value] of Object.entries(checkGuessesTestResults)) {
      // key -> teste1, ..., teste6; value -> mountedCheckGuessesTestResults
      const areGuessedBoardsEqual = value.areGuessedBoardsEqual;
      const initialSeaBoard = value.mountedSeaBoard;
      const expectedSeaBoard = value.expectedAfterGuessesBoard;
      const resultedSeaBoard = value.resultedGuessedBoard;
      const testedValues = value.guesses;
  
      let zeroPadTestCounter = ("00" + testCounter).slice(-2);
      /*
        checkGuess DOM Elements
      */
  
      // Mounting button inner HTML
      const guessButtonId = `#${key}-check-guesses`;
      const buttonInnerHTML = areGuessedBoardsEqual
        ? `<span style='color: green; font-size: 1.15em'>[&nbsp<strong> PASS </strong>&nbsp]</span> <span style='font-size: 1.15em;'>&nbsp -> [Teste #B${zeroPadTestCounter}] Testando a função <strong>checkGuesses</strong></span>`
        : `<span style='color: red; font-size: 1.15em'>[&nbsp<strong> FAIL </strong>&nbsp]</span> <span style='font-size: 1.15em;'>&nbsp -> [Teste #B${zeroPadTestCounter}] Testando a função <strong>checkGuesses</strong></span>`;
  
      // Capturing and changing button inner HTML
      const button = document.querySelector(guessButtonId);
      button.innerHTML = buttonInnerHTML;
  
      // Mounting accordion inner HTML
      const innerBodyColorStyle = `color:${
        areGuessedBoardsEqual ? "green" : "red"
      };`;
      const innerBodyFontSize = "font-size: 1.075em;";
  
      let innerBodyHTMLTestedValues = `<pre style='${innerBodyFontSize}'><strong>Valores Testados:</strong><br>[<br>`;
      let innerBodyHTMLInputBoard = `<pre style='${innerBodyFontSize} color: blue'><strong>Board Inicial (mountedBoard):</strong><br>[<br>`;
      let innerBodyHTMLExpected = `<pre style='${innerBodyFontSize} color: green'><strong>Resultado esperado:</strong><br>[<br>`;
      let innerBodyHTMLResulted = `<pre style='${innerBodyFontSize} ${innerBodyColorStyle}' ><strong>Resultado obtido:</strong><br>[<br>`;
  
      // Formatting board arrays for better visualization in HTML
      for (let i = 0; i < expectedSeaBoard.length; i++) {
        innerBodyHTMLInputBoard += "&nbsp&nbsp";
        innerBodyHTMLInputBoard += JSON.stringify(initialSeaBoard[i]);
        innerBodyHTMLInputBoard += ",";
        innerBodyHTMLInputBoard += "<br>";
  
        innerBodyHTMLExpected += "&nbsp&nbsp";
        innerBodyHTMLExpected += JSON.stringify(expectedSeaBoard[i]);
        innerBodyHTMLExpected += ",";
        innerBodyHTMLExpected += "<br>";
  
        innerBodyHTMLResulted += "&nbsp&nbsp";
        innerBodyHTMLResulted += JSON.stringify(resultedSeaBoard[i]);
        innerBodyHTMLResulted += ",";
        innerBodyHTMLResulted += "<br>";
      }
  
      // Formatting guesses arrays for better visualization in HTML
      for (let j = 0; j < testedValues.length; j++) {
        innerBodyHTMLTestedValues += "&nbsp&nbsp";
        innerBodyHTMLTestedValues += JSON.stringify(testedValues[j]);
        innerBodyHTMLTestedValues += ",";
        innerBodyHTMLTestedValues += "<br>";
      }
  
      // Closing pre tags
      innerBodyHTMLExpected += "]</pre>";
      innerBodyHTMLResulted += "]</pre>";
      innerBodyHTMLTestedValues += "]</pre>";
      innerBodyHTMLInputBoard += "]</pre>";
  
      // Capturing and changing accordion body inner HTML
      const guessAccordionItemId = `#ac${testCounter}-check-guesses`;
      const accordionGuessItem = document.querySelector(guessAccordionItemId);
      const accordionBody = accordionGuessItem.querySelector(".accordion-body");
      accordionBody.innerHTML = `<div style="display: flex;justify-content: space-around;"> ${innerBodyHTMLTestedValues} ${innerBodyHTMLInputBoard} ${innerBodyHTMLResulted} ${innerBodyHTMLExpected} </div>`;
  
      testCounter++;
    }
  }
  
  function checkWinConditionDOMFilling(checkWinConditionTestResults) {
    let testCounter = 1;
  
    for (const [key, value] of Object.entries(checkWinConditionTestResults)) {
      zeroPadTestCounter = ("00" + testCounter).slice(-2);
      const expectedIsWinner = value.expectedIsWinner;
      const resultedIsWinner = value.resultedIsWinner;
      const expectedSeaBoard = value.expectedAfterGuessesBoard;
  
      /*
        Win Condition DOM Elements
      */
      // Mounting win condition button inner HTML
      const winButtonInnerHTML =
        expectedIsWinner === resultedIsWinner
          ? `<span style='color: green; font-size: 1.15em'>[&nbsp<strong> PASS </strong>&nbsp]</span> <span style='font-size: 1.15em;'>&nbsp -> [Teste #C${zeroPadTestCounter}] Testando a função <strong>checkWinCondition</strong></span>`
          : `<span style='color: red; font-size: 1.15em'>[&nbsp<strong> FAIL </strong>&nbsp]</span> <span style='font-size: 1.15em;'>&nbsp -> [Teste #C${zeroPadTestCounter}] Testando a função <strong>checkWinCondition</strong></span>`;
  
      // Capturing and changing win condition button inner HTML
      const winConditionButtonId = `#${key}-check-win-condition`;
      const winConditionButton = document.querySelector(winConditionButtonId);
      winConditionButton.innerHTML = winButtonInnerHTML;
  
      /*
        Win Condition Accordion
      */
      // Mounting win condition accordion inner HTML
      const innerBodyColorStyle = `color:${
        expectedIsWinner === resultedIsWinner ? "green" : "red"
      };`;
      const innerBodyFontSize = "font-size: 1.075em;";
  
      let winConditionInnerBodyHTMLExpected = `<pre style='${innerBodyFontSize} color: green'><strong>Resultado esperado:</strong><br>${expectedIsWinner}`;
      let winConditionInnerBodyHTMLResulted = `<pre style='${innerBodyFontSize} ${innerBodyColorStyle}' ><strong>Resultado obtido:</strong><br>${resultedIsWinner}`;
      let winConditionInnerBodyHTMLInputBoard = `<pre style='${innerBodyFontSize} color: blue'><strong>Board Inicial (guessedBoard):</strong><br>[<br>`;
  
      // Formatting board arrays for better visualization in HTML
      for (let i = 0; i < expectedSeaBoard.length; i++) {
        winConditionInnerBodyHTMLInputBoard += "&nbsp&nbsp";
        winConditionInnerBodyHTMLInputBoard += JSON.stringify(
          expectedSeaBoard[i]
        );
        winConditionInnerBodyHTMLInputBoard += ",";
        winConditionInnerBodyHTMLInputBoard += "<br>";
      }
  
      // Closing pre tag
      winConditionInnerBodyHTMLResulted += "</pre>";
      winConditionInnerBodyHTMLExpected += "</pre>";
      winConditionInnerBodyHTMLInputBoard += "]</pre>";
  
      // Capturing and changing win condition accordion body inner HTML
      const winConditionAccordionItemId = `#ac${testCounter}-check-win-condition`;
  
      const accordionWinConditionItem = document.querySelector(
        winConditionAccordionItemId
      );
      const accordionWinConditionBody =
        accordionWinConditionItem.querySelector(".accordion-body");
      accordionWinConditionBody.innerHTML = `<div style="display: flex;justify-content: space-around;"> ${winConditionInnerBodyHTMLInputBoard} ${winConditionInnerBodyHTMLExpected} ${winConditionInnerBodyHTMLResulted}</div>`;
  
      testCounter++;
    }
  }
  
  class UndefinedValueError extends Error {
    constructor(message, functionName = "") {
      super(message);
      this.name = "UndefinedValueError";
      this.functionName = functionName;
      this.outputMessage = `A função ${this.functionName} está retornando undefined, verifique o retorno de sua função.`;
    }
  }
  
  function hasUndefinedReturnValue(
    allocateShipsTestResults,
    keyToSearch,
    functionName
  ) {
    const values = Object.values(allocateShipsTestResults);
    const hasUndefinedValues = values.some(
      (element) => element[keyToSearch] === undefined
    );
  
    if (hasUndefinedValues) {
      throw new UndefinedValueError("", functionName);
    }
  
    return hasUndefinedValues;
  }
  
  document
    .querySelector("#btn-allocate-ships-tests")
    .addEventListener("click", () => {
      try {
        // Calls allocateShips from script.js
        const allocateShipsTestResults = testAllocateShips();
  
        // Verify if resultedSeaBoard is undefined
        hasUndefinedReturnValue(
          allocateShipsTestResults,
          "resultedSeaBoard",
          "allocateShips"
        );
  
        const testsLength = Object.keys(allocateShipsTestResults).length;
  
        for (let index = 0; index < testsLength; index++) {
          allocateShipsDOMFilling(index, allocateShipsTestResults);
        }
      } catch (error) {
        console.log(error);
        // console.log(error.message);
  
        let outputMessage = "";
  
        switch (error.constructor) {
          case UndefinedValueError:
            outputMessage = error.outputMessage;
            break;
          case ReferenceError:
            outputMessage = `A função allocateShips não foi declarada corretamente, verifique a nomenclatura em seu arquivo script.js. Para mais detalhes, observe o log do console no navegador.`;
            break;
          default:
            outputMessage = error.message;
            break;
        }
  
        const messageBox = document.querySelector("#allocate-ships-message-box");
        messageBox.classList.add("alert", "alert-warning");
        messageBox.innerText = outputMessage;
      }
    });
  
  document
    .querySelector("#btn-check-guesses-tests")
    .addEventListener("click", () => {
      try {
        const checkGuessesTestResults = testCheckGuesses();
        // Verify if resultedGuessedBoard is undefined
        hasUndefinedReturnValue(
          checkGuessesTestResults,
          "resultedGuessedBoard",
          "checkGuesses"
        );
  
        checkGuessesDOMFilling(checkGuessesTestResults);
      } catch (error) {
        console.log(error);
  
        let outputMessage = "";
  
        switch (error.constructor) {
          case UndefinedValueError:
            outputMessage = error.outputMessage;
            break;
          case ReferenceError:
            outputMessage = `A função checkGuesses não foi declarada corretamente, verifique a nomenclatura em seu arquivo script.js. Para mais detalhes, observe o log do console no navegador.`;
            break;
          default:
            outputMessage = error.message;
            break;
        }
  
        const messageBox = document.querySelector("#check-guesses-message-box");
        messageBox.classList.add("alert", "alert-warning");
        messageBox.innerText = outputMessage;
      }
    });
  
  document
    .querySelector("#btn-check-win-condition-tests")
    .addEventListener("click", () => {
      try {
        const checkWinConditionTestResults = testCheckWinCondition();
        // console.log("checkWinConditionTestResults", checkWinConditionTestResults);
  
        // Verify if resultedIsWinner is undefined
        hasUndefinedReturnValue(
          checkWinConditionTestResults,
          "resultedIsWinner",
          "checkWinCondition"
        );
  
        checkWinConditionDOMFilling(checkWinConditionTestResults);
      } catch (error) {
        console.log(error);
  
        let outputMessage = "";
  
        switch (error.constructor) {
          case UndefinedValueError:
            outputMessage = error.outputMessage;
            break;
          case ReferenceError:
            outputMessage = `A função checkWinCondition não foi declarada corretamente, verifique a nomenclatura em seu arquivo script.js. Para mais detalhes, observe o log do console no navegador.`;
            break;
          default:
            outputMessage = error.message;
            break;
        }
  
        const messageBox = document.querySelector(
          "#check-win-condition-message-box"
        );
        messageBox.classList.add("alert", "alert-warning");
        messageBox.innerText = outputMessage;
      }
    });
  