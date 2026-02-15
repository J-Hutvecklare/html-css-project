// Simple JavaScript Slideshow Implementation
// Purpose: Fulfill the project requirement “Image Gallery / Slideshow”(Focus on: DOM manipulation, event handling, dynamic class modification) Core techniques to cover: querySelector、classList、createElement、event delegation（dot navigation clicks）

document.addEventListener('DOMContentLoaded', () => {
  // 获取元素（DOM 操作：querySelectorAll）
  const container = document.querySelector('.gallery-container');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.nav-dot');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  // Robustness check (handle empty slide list gracefully) 健壮性检查（空列表处理）
  if (!container || slides.length === 0 || dots.length === 0) {
    console.error('Slideshow elements not found'); // 调试 + 项目要求：基本 robust
    return;
  }

  if (!prevBtn || !nextBtn) {
    console.warn('Previous/Next buttons not found, functionality degraded'); // 调试
  }

  const totalSlides = slides.length;
  let currentIndex = 0; // 数据：当前索引（逻辑变量）

  // 函数：显示指定 slide（render 函数：更新 UI）
  // Core function: showSlide(index)
  function showSlide(index) {
    // 边界处理（循环：到头回首）
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    // 平滑滚动（DOM 操作：scrollTo） Smooth scrolling behavior
    container.scrollTo({
      left: index * container.offsetWidth, // 计算位置
      behavior: 'smooth' // 项目要求：用户体验
    });

    // 更新 dot 高亮（循环 + classList）
    // Update active dot highlight
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index); // 修改类
    });

    currentIndex = index; // 更新状态
    console.log('Current slide:', currentIndex); // 调试
  }

  // 事件：前后按钮点击（events: click）
  // Event handling: Previous / Next button clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }

  // 事件：点击 dot 切换（events: click + 简单事件委托）
  // Event handling: Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault(); // 阻止默认锚点行为（项目要求）
      showSlide(index);
    });
  });

  // 键盘支持（events: keydown，accessibility） 
  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      showSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showSlide(currentIndex + 1);
    }
  });

  // 初始化：显示第一个 slide  
  // Initialization
  showSlide(0);
});