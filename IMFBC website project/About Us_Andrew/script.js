document.addEventListener('DOMContentLoaded', () => {
  // ================= Header2 현재 페이지 활성화 =================
  const header2Links = document.querySelectorAll('.header2 a');
  let currentPath = window.location.pathname;

  // 현재 경로에서 파일명만 추출 (폴더 안에 있어도 "location.html"만 뽑음)
  currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  header2Links.forEach(link => {
    link.classList.remove('active');

    // 링크의 href에서도 파일명만 추출
    let linkPath = link.getAttribute('href');
    linkPath = linkPath.substring(linkPath.lastIndexOf('/') + 1);

    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  // ================= Header1 드롭다운 애니메이션 유지 =================
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const dropdown = item.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'block';
      }
    });
    item.addEventListener('mouseleave', () => {
      const dropdown = item.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    });
  });
});