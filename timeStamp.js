function timeStamp() {
  let time = new Date();
  console.log(`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
}
setInterval(timeStamp, 1000);
