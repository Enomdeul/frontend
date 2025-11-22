export function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/**
 * 화면 크기를 CSS 변수로 업데이트
 * 반응형 스케일링을 위한 현재 화면 크기 설정
 */
export function setScreenDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    document.documentElement.style.setProperty('--current-width', `${width}`);
    document.documentElement.style.setProperty('--current-height', `${height}`);
}

/**
 * 뷰포트 관련 모든 CSS 변수 업데이트
 * resize 이벤트와 초기 로드 시 호출
 */
export function updateViewportVariables() {
    setScreenHeight();
    setScreenDimensions();
}