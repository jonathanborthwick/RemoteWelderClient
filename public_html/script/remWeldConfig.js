remWeld.config = remWeld.config || {
    ports:[
        {name:"p1",portNo:"8081",checked:false},
        {name:"p2",portNo:"8082",checked:false},
        {name:"p3",portNo:"8083",checked:false},
        {name:"p4",portNo:"8084",checked:false}
    ],
    voltageRange:{
        voltagefrom:0,
        voltageTo:10
    },
    voltageDial:{
        debug:true,
        maxDegree:360,
        minDegree:0,
        degreeStartAt:0,
        wheelSize:'200px',
        knobSize:'70px',
        measure:"Volts"
    },
    api:{send:""}
}

