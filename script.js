
function calculateVoltage(){
    const sourceV=document.getElementById("vs")
    const res1=document.getElementById("r1")
    const res2=document.getElementById("r2")
    let vs=Number(sourceV.value) 
    let r1=Number(res1.value)
    let r2=Number(res2.value)

    let vo=(vs*r2)/(r1+r2)
    let outV=document.getElementById("vo").value=vo.toFixed(2)
}