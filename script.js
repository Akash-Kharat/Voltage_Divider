
function calculateVoltage() {
    let r1range = document.getElementById("ohmranger1").value
    let r2range = document.getElementById("ohmranger2").value
    let vs = document.getElementById("vs").value
    let r1 = document.getElementById("r1").value
    let r2 = document.getElementById("r2").value
    let vout = document.getElementById("vo").value
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


    
    if ((vs == 0) && (vout == 0)) {
        alert("Give either Input Voltage or Divder voltage")
    }
    else {                          // checks if one the value is given
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
                let vcc = (vout * (r1 + r2)) / r2
                document.getElementById("vs").value = vcc.toFixed(2)
            }
        }
        else {       // if vout is given to find vs
            if ((r1 == 0) | (r2 == 0)) {
                if (r1 == 0) {
                    alert("Enter some value for R1 ");
                    // r1.style.backgroundColor = 'red';
                }
                else {
                    alert("Enter some value for R2 ");
                }
            }
            else {
                let vo = (vs * r2) / (r1 + r2)
                document.getElementById("vo").value = vo.toFixed(2)
            }
        }
    }

}



