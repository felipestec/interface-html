function requestOfServer(){

  $.ajax({
      type: 'post',
      url: "http://localhost:8000/New-hello-world?info=OlaMundo"
  }).done(function (data) {
      document.getElementById('developer').innerHTML = data.name
      document.getElementById('version').innerHTML = data.version
      document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
      document.getElementById('company-site').innerHTML = data.web_site_company

      $("#show-values").css('display','block')
  });

 }
 function submitDataOfCar(){
  const carNameOfUser = $("#carName").val()
  const modelOfUser = $("#model").val()
  
  $.ajax({
      "url": "http://localhost:8000/carinsert",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        carName:carNameOfUser,
        model:modelOfUser              
      })

    }).done(function (response) {
      console.log(response);
        
      if(response.success){
          $("#sucess-record-msg").css("display","block");
          $("#error-record-msg").css("display","none");

          $("#carName").val('')
          $("#model").val('')
          
          
      }else{
        let errorMsg;
        let errorWidth = '350px'

        if(response.missingAttribute === 'carName'){
          errorMsg = 'O campo nome do carro esta ausente, pode preencher?'
          errorWidth = '415px'
        }

        if(response.missingAttribute === 'model'){
          errorMsg = 'O campo modelo do carro esta ausente, pode preencher?'
          errorWidth = '415px'
        }

        $("#error-record-msg").css("display","block");
        $("#sucess-record-msg").css("display","none");
        $("#content-error-record-msg").html(errorMsg);
        $("#error-record-msg").css('width',errorWidth);
      }
     
    });

}

function closeSuccessMsg(){
    
    $(".sucess-record").css("display", "none");
}

function closeErrorMsg(){
    
$(".error-record").css("display", "none");
}

