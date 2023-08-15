const gameCombinations = [
    // Pedra
    {
      jogador1: "Pedra",
      jogador2: "Pedra",
      expectedResult: "Empate!",
    },
    {
      jogador1: "Pedra",
      jogador2: "Tesoura",
      expectedResult: "Jogador 1 venceu!",
    },
    {
      jogador1: "Pedra",
      jogador2: "Papel",
      expectedResult: "Jogador 2 venceu!",
    },
    // Papel
    {
      jogador1: "Papel",
      jogador2: "Papel",
      expectedResult: "Empate!",
    },
    {
      jogador1: "Papel",
      jogador2: "Pedra",
      expectedResult: "Jogador 1 venceu!",
    },
    {
      jogador1: "Papel",
      jogador2: "Tesoura",
      expectedResult: "Jogador 2 venceu!",
    },
    // Tesoura
    {
      jogador1: "Tesoura",
      jogador2: "Tesoura",
      expectedResult: "Empate!",
    },
    {
      jogador1: "Tesoura",
      jogador2: "Papel",
      expectedResult: "Jogador 1 venceu!",
    },
    {
      jogador1: "Tesoura",
      jogador2: "Pedra",
      expectedResult: "Jogador 2 venceu!",
    },
  ];
  
  function domFilling(index, result) {
    // Select accordion item
    const accordionItem = document.querySelector(`#ac${index + 1}`);
  
    if (index + 1 == 1) {
      const acButton = accordionItem.getElementsByTagName("button")[0];
      acButton.classList.add("collapsed");
  
      const acDiv = accordionItem.getElementsByTagName("div")[0];
      acDiv.classList.remove("show");
    }
  
    // Test main color
    const colorStyle = `color:${result.pass ? "green" : "red"};`;
  
    // Select accordion button
    const accordionButtonId = `#teste${index + 1}`;
    const button = document.querySelector(accordionButtonId);
    // const matchPlayers = `<span style=${colorStyle}>${result.jogador1} x ${result.jogador2}</span>`;
    const matchPlayers = `${result.jogador1} x ${result.jogador2}`;
    const accordionButtonFontSize = "font-size: 1.15em;";
    const accordionButtonStyle = colorStyle + accordionButtonFontSize;
  
    const buttonInnerHTML = result.pass
      ? `<span style='${accordionButtonStyle}'><strong>[&nbsp ✅ &nbsp]</strong>&nbsp [ Teste ${
          index + 1
        } ] ${matchPlayers}</span>`
      : `<span style='${accordionButtonStyle}'><strong>[&nbsp ❌ &nbsp]</strong>&nbsp [ Teste ${
          index + 1
        } ] ${matchPlayers} </span>`;
    button.innerHTML = buttonInnerHTML;
  
    const innerBodyFontSize = "font-size: 1.075em;";
    const innerBodyStyle = innerBodyFontSize + colorStyle;
    let innerBodyHTMLExpected = `<pre style='${innerBodyStyle} color: green'>Esperado: ${result.expected}</pre>`;
    let innerBodyHTMLResulted = `<pre style='${innerBodyStyle}'>Obtido: ${result.result}</pre>`;
  
    // Select accordion body
    const accordionBody = accordionItem.querySelector(".accordion-body");
    accordionBody.innerHTML = `<div style="display: flex;justify-content: space-around;">${innerBodyHTMLResulted} ${innerBodyHTMLExpected} </div>`;
  }
  
  function testPlayRockPaperScissor() {
    const playRockPaperScissorTestResults = [];
  
    for (let i = 0; i < gameCombinations.length; i++) {
      jogador1 = gameCombinations[i].jogador1;
      jogador2 = gameCombinations[i].jogador2;
      expected = gameCombinations[i].expectedResult;
  
      const result = playRockPaperScissor(jogador1, jogador2);
      playRockPaperScissorTestResults.push({
        jogador1,
        jogador2,
        expected,
        result,
        pass: result === expected,
      });
    }
  
    return playRockPaperScissorTestResults;
  }
  
  document.querySelector("#btn-test-1").addEventListener("click", () => {
    const messageBox = document.querySelector("#message-box-test");
    let outputMessage = "";
    try {
      const res = testPlayRockPaperScissor();
  
      for (let i = 0; i < res.length; i++) {
        domFilling(i, res[i]);
      }
  
      const everyTestPassed = res.every((element) => element["pass"] === true);
      outputMessage = everyTestPassed
        ? "Todos os testes passaram! Parabéns 🚀."
        : "Alguns testes não passaram. Clique sobre o teste para observar o resultado obtido versus o resultado esperado.";
  
      alertClass = everyTestPassed ? "alert-success" : "alert-danger";
      messageBox.classList.add("alert", alertClass);
      messageBox.innerText = outputMessage;
    } catch (error) {
      switch (error.constructor) {
        case ReferenceError:
          console.log(error);
          if (error.message.includes("playRockPaperScissor")) {
            outputMessage = `A função playRockPaperScissor não foi declarada corretamente, verifique a nomenclatura em seu arquivo script.js. A função deve ter exatamente o nome solicitado.`;
          } else {
            outputMessage = error.message;
          }
          break;
        default:
          outputMessage = error.message;
          break;
      }
  
      messageBox.classList.add("alert", "alert-warning");
      messageBox.innerText = outputMessage;
  
      return;
    }
  });
  