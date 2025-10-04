document.addEventListener('keydown',(e)=>{
  switch(e.key){
    case 'w': console.log('Move forward'); break;
    case 'a': console.log('Move left'); break;
    case 's': console.log('Move back'); break;
    case 'd': console.log('Move right'); break;
    case 'ArrowUp': console.log('Aim up'); break;
    case 'ArrowDown': console.log('Aim down'); break;
    case 'ArrowLeft': console.log('Aim left'); break;
    case 'ArrowRight': console.log('Aim right'); break;
    case ' ': console.log('Jump'); break;
    case 'Shift': console.log('Sprint'); break;
    case 'Control': console.log('Crouch'); break;
    case 'b': console.log('Defend'); break;
    case 't': console.log('Fire'); break;
    case 'e': console.log('Interact'); break;
  }
});
