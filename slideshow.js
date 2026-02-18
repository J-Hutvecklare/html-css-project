// JS Slideshow Implementation

document.addEventListener('DOMContentLoaded', () => {
  // 获取元素（DOM 操作：querySelectorAll）
  const container = document.querySelector('.gallery-container');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.nav-dot');

  // Robustness check 健壮性检查（空列表处理）
  if (!container || slides.length === 0 || dots.length === 0) {
    console.error('Slideshow elements not found'); 
    return;
  }


  const totalSlides = slides.length;
  let currentIndex = 0; // 当前显示的图片的索引号

  // 函数：显示指定 slide（render 函数：更新 UI）
  // Core function: showSlide(index)
  function showSlide(index) {
    // 边界处理（循环：到头回首）
    if (index >= totalSlides) {
      index = 0;
    }
    if (index < 0) {
      index = totalSlides -1;
    }

    // 平滑滚动（DOM 操作：scrollTo） Smooth scrolling behavior
    container.scrollTo({
      left: index * container.offsetWidth, // 计算位置
      behavior: 'smooth' // 项目要求：用户体验
    });

    // 更新 dot 高亮（循环 + classList）
    // Update active dot highlight
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];

      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    }

    currentIndex = index; // 更新状态
    console.log('Current slide:', currentIndex); // 调试
  }


  // 事件：点击 dot 切换（events: click + 简单事件委托）
  // Event handling: Dot navigation
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];

    dot.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(i);
    });
  }

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