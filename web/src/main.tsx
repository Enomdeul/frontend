import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { updateViewportVariables } from './utils/viewport.ts'

// 초기 뷰포트 변수 설정
updateViewportVariables();

// 리사이즈 이벤트 리스너 등록
window.addEventListener('resize', updateViewportVariables);
window.addEventListener('orientationchange', () => {
  // orientation 변경 시 약간의 지연 후 업데이트 (브라우저가 크기 계산 완료 대기)
  setTimeout(updateViewportVariables, 100);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
