
var flip_card = document.getElementsByClassName('flip-card');
var clear = document.getElementsByClassName('clear')[0];

var backFaceNum = 0;
var collect_count = 0;
// var collect = [0, 0, 0, 0,
//                0, 0, 0, 0, 
//                0, 0, 0, 0,
//                0, 0, 0, 0];
// console.log(collect);
var prev_content;
function flip_back(card){
  card.parentNode.style.cssText='transform: rotateY(180deg) translateX(100%)';
}

function flip_front(card){
  card.parentNode.style.cssText= '';
}
function getTextContent(card){
  return card.childNodes[0].textContent;
}

for (var i=0; i < flip_card.length; i++) {
  var card       = flip_card[i];
  var card_front = card.children[0];
  var card_back  = card.children[card.children.length - 1];
  console.log(card_back.childNodes[0].textContent);
  card_front.onclick = function() {
    if(backFaceNum == 0){
      flip_back(this);
      backFaceNum += 1;
      // console.log(backFaceNum);
      prev_content = getTextContent(this.nextElementSibling);
      // console.log(prev_content);
    }
    else if(backFaceNum == 1){
      flip_back(this);
      var cur_content = getTextContent(this.nextElementSibling);
      if(prev_content == cur_content){
        // console.log('맞음');
        collect_count++;
        if(collect_count == 8){
          clear.style.cssText = 'font-size: 15rem;';
        }
      }
      else{
        // console.log('틀림');
        collect_count = 0;
        for(var i = 0; i < flip_card.length; i++){
          var turn_front = flip_card[i];
          if(turn_front.style.cssText != undefined){
            turn_front.style.cssText = '';
          }
        }
      }
      backFaceNum = 0;
    }
  };
  card_back.onclick = function() {
    this.parentNode.style.cssText = '';
    if(backFaceNum < 0)
      backFaceNum = 0;
    else
      backFaceNum -= 1;
    // console.log(backFaceNum);
  };
}
