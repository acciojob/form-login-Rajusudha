    function getformvalue(){
                let inpts=document.querySelectorAll("inputs");
                let First_name=inpts[0].value
                let last_name=inpts[1].value
                let fullname=First_name +" "+ last_name
                alert(fullname)
            }