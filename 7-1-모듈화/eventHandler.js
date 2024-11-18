
import {$text} from './getDom.js';

//클릭 함수
function clickHandler(e){
  console.log('click');
  $text.textContent = '클릭';
}

export {clickHandler};