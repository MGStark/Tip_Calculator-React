import React from 'react';


import './index.css';

function Calculation() {

    var amount = document.getElementById("amt").value;
    var service = document.getElementById("service").value;
    var People = document.getElementById("people").value;

    //validate input
    if (amount === "") {
        alert("Please enter values");
        return;
    }
    if (service == 0) {
        alert("Please enter values");
        return;
    }

    //Calculation
    var total = (amount * service) / People;


    //Display
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}


function Title() {
    return (
        <div className="title">  TIP CALCULATOR</div>
    )
}

export function Body() {
    return (
        <div className='bod'>
            <p> Enter Your Bill Amount</p>
            <p><span>Rs</span>  <input id="amt" type="text" placeholder="Bill Amount" /></p>
            <p>How was your service?</p>
            <select id="service">
                <option disabled selected value="0">-- Choose an Option --</option>
                <option value="0.3">30% - Outstanding</option>
                <option value="0.2">20% - Good</option>
                <option value="0.15">15% - It was OK</option>
                <option value="0.1">10% - Bad</option>
                <option value="0.05">5% - Terrible</option>
            </select>
            <p>How many people are sharing the bill?</p>
            <input id="people" type="text" placeholder="Number of People" />
            <div className='button'>
                <button type="button" id="calculate" onClick={Calculation}>Calculate</button>
            </div>
            <div className='tipamt' id='totalTip'>
                <div>Tip Amount</div>
                <span>Rs.</span><span id="tip">0</span>
                <div>each</div>
            </div>



        </div>



    );




}

export default Title;