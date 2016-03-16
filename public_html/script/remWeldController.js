remWeld.app.controller('remWeldcontroller',[
        '$scope',function($scope){
            $scope.ports = remWeld.config.ports;
            $scope.voltage = 0;
            $scope.chosenWelder;
            $scope.measure = remWeld.config.voltageDial.measure;
            $scope.chooseWelder = function(index){
                remWeld.dom.showHideSendToWelderButton(true);
                var noPorts = $scope.ports.length;
                for(var p = 0; p<noPorts; p++){
                    if(p != index){
                        $scope.ports[p].checked = false;    
                    }else{
                        $scope.ports[p].checked = true;
                    }
                }
                $scope.chosenWelder = "Send " + $scope.voltage + " Volts to welder " + $scope.ports[index].name;
            };
            $scope.isWelderChecked = function(index){
                var state = $scope.ports[index].checked;
                return state;
            };
            $scope.submitToWelder = function(){
                remWeld.io.submitToWelder($scope);
                 //unselect all radios
                 remWeld.dom.unselectAllSendToWelderRadios();
            };

        }
]);



