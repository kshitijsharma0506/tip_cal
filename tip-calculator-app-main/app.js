let custom=document.querySelector('#my_custom')
let bill_input = document.querySelector('#bill');
let reset_btn = document.querySelector('#reset');
let num_of_people=document.querySelector('#people');



window.onload = function() {
    bill_input.value = '';
    num_of_people.value='';
    custom.value='';
}

reset_btn.disabled = true;
bill_input.addEventListener("change", checkCond);

function checkCond() {
    if (document.querySelector('#bill').value == "") {
        reset_btn.disabled = true;
    } else {
        reset_btn.disabled = false;
    }
}



var tip="0";
function read_val(clicked_id){
    tip=clicked_id;
    //console.log(clicked_id);
}




var tip_per_person=document.querySelector('#tip_per_person');
var total_tip=document.querySelector('#total_tip');

function check_for_error() {

    var error_msg = document.getElementById('error');
    if (document.getElementById("people").value.length==0 ){

        error_msg.textContent = "Can't be Empty";
        error_msg.style.color = "red";
    }
    else if(document.getElementById('people').value=="0"){
        error_msg.textContent = "Can't be Zero";
        error_msg.style.color = "red";
    }

    else{
        error_msg.textContent="";

        if(custom.value!=""){
            tip=custom.value;
        }

        var val_tip=parseInt(bill_input.value)*(parseInt(tip)/100);

        var dis_tip=val_tip/(parseInt(num_of_people.value));

        //console.log(val_tip,dis_tip);


        tip_per_person.innerHTML="$"+dis_tip.toFixed(2);
        total_tip.innerHTML="$"+val_tip.toFixed(2);

    }


}






