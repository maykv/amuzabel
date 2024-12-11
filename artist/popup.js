function tobedetermined() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  }
  
  // 팝업 닫기
  function closeTBDpopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // 팝업 외부 클릭 이벤트
  document.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-container');
  
    if (
      popup.style.display === 'flex' &&
      !popupContent.contains(event.target) &&
      !event.target.closest('a')
    ) {
      closeTBDpopup();
    }
  });

  // 팝업 열기
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
  }
  
  // 팝업 닫기
  function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
  }
  
  // 마우스 외부 클릭 감지
  document.getElementById('popupOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
      closePopup();
    }
  });
  