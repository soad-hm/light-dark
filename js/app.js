const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle('dark')
  if(document.body.className.includes('dark')){
  localStorage.setItem('theme','dark')
  }
  else{
    localStorage.setItem('theme','light')
  }
 
}
) 
  window.onload=function(){
    let archive=localStorage.getItem('theme')
  if(archive === 'dark'){
  document.body.classList.add('dark')
  }
}

//ایجاد ساخت classlist
//localstorage ===>always