const quizBox = document.getElementById("quiz-box");

let currentQuestion = 0;
let totalScore = 0;

function showQuestion(){

  const q = questions[currentQuestion];

  const progress =
    ((currentQuestion) / questions.length) * 100;

  quizBox.innerHTML = `
    <div class="card">

      <div class="progress">
        <div class="progress-bar"
          style="width:${progress}%">
        </div>
      </div>

      <div class="question">
        ${q.question}
      </div>

      ${q.answers.map(answer => `
        <button class="answer-btn"
          onclick="selectAnswer(${answer.score})">
          ${answer.text}
        </button>
      `).join("")}

    </div>
  `;
}

function selectAnswer(score){

  totalScore += score;

  currentQuestion++;

  if(currentQuestion < questions.length){
    showQuestion();
  }
  else{
    showResult();
  }
}

function showResult(){

  let title = "";
  let message = "";
  let colorClass = "";

  if(totalScore <= 2){
    title = "😊 안정 상태";
    message =
      "현재 스트레스 상태는 양호한 편입니다.";
    colorClass = "low";
  }
  else if(totalScore <= 5){
    title =
      "😥 주의 상태";

    message =
      "스트레스 관리가 필요한 상태입니다.";

    colorClass = "mid";
  }
  else{
    title =
      "🚨 위험 상태";

    message =
      "현재 번아웃 위험도가 높습니다.";

    colorClass = "high";
  }

  const percent =
    Math.min(totalScore * 12, 100);

  quizBox.innerHTML = `
    <div class="card result" id="capture">

      <h2>테스트 결과</h2>

      <div class="score-circle ${colorClass}">
        ${percent}%
      </div>

      <div class="result-title">
        ${title}
      </div>

      <div class="result-desc">
        ${message}
      </div>

      <div class="share-box">

        <button class="share-btn"
          onclick="shareResult()">
          링크 복사
        </button>

        <button class="retry-btn"
          onclick="saveImage()">
          결과 이미지 저장
        </button>

        <button class="retry-btn"
          onclick="location.reload()">
          다시 테스트하기
        </button>

      </div>

    </div>
  `;
}

function shareResult(){

  navigator.clipboard.writeText(
    window.location.href
  );

  alert("링크가 복사되었습니다!");
}

function saveImage(){

  const target =
    document.getElementById("capture");

  html2canvas(target).then(canvas => {

    const link =
      document.createElement("a");

    link.download =
      "stress-result.png";

    link.href =
      canvas.toDataURL();

    link.click();
  });
}

showQuestion();