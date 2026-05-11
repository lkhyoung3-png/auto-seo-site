function random(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomScore(){
  return Math.floor(Math.random() * 100);
}

function generateHTML(keyword){

  const score = randomScore();

  return `
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>${keyword}</title>
<meta name="description" content="${keyword}">
</head>

<body style="text-align:center;font-family:Arial;padding:40px">

<h1>${keyword}</h1>

<h2>결과</h2>

<p>점수: ${score}%</p>

<p>${score > 70 ? "위험 상태" : "안정 상태"}</p>

<div style="margin-top:40px;background:#eee;padding:20px">
광고 영역
</div>

</body>
</html>
`;
}

module.exports = { generateHTML };