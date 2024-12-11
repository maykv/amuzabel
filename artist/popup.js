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
