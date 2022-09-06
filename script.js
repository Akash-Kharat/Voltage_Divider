button_disabled();  // bydefault button disabled  
const inputs = document.querySelectorAll('input');
let count = 0;
inputs.forEach(e => {
    // count value is not accessible outside the function  work on it 
    e.addEventListener('change',function myfunc()
    {     
        if (e.value != ""){
            count++;
            console.log(count);
            console.log(e.value);
            console.log("Added ");
        }
        else{
            count--;
            console.log(count);
            console.log(e.value);
            console.log("Removed");
        }
        if(count > 2){
            button_enabled();
        }
        else{
            button_disabled();  
        }
    }) 
});


function button_disabled() {
    document.getElementById("myBtn").disabled = true;
    // console.log(document.getElementById("myBtn").disabled = true); // for debug
    document.getElementById("myBtn").style.backgroundColor = 'Red';     
    // console.log('Changed color to red'); 
}
function button_enabled() {
    document.getElementById("myBtn").disabled = false;
    // console.log(document.getElementById("myBtn").disabled = false);   // for debug
    document.getElementById("myBtn").style.backgroundColor = 'Green'; 
    // console.log('Changed color to green'); 
}
function calculateVoltage() {
    let r1range = document.getElementById("ohmranger1").value;
    let r2range = document.getElementById("ohmranger2").value;
    let vs =parseInt(document.getElementById("vs").valueAsNumber);
    let r1 = document.getElementById("r1").valueAsNumber;
    let r2 = document.getElementById("r2").valueAsNumber;
    let vout = document.getElementById("vo").valueAsNumber;
    if (r1range == "Kohm") {          // calculating resistors values for once
        r1 = r1 * 1000;
    }
    else if (r1range == "Mohm") {
        r1 = r1 * 1000000;
    }
    if (r2range == "Kohm") {
        r2 = r2 * 1000;
    }
    else if (r2range == "Mohm") {
        r2 = r2 * 1000000;
    }
    console.log(vs,r1,r2,vout);
    if ((vs != 0)&& (vout != 0)&& (r1 != 0) &&(r2!= 0)) {    // if all vales are non-zero return false
        vout = 0
        vout = ((vs * r2) / (r1 + r2)).toFixed(2);
        document.getElementById("vo").value = vout;
    } else {
        if ((vs == 0) && (vout == 0)) {
            alert("Give either Input Voltage or Divder voltage")
        }
        else {                          // checks if one the value is given then proceed further
            if (vs == 0) {            // if vout is given 
                if ((r1 == 0) | (r2 == 0)) {
                    if (r1 == 0) {
                        // alert("Enter some value for R1 ");
                        document.getElementById('r1').style.backgroundColor = 'red';
                    }
                    else {
                        // alert("Enter some value for R2 ");
                    }
                }
                else {
                    vs = ((vout * (r1 + r2)) / r2).toFixed(2)
                    document.getElementById("vs").value = vs
                }
            }
            else if ((vs != 0) && (vout != 0)) {  // both values are given but r1 or r2 is missing
                if ((r1 != 0.00) && (r2 == 0)) // r2
                {
                    r2 = ((vout * r1) / (vs - vout)).toFixed(3)
                    document.getElementById("r2").value = r2
                }
                else {
                    r1 = (((vs - vout) * r2) / vout).toFixed(3)
                    document.getElementById("r1").value = r1
                }

            }
            else {       // if vs is given to find vs r1, r2 given
                if ((r1 == 0) | (r2 == 0)) {
                    if (r1 == 0) {
                        alert("Enter some value for R1 ");
                    }
                    else {
                        alert("Enter some value for R2 ");
                    }
                }
                else {
                    vout = ((vs * r2) / (r1 + r2)).toFixed(2)
                    document.getElementById("vo").value = vout
                }
            }
        }
        document.getElementById("img-r1").innerHTML = r1 + " Ohm";
        document.getElementById("img-VCC").innerHTML = vs + " V";
        document.getElementById("img-vout").innerHTML = vout + " V";
        document.getElementById("img-r2").innerHTML = r2 + " Ohm";
    }
    

}



