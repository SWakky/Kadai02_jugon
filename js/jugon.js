// ここからコードを書きます🤗

// 呪言スタートボタン
$("#start-btn").on("click", function () {
  const random = Math.floor(Math.random() * 3);
  console.log(random, "ランダム数字");

  if (random === 0) {
    console.log("叫ぶ");
    $("div").children("img").attr("src", "image/hatudou.jpg");
  } else if (random === 1) {
    console.log("ジーッ");
    $("div").children("img").attr("src", "image/hatudou2.jpg");
  } else if (random === 2) {
  console.log("シャウト");
  $("div").children("img").attr("src", "image/hatudou3.jpg");
}
});

// 音声認識パート

const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resultDiv = document.querySelector('#result-div');

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
let recognition = new SpeechRecognition();

recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = true;

let finalTranscript = ''; // 確定した(黒の)認識結果

recognition.onresult = (event) => {
    let interimTranscript = ''; // 暫定(灰色)の認識結果
    for (let i = event.resultIndex; i < event.results.length; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
        finalTranscript += transcript;
    } else {
        interimTranscript = transcript;
    }
    }
    resultDiv.innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</i>' ;

  }

startBtn.onclick = () => {
    recognition.start();
}
stopBtn.onclick = () => {
    recognition.stop();
} 

$("#stop-btn").on("click", function(){
  console.log("ここから言葉判定")
  const jugon = finalTranscript
  console.log("言葉取れた")
  if (jugon === "おかか") {
    $("img").attr("src", "image/01okaka.jpg")
  } else if (jugon === "鮭" ){
    $("img").attr("src", "image/02shake.jpeg")
  } else if (jugon === "いくら" ){
    $("img").attr("src", "image/03ikura.jpg")
  } else if (jugon === "筋子" ){
    $("img").attr("src", "image/04sujiko.jpg")
  } else if (jugon === "明太子" ){
    $("img").attr("src", "image/05mentaiko.jpg")
  } else if (jugon === "昆布" ){
    $("img").attr("src", "image/06konbu.jpg")
  } else if (jugon === "高菜" ){
    $("img").attr("src", "image/07takana.png")
  } else if (jugon === "ツナマヨ" ){
    $("img").attr("src", "image/08tunamayo.jpg")
  } else if (jugon === "ぶっ飛べ" ){
    $("img").attr("src", "image/buttobe.jpg")
  } else if (jugon === "デプロイ" ){
    $("img").attr("src", "image/deploy.jpg")
  } else if (jugon === "爆ぜろ" ){
    $("img").attr("src", "image/hazero.jpg")
  } else if (jugon === "眠れ" ){
    $("img").attr("src", "image/nemure.jpg")
  } else if (jugon === "逃げろ" ){
    $("img").attr("src", "image/nigero.jpg")
  } else if (jugon === "落ちろ" ){
    $("img").attr("src", "image/ochiro.jpg")
  } else if (jugon === "止まれ" ){
    $("img").attr("src", "image/tomare.jpg")
  } else if (jugon === "潰れろ" ){
    $("img").attr("src", "image/tuburero.jpg")
  } else if (jugon === "動くな" ){
    $("img").attr("src", "image/ugokuna.png")
  } else if (jugon === "貴重なご意見" ){
    $("img").attr("src", "image/goiken.jpg")
  } else {
    $("img").attr("src", "image/genkai.png")
  }
});



// $("xxxx") = 要素 class名 id名