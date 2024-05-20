function showModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
  
    modal.style.display = 'block';
    overlay.style.display = 'block';
  
    overlay.addEventListener('click', hideModal);
  } 
  
  function hideModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
  
    modal.style.display = 'none';
    overlay.style.display = 'none';
  } 
  
  window.onload = function () {
    showModal();
  };