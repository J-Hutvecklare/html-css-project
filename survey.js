// Form Validation + LocalStorage Implementation
// Fulfill the project requirements for “Form + Validation” (with UI feedback) and “LocalStorage” (data persistence)

document.addEventListener('DOMContentLoaded', () => {
  // 获取表单元素（DOM 操作：querySelector）
  const form = document.querySelector('.survey-form');
  if (!form) {
    console.error('Form not found'); // robust
    return;
  }

  //  *** LocalStorage ***
  // 加载草稿数据
  function loadDraft() {
    const draft = localStorage.getItem('evSurveyDraft');
    if (!draft) {
      console.log('No draft found'); // 调试
      return;
    }

    const data = JSON.parse(draft); // 数据解析（对象）
    // 恢复文本/数字输入（DOM修改：value）
    const nameInput = form.querySelector('input[name="name"]');
    const ageInput = form.querySelector('input[name="age"]');
    const emailInput = form.querySelector('input[name="email"]');

    if (nameInput) {
      nameInput.value = data.name || '';
    }

    if (ageInput) {
      ageInput.value = data.age || '';
    }

    if (emailInput) {
      emailInput.value = data.email || '';
    }
      
      // 恢复 radio（DOM 操作：checked 属性）
    const questions = ['gender', 'q1', 'q2', 'q3', 'q4'];
    for (let i = 0; i < questions.length; i++) {
      const questionName = questions[i];
        
      if (data[questionName]) {
        const selector = 'input[name="' + questionName + '"][value="' + data[questionName] + '"]';
        const radio = form.querySelector(selector);
          
        if (radio) {
          radio.checked = true;
        }
      }
    }
    
      console.log('Draft loaded successfully'); // 调试
  }

  // 函数：保存草稿数据（数据存储）
  function saveDraft() {
    const data = { // 数据对象（逻辑：收集表单值）
      name: form.name.value.trim(),
      age: form.age.value,
      email: form.email.value.trim(),
      gender: '', q1: '', q2: '', q3: '', q4: ''
    };

    const genderChecked = form.querySelector('input[name="gender"]:checked');
    if (genderChecked) data.gender = genderChecked.value;
    
    const q1Checked = form.querySelector('input[name="q1"]:checked');
    if (q1Checked) {
      data.q1 = q1Checked.value;
    } else {
      data.q1 = '';
    }
    
    const q2Checked = form.querySelector('input[name="q2"]:checked');
    if (q2Checked) {
      data.q2 = q2Checked.value;
    } else {
      data.q2 = '';
    }
    
    const q3Checked = form.querySelector('input[name="q3"]:checked');
    if (q3Checked) {
      data.q3 = q3Checked.value;
    } else {
      data.q3 = '';
    }
    
    const q4Checked = form.querySelector('input[name="q4"]:checked');
    if (q4Checked) {
      data.q4 = q4Checked.value;
    } else {
      data.q4 = '';
    }
    
    localStorage.setItem('evSurveyDraft', JSON.stringify(data)); // save draft
    console.log('Draft saved:', data); // 调试
  }

  // 事件：实时保存草稿（events: input/change）
  form.addEventListener('input', (e) => {
    if (e.target.type !== 'radio') {
      saveDraft(); 
    }// 只针对文本输入
  });

  const radioButtons = form.querySelectorAll('input[type = "radio"]');
  
  for (let i = 0; i < radioButtons.length; i++) {
    let currentRadio = radioButtons[i];
    currentRadio.addEventListener('change', function() {
      saveDraft();
    });
  }
  
  // *** Form Validation ***
  // 函数：显示错误（DOM 创建/修改 + classList）
 
  function showError(input, message) {
    let errorSpan = input.parentElement.querySelector('.error-message');
    if (!errorSpan) { // 动态创建（createElement/append）
      errorSpan = document.createElement('span');
      errorSpan.className = 'error-message';
      input.parentElement.appendChild(errorSpan); // 添加到 input-group
    }
    errorSpan.textContent = message; // 修改内容
    errorSpan.classList.add('show'); // classList 添加动画类
    input.focus(); // 焦点跳转（accessibility）
  }

  // 函数：清空所有错误（DOM 修改 + classList）
  function clearErrors() {
    const errorMessages = form.querySelectorAll('.error-message');
    for (var i = 0; i < errorMessages.length; i++) {
      const currentSpan = errorMessages[i];
      currentSpan.textContent = '';
      currentSpan.classList.remove('show');
    }
  }

  // 事件：提交处理（events: submit + preventDefault）
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止默认提交（项目要求）

    clearErrors(); // 先清旧错误
    let isValid = true;
    let firstErrorInput = null; // 记录第一个错误，用于焦点

    // 验证姓名（非空 + 逻辑）
    if (!form.name.value.trim()) {
      showError(form.name, 'Please enter your name');
      isValid = false;
      if (!firstErrorInput) firstErrorInput = form.name;
    }

    // 验证年龄（范围检查 + 类型转换）
    const ageValue = parseInt(form.age.value, 10);
    if (isNaN(ageValue) || ageValue < 16 || ageValue > 100) {
      showError(form.age, 'Age must be between 16 and 100');
      isValid = false;
      if (!firstErrorInput) firstErrorInput = form.age;
    }

    // 验证 email（简单正则 + 格式）
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.value.trim() || !emailRegex.test(form.email.value)) {
      showError(form.email, 'Please enter a valid email address');
      isValid = false;
      if (!firstErrorInput) firstErrorInput = form.email;
    }

    // 验证所有 radio 组（循环 + querySelector，事件委托类似但简单版）
    const radioGroups = ['gender', 'q1', 'q2', 'q3', 'q4'];
    // 检查所有单选题组（gender、q1、q2、q3、q4）有没有被选
    for (let i = 0; i < radioGroups.length; i++) {
      const groupName = radioGroups[i];
      const selected = form.querySelector('input[name="' + groupName + '"]:checked');

    if (!selected) {
      const firstRadio = form.querySelector('input[name="' + groupName + '"]');
      showError(firstRadio.closest('.radio-group'), 'Please select an option');
    
      isValid = false;
      if (!firstErrorInput) {
      firstErrorInput = firstRadio;
      }
    }
  }
    
  if (isValid) {
      // 成功状态（DOM 创建 + classList + render 反馈）
      const successDiv = document.createElement('div');
      successDiv.className = 'success-message';
      successDiv.textContent = 'Thank you for participating! The survey has been submitted successfully.';
      form.appendChild(successDiv); // 添加到 form 末尾
      successDiv.classList.add('show'); // 添加动画类

      // 定时移除（setTimeout）
      setTimeout(() => {
        successDiv.remove(); // DOM 移除
      }, 5000);

      // 清草稿 + 重置表单
      localStorage.removeItem('evSurveyDraft');
      form.reset(); // 清空表单

      console.log('Submission successful'); // 调试
    } else {
      // 焦点跳到第一个错误（accessibility）
      if (firstErrorInput) firstErrorInput.focus();
      console.log('Validation failed'); // 调试
    }
  });

  // 初始化：加载草稿
  loadDraft();
});