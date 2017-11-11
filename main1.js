function mdown(id){
                var x='',y='';
                
                document.getElementById(id).style=" background:#9B0606";
                x=document.getElementById(id).value;
                y=document.getElementById('window').value;
                
                if(id=='cl'){
                   document.getElementById('window').value=''; 
                }
                else if (id=='enter'){
                    if(((x+y).length)==4){
                        alert('the value = '+y);
                    }
                    else if (((x+y).length)<4){
                        alert("you must type 4 digits"); 
                    }
                    
                }
               
                else{
                    if(((x+y).length)<=4){
                    document.getElementById('window').value=y+x;
                    document.getElementById('window').style="color: #000; font-size: 25px;";
                    document.getElementById('window').type='password';
                     
                    }
                    else{
                        alert("you can type only 4 digits");
                        document.getElementById('window').style="color: red; font-size: 15px;";
                        document.getElementById('window').value=" click clear end try again";
                        document.getElementById('window').type='text';
                        
                    }}
                
            }
            
            function mup(id){
                document.getElementById(id).style=" background:#aaa";
            }
            
            
            function hover(id){
                document.getElementById(id).style="background: #F78585;";
            }
  