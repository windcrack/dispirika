function selectForm(elem, block, seconBlock){
    if(body.classList.contains(elem) || body.classList.contains(block) || body.classList.contains(seconBlock)){
      elem.addEventListener('click', ()=>{
        if(block.classList.contains('hide')){
          block.classList.remove('hide')
        }
        if(!seconBlock.classList.contains('hide')){
          seconBlock.classList.add('hide')
        }
      })
    }
}

export default selectForm;