remWeld.dom = remWeld.dom || (function () {
    var context = {};
    var voltageTo = remWeld.config.voltageRange.voltageTo;
    var debug = remWeld.config.voltageDial.debug;
    var minDegree = remWeld.config.voltageDial.minDegree;
    var maxDegree = remWeld.config.voltageDial.maxDegree;
    var degreeStartAt = remWeld.config.voltageDial.degreeStartAt;
    var wheelSize = remWeld.config.voltageDial.wheelSize;
    var knobSize = remWeld.config.voltageDial.knobSize;
    
    context.createVoltageDial = function () {
        var vdElem = $('#voltageDialDiv')[0];
        var scope = remWeld.data.scope;
        context.welderDial = JogDial(vdElem,
                {
                    debug: debug,
                    wheelSize: wheelSize,
                    knobSize: knobSize,
                    minDegree: minDegree,
                    maxDegree: maxDegree,
                    degreeStartAt: degreeStartAt
                }).on('mousemove', function (evt) {
        }).on("mouseup", function (evt) {
            var rawValue = evt.target.rotation;// / maxDegree;
            var value = ((rawValue / maxDegree) * voltageTo).toFixed(2);
            scope.voltage = value;
            context.showHideSendToWelderButton(false);//hide the button
            context.unselectAllSendToWelderRadios();
            scope.$apply();
        });

    };
    
    context.unselectAllSendToWelderRadios = function(){
        var scope = remWeld.data.scope;
        var ports = scope.ports;
        var len = ports.length;
        for(var p = 0; p<len; p++){
            ports[p].checked = false;
        }
    };
    
    context.showHideSendToWelderButton = function(state){
        if(state){
            $("#chooseWelder").removeClass("hide");
        }else{
            $("#chooseWelder").addClass("hide");
        }
        
    };
    return context;
})();


