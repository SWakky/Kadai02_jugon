// ここからコードを書きます🤗

// 呪言スタートボタン
$("#start-btn").on("click", function () {
  const random = Math.floor(Math.random() * 2);
  console.log(random, "ランダム数字");

  if (random === 0) {
    console.log("叫ぶ");
    $("div").children("img").attr("src", "image/hatudou.jpg");
  } else if (random === 1) {
    console.log("ジーッ");
    $("div").children("img").attr("src", "image/hatudou2.jpg");
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

const jugon = document.querySelector('#text');
('#text').document('change', function(){
  alert("入った")
});

$("#result-div").onresult = () => {
  console.log("aaa");
};



// if(document)($("#result-div")).match("鮭"){
//   console.log("aaa");
//   $("div").children("img").attr("src", "image/batu.jpg");
//   console.log("bbb")
// }


// 背景画像変更
$("#result-div").on("click", function () {
    const random = Math.floor(Math.random() * 5);
    console.log(random, "ランダム数字");

    if (random === 0) {
      console.log("空");
      $("h2").text("たかくて　あおい　そら！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/aozora.jpg");
    } else if (random === 1) {
      console.log("機械工場");
      $("h2").text("ここは　マシンが　いっぱいの　こうじょうだ！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/kikai.jpg");
    } else if (random === 2) {
      console.log("宇宙");
      $("h2").text("ええっ！　うちゅうまで　きちゃった！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/space.jpg");
    } else if (random === 3) {
      console.log("砂漠");
      $("h2").text("じりじり　あつい！　ここは　さばくだ！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/sabaku.png");
    } else if (random === 4) {
      console.log("岩山");
      $("h2").text("ごつごつ。いわが　いっぱいの　やまだね！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/rock.jpg");
    }
  });

// 最後にメッセージ
  $(".btny").on("click", function(){
    console.log("aaa");
    $("h3").text("とっても　じょうずに　できたね！");
    console.log("bbb")
  });
  
  $(".btnn").on("click", function(){
    console.log("aaa");
    $("h3").text("とっても　すてきだよ！　じしんを　もってね！");
    console.log("bbb")
  });


// $("xxxx") = 要素 class名 id名