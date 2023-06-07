function toggleDarkMode() {
  const switchToggle = document.getElementById("switch-toggle");
  const darkCircle = document.querySelector('.half-circle');
  const container = document.querySelector('.iphone-container');
  const paragraphs = document.querySelectorAll('p');
  const headers = document.querySelectorAll('h1');
  const moon = document.querySelector('.circle-orange');
  const svgs = document.querySelectorAll('svg path');
  const dotFirst = document.querySelectorAll('.dot');
  const dotSecond = document.querySelectorAll('.dot-2');

 




  document.body.classList.toggle('dark-mode', switchToggle.checked);
  darkCircle.classList.toggle('half-circle-dark', switchToggle.checked);
  container.classList.toggle('iphone-black', switchToggle.checked);
  moon.classList.toggle('circle-moon', switchToggle.checked);


  paragraphs.forEach(paragraph => {
    paragraph.classList.toggle('white-p');
  });

  headers.forEach(header => {
    header.classList.toggle('white-p');
  });
  

  svgs.forEach(svg => {
    svg.classList.toggle('svg-white');
  });

  dotFirst.forEach(dot => {
    dot.classList.toggle('dot-white-switch')
  });

  dotSecond.forEach(dot => {
    dot.classList.toggle('dot2-white-switch')
  });
}
