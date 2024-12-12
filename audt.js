let windowOpened = false;

// CD 회전 구현
document.addEventListener('DOMContentLoaded', function () {
  const cdImg = document.querySelector('.cd img');
  let angleX = 0; 
  let angleY = 0;

  // 지속적으로 회전시키기 위해 setInterval 사용
  setInterval(() => {
    angleY += 1; 
    cdImg.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
  }, 30);
});

// 창 열기
function openWindow() {
  if (windowOpened) return;
  windowOpened = true;

  const windowEl = document.querySelector('.y2k-window');
  windowEl.style.display = 'block';
  windowEl.style.animation = 'slideIn 0.4s ease-in-out';
}

// 창 닫기
function closeWindow() {
  const windowEl = document.querySelector('.y2k-window');
  windowEl.style.animation = 'none';
  windowEl.style.display = 'none';
  windowOpened = false;
}

// 키 이벤트 감지
let inputSequence = [];
const signals = {
  reveluv: "#fea38b",
  smdreas: "#808080",
  mailyday: "#ffffff",
  leehi: "#d9c3cb",
  may102010: "#b7ff00"
};

document.addEventListener("keydown", (event) => {
  // 기록된 입력값 배열에 새 입력값 추가
  inputSequence.push(event.key.toLowerCase());

  // 입력 배열 길이를 제한 (최대 길이를 넘어가면 초기화)
  if (inputSequence.length > 30) {
    inputSequence.shift();
  }

  // 유효한 코드 확인
  for (let key in signals) {
    if (inputSequence.join('').includes(key)) {
      triggerAnimation(signals[key]);
      setTimeout(() => window.location.href = `easteregg.html?signal=${key}`, 1000);
    }
  }
});

// 깜빡이는 애니메이션 실행
function triggerAnimation(color) {
  const body = document.querySelector('body');
  body.style.animation = `blink 1s ease-in-out 3`;
  body.style.animationDelay = `0s`;
  body.style.backgroundColor = color;

  // 제거 후 기본으로 돌아감
  setTimeout(() => {
    body.style.animation = '';
  }, 1000);
}
