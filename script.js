const btn = document.getElementById('langBtn');

// 1. 기존에 저장된 언어 불러오기
let lang = localStorage.getItem('yuraiki-lang');

// 2. 저장된 언어가 없다면 브라우저 언어 감지 ('ko'로 시작하면 한국어, 아니면 영어)
if (!lang) {
  const userLang = navigator.language || navigator.userLanguage;
  lang = userLang.startsWith('ko') ? 'ko' : 'en';
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  
  // HTML 내 data-ko, data-en 속성 요소 변경
  document.querySelectorAll('[data-ko]').forEach(el => {
    el.innerHTML = el.dataset[l];
  });
  
  // 버튼 텍스트 변경
  if (btn) btn.textContent = l === 'ko' ? 'EN' : '한국어';
  
  // 선택한 언어 저장
  localStorage.setItem('yuraiki-lang', l);
}

if (btn) {
  btn.addEventListener('click', () => setLang(lang === 'ko' ? 'en' : 'ko'));
}

// 초기 언어 설정 적용
setLang(lang);
