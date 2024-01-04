let compChoiceIndex;
        let userCounter=0;
        let computerCounter=0;
        let tieCounter=0;
        function rockFunction(){
            compChoiceIndex = Math.ceil(Math.random()*3);
            if (compChoiceIndex==1){
                tieCounter++;
            }else if (compChoiceIndex==2){
                userCounter++;
            }else{
                computerCounter++;
            }
            document.querySelector('#user-counter').value=userCounter;
            document.querySelector('#comp-counter').value=computerCounter;
            document.querySelector('#tie-counter').value=tieCounter;
        }
        function paperFunction(){
            compChoiceIndex = Math.ceil(Math.random()*3);
            if (compChoiceIndex==1){
                computerCounter++;
            }else if (compChoiceIndex==2){
                tieCounter++;
            }else{
                userCounter++;
            }
            document.querySelector('#user-counter').value=userCounter;
            document.querySelector('#comp-counter').value=computerCounter;
            document.querySelector('#tie-counter').value=tieCounter;
        }
        function scissorFunction(){
            compChoiceIndex = Math.ceil(Math.random()*3);
            if (compChoiceIndex==1){
                computerCounter++;
            }else if (compChoiceIndex==2){
                userCounter++;
            }else{
                tieCounter++;
            }
            document.querySelector('#user-counter').value=userCounter;
            document.querySelector('#comp-counter').value=computerCounter;
            document.querySelector('#tie-counter').value=tieCounter;
        }
        function clearFunction(){
            history.go();
        }