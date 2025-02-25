// 等待 DOM 加載完成
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const headerActions = document.querySelector('.header-actions');
    
    // 創建移動端導航容器
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.appendChild(navMenu.cloneNode(true));
    mobileNav.appendChild(headerActions.cloneNode(true));
    document.body.appendChild(mobileNav);

    // 切換選單顯示/隱藏
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // 點擊其他地方關閉選單
    document.addEventListener('click', function(e) {
        if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });


});





