
function calculateVoltage(){
    const sourceV=document.getElementById("vs")
    const res1=document.getElementById("r1")
    const res2=document.getElementById("r2")
    const r1range=document.getElementById("ohmranger1")
    const r2range=document.getElementById("ohmranger2")
    let vs=Number(sourceV.value) 
    let r1=Number(res1.value)
    let r2=Number(res2.value)
    if(r1range.value=="Kohm"){
        r1=r1*1000;
    }
    else if(r1range=="Mohm"){
        r1=r1*1000*1000;
    }
    if(r2range.value=="Kohm"){
        r2=r2*1000;
    }
    else if(r2range=="Mohm"){
        r2=r2*1000*1000;
    }
    let vo=(vs*r2)/(r1+r2)
    let outV=document.getElementById("vo").value=vo.toFixed(2)
}