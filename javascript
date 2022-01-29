let inp = document.getElementById('inp')
inp.addEventListener('keydown',function(e){
     if(e.key=='Enter'){
        let p = document.createElement('p')
        let tt = document.createTextNode(inp.value)
        p.appendChild(tt)
        inp.parentElement.appendChild(p)
        inp.value = ''
        
        
     }
})
