
$(function () {

    $(".firstStepRadio").click(function () {
        $('.toggleWrapper').removeClass('active');
        $('.questionGroup').addClass('in');

        if ($("#POSRES").is(":checked")) {
           $(this).parent().parent('.toggleWrapper').addClass('active');
           $('#set_2.questionGroup').removeClass('in');
           $('.completedBar').css("width", '20%');
           $('.completedBar').html('20%');
           $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");

        } else if($("#POSRET").is(":checked")) {
           $(this).parent().parent('.toggleWrapper').addClass('active');
           $('#set_4.questionGroup').removeClass('in');
           $('.completedBar').css("width", '20%');
           $('.completedBar').html('20%');
           $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");

        } else if($("#CCP").is(":checked")) {
           $(this).parent().parent('.toggleWrapper').addClass('active');
           $('#set_6.questionGroup').removeClass('in');
           $('.completedBar').css("width", '20%');
           $('.completedBar').html('20%');
           $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");            

        } else {
           $('#set_1.questionGroup').removeClass('in');
        }
     });


$("#businessTypeSelect").click(function(){
   $('.businessTypeSelect').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
   $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
});

$("#retailTypeSelect").click(function(){
   $('.retailTypeSelect').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
   $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
});


$("#AcceptCreditCardsTypeSelect").click(function(){
   $('.AcceptCreditCardsTypeSelect ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
   $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
});

$("#hardwareAndSoftware").click(function(){
   $('.secondStepRadio ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
   $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
});

$("#CustomerFacingDisplaySelect").click(function(){
   $('.additionalHardwareAndSoftware ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
   $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
});

$("#describeBusinessSelect").click(function(){
   $('.describeBusiness ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
   $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
});



var $selectService = $('.businessTypeSelect');
$selectService.click(function() {
   $selectService.each(function() {
       $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);       
   });
});

var $retailTypeSelect = $('.retailTypeSelect');
$retailTypeSelect.click(function() {
   $retailTypeSelect.each(function() {
       $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);       
   });
});

var $AcceptCreditCardsTypeSelect = $('.AcceptCreditCardsTypeSelect');
$AcceptCreditCardsTypeSelect.click(function() {
   $AcceptCreditCardsTypeSelect.each(function() {
       $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);       
   });
});


var $secondStepRadio = $('.secondStepRadio');
$secondStepRadio.click(function() {
   $secondStepRadio.each(function() {
       $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);       
   });
});

var $CustomerFacingDisplaySelect = $('.additionalHardwareAndSoftware');
$CustomerFacingDisplaySelect.click(function() {
   $CustomerFacingDisplaySelect.each(function() {
       $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);       
   });
});

var $describeBusinessSelect = $('.additionalHardwareAndSoftware');
$describeBusinessSelect.click(function() {
   $describeBusinessSelect.each(function() {
       $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);       
   });
});




      $("#set_2 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_9.questionGroup').removeClass('in');
           $('.completedBar').css("width", '40%');
           $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
           $('.completedBar').html('40%');

           $('#set_9 .backButton').attr("data-id", 'set_2');
           $('#set_9 .nextButton').attr("data-id", 'set_3');
       });


       $("#set_3 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_10.questionGroup').removeClass('in');
           $('.completedBar').css("width", '80%');
           $('.completedBar').html('80%');
           $('.compleredBarText').html("");

           $('#set_10 .backButton').attr("data-id", 'set_3');
           $('#set_10 .nextButton').attr("data-id", 'Success');
       });


       
       $("#set_4 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_9.questionGroup').removeClass('in');
           $('.completedBar').css("width", '40%');
           $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
           $('.completedBar').html('40%');

           $('#set_9 .backButton').attr("data-id", 'set_4');
           $('#set_9 .nextButton').attr("data-id", 'set_5');
       });

       $("#set_5 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_10.questionGroup').removeClass('in');
           $('.completedBar').css("width", '80%');
           $('.completedBar').html('80%');
           $('.compleredBarText').html("");
           $('#set_10 .backButton').attr("data-id", 'set_5');
           $('#set_10 .nextButton').attr("data-id", 'Success');
       });


      $("#set_6 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_7.questionGroup').removeClass('in');
           $('.completedBar').css("width", '40%');
           $('.completedBar').html('40%');
           $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
       });

       $("#set_7 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_8.questionGroup').removeClass('in');
           $('.completedBar').css("width", '60%');
           $('.completedBar').html('60%');
           $('.compleredBarText').html("");
       });

       $("#set_8 .nextButton").click(function () {
           $('.questionGroup').addClass('in');
           $('#set_10.questionGroup').removeClass('in');
           $('.completedBar').css("width", '80%');
           $('.completedBar').html('80%');
           $('.compleredBarText').html("");
           $('#set_10 .backButton').attr("data-id", 'set_8');
           $('#set_10 .nextButton').attr("data-id", 'Success');
       });

       

       $("#set_9 .nextButton").click(function () {      

           var back_data_id = $(this).data('id');
           var next_data_id = $(this).data('id');
           $('.questionGroup').addClass('in');
           $('.questionGroup#'+ back_data_id).removeClass('in');

           $('.completedBar').css("width", '60%');
           $('.completedBar').html('60%');
           $('.compleredBarText').html("");
        });



     $("#set_2 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
     });
     
     $("#set_3 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_9.questionGroup').removeClass('in');
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
     });

     $("#set_4 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
     });

     $("#set_5 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_9.questionGroup').removeClass('in');
        
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
        $('#set_10 .backButton').attr("data-id", 'set_8');
        $('#set_10 .nextButton').attr("data-id", 'Success');


     });
     $("#set_6 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
     });

     $("#set_7 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_6.questionGroup').removeClass('in');
        $('.completedBar').css("width", '20%');
        $('.completedBar').html('20%');
        $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
     });

     $("#set_8 .backButton").click(function () {        
        $('.questionGroup').addClass('in');
        $('#set_7.questionGroup').removeClass('in');
        $('.completedBar').css("width", '60%');
        $('.completedBar').html('60%');
        $('.compleredBarText').html("");
     });


     $("#set_9 .backButton").click(function () {      

        var back_data_id = $(this).data('id');
        var next_data_id = $(this).data('id');

        $('.questionGroup').addClass('in');
        $('.questionGroup#'+ back_data_id).removeClass('in');

        $('.completedBar').css("width", '20%');
        $('.completedBar').html('20%');
        $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
     });

     $("#set_10 .backButton").click(function () {      

        var back_data_id = $(this).data('id');
        var next_data_id = $(this).data('id');

        $('.questionGroup').addClass('in');
        $('.questionGroup#'+ back_data_id).removeClass('in');

        $('.completedBar').css("width", '60%');
        $('.completedBar').html('60%');
        $('.compleredBarText').html("");
     });

});


$(document).ready(function() {
  $("input[name$='selectbudget']").click(function() {
        var budgetMonth = $(this).val();
        $("div.selectbudget").hide();
        $("#" + budgetMonth).show();
  });

  
});


