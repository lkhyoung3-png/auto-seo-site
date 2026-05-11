const cron = require("node-cron");
const { exec } = require("child_process");

console.log("자동 실행 시작");

// 매일 9시 실행
cron.schedule("0 9 * * *", () => {
  console.log("자동 생성 실행");

  exec("node run.js", (err, stdout) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stdout);
  });
});