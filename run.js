const fs = require("fs");
const { topics, actions } = require("./keywords");
const { generateHTML } = require("./generator");

function random(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function createKeyword(){
  return `${random(topics)} ${random(actions)}`;
}

if(!fs.existsSync("./pages")){
  fs.mkdirSync("./pages");
}

let urls = [];

for(let i=0;i<20;i++){
  const keyword = createKeyword();
  const fileName = `page_${i}.html`;

  fs.writeFileSync(`./pages/${fileName}`, generateHTML(keyword));

  urls.push(`<url><loc>https://yourdomain.com/pages/${fileName}</loc></url>`);
}

fs.writeFileSync("sitemap.xml", `<urlset>${urls.join("\n")}</urlset>`);

console.log("완료: 페이지 생성됨");