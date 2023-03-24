/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

function dyslexiaMode(){
  document.querySelector('body').className = 'dyslexia-toggle';
  document.querySelector('body').style.fontFamily = 'Times New Roman';
  document.querySelector('body').style.fontSize = "30px";
  document.querySelector('body').style.textAlign = 'center';
}
function regularMode(){
  document.querySelector('body').className = 'regular-mode';
  document.querySelector('body').style.fontFamily = 'ariel';
  document.querySelector('body').style.fontSize = "20px";
  document.querySelector('body').style.textAlign = 'left';


}