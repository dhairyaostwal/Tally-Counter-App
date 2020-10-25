import React from 'react';

function incTallyCount(){
    var tallyCountValue = document.getElementById("count").innerHTML;
    tallyCountValue ++;
    document.getElementById("count").innerHTML = tallyCountValue;
}

function resetCount(){
    document.getElementById("count").innerHTML = 0;
}

function Display() {

    return (
        <div className="card card-bg">
            <div className="card-body text-center">
                <h1 id="count" className="display-1 card-title">0</h1>
                {
                    <div class="row">

    <div class="col-6 text-right"><button onClick={incTallyCount} className="btn btn-lg btn-primary">Click Me</button></div>
    <div class="col-6 text-left"><button onClick={resetCount} className="btn btn-lg btn-primary">Reset</button></div>
    </div>
                    }
            </div>
        </div>
    )
}

export default Display;