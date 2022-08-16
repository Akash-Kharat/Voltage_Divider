function calculateVoltage() {
    let r1range = document.getElementById("ohmranger1").value;
    let r2range = document.getElementById("ohmranger2").value;
    let vs = document.getElementById("vs").value;
    let r1 = document.getElementById("r1").value;
    let r2 = document.getElementById("r2").value;
    let vout = document.getElementById("vo").value;
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
    if ((vs != 0)&& (vout != 0 )&& (r1 != 0) &&( r2!= 0)) {    // if all vales are non-zero return false
        alert("Keep target value field to find it's value");
        console.log(r1);
    } else {
        if ((vs == 0) && (vout == 0)) {
            alert("Give either Input Voltage or Divder voltage")
        }
        else {                          // checks if one the value is given then proceed further
            if (vs == 0) {            // if vs is given 
                if ((r1 == 0) | (r2 == 0)) {
                    if (r1 == 0) {
                        alert("Enter some value for R1 ");
                        r1.style.backgroundColor = 'red';
                    }
                    else {
                        alert("Enter some value for R2 ");
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
            else {       // if vout is given to find vs r1, r2 given
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



