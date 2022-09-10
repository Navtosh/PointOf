$(function() {

    $(".firstStepRadio").on('click', function() {
        $('#set_1 .toggleWrapper').removeClass('active');
        $('#set_1.questionGroup').addClass('in');

        if ($("#POSRES").is(":checked")) {
            $("#quantity").removeAttr("disabled");
            $('#projectedDollarVolume').attr('disabled', true);
            $('#moontlyDollarVolume').attr('disabled', true);
            $('form.quiz_form').trigger("reset");
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $('#set_2.questionGroup').removeClass('in');
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
            $(this).prop("checked", "true");

        } else if ($("#POSRET").is(":checked")) {
            $("#quantity").removeAttr("disabled");
            $('#projectedDollarVolume').attr('disabled', true);
            $('#moontlyDollarVolume').attr('disabled', true);
            $('form.quiz_form').trigger("reset");
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $('#set_4.questionGroup').removeClass('in');
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
            $(this).prop("checked", "true");
        } else if ($("#CCP").is(":checked")) {
            $("#quantity").attr("disabled", "disabled");
            $('#projectedDollarVolume').attr('disabled', true);
            $('#moontlyDollarVolume').attr('disabled', true);
            $('form.quiz_form').trigger("reset");
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $('#set_6.questionGroup').removeClass('in');
            $('.completedBar').css("width", '20%');
            $('.completedBar').html('20%');
            $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
            $(this).prop("checked", "true");
        } else {
            $('#set_1.questionGroup').removeClass('in');
        }
    });



    $("#businessTypeSelect").click(function() {
        $('.businessTypeSelect').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#retailTypeSelect").click(function() {
        $('.retailTypeSelect').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });


    $("#AcceptCreditCardsTypeSelect").click(function() {
        $('.AcceptCreditCardsTypeSelect ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#hardwareAndSoftware").click(function() {
        $('.secondStepRadio ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#CustomerFacingDisplaySelect").click(function() {
        $('.additionalHardwareAndSoftware ').not(this).prop('checked', this.checked).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
    });

    $("#describeBusinessSelect").click(function() {
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

    var $describeBusinessSelect = $('.describeBusiness');
    $describeBusinessSelect.click(function() {
        $describeBusinessSelect.each(function() {
            $(this).parent().parent('.toggleWrapper').toggleClass('active', this.checked);
        });
    });




    $("#set_2 .nextButton").click(function() {

        $(".businessTypeSelect").each(function() {
            if ($(this).prop('checked') == true) {
                // alert('OK');
                $('.questionGroup').addClass('in');
                $('#set_9.questionGroup').removeClass('in');
                $('.completedBar').css("width", '40%');
                $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
                $('.completedBar').html('40%');

                $('#set_9 .backButton').attr("data-id", 'set_2');
                $('#set_9 .nextButton').attr("data-id", 'set_3');
                $("#error1").html("");
                return false;
            } else {
                $("#error1").html("Please provide an answer (don't worry, it's not set in stone).");
            }
        });

    });


    $("#set_3 .nextButton").click(function() {

        $(".secondStepRadio").each(function() {
            if ($(this).prop('checked') == true) {
                // alert('OK');
                $('.questionGroup').addClass('in');
                $('#set_10.questionGroup').removeClass('in');
                $('.completedBar').css("width", '80%');
                $('.completedBar').html('80%');
                $('.compleredBarText').html("");

                $('#set_10 .backButton').attr("data-id", 'set_3');
                $('#set_10 .nextButton').attr("data-id", 'Success');
                $("#error3").html("");
                return false;
            } else {
                $("#error3").html("Please provide an answer (don't worry, it's not set in stone).");
            }
        });



    });




    $("#set_4 .nextButton").click(function() {
        $(".retailTypeSelect").each(function() {
            if ($(this).prop('checked') == true) {
                // alert('OK');
                $('.questionGroup').addClass('in');
                $('#set_9.questionGroup').removeClass('in');
                $('.completedBar').css("width", '40%');
                $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
                $('.completedBar').html('40%');

                $('#set_9 .backButton').attr("data-id", 'set_4');
                $('#set_9 .nextButton').attr("data-id", 'set_5');
                $("#error4").html("");
                return false;
            } else {
                $("#error4").html("Please provide an answer (don't worry, it's not set in stone).");
            }
        });

    });

    $("#set_5 .nextButton").click(function() {
        $(".additionalHardwareAndSoftware").each(function() {
            if ($(this).prop('checked') == true) {
                $('.questionGroup').addClass('in');
                $('#set_10.questionGroup').removeClass('in');
                $('.completedBar').css("width", '80%');
                $('.completedBar').html('80%');
                $('.compleredBarText').html("");
                $('#set_10 .backButton').attr("data-id", 'set_5');
                $('#set_10 .nextButton').attr("data-id", 'Success');
                $("#error5").html("");
                return false;
            } else {
                $("#error5").html("Please provide an answer (don't worry, it's not set in stone).");
            }
        });

    });


    $("#set_6 .nextButton").click(function() {
        $(".describeBusiness").each(function() {
            if ($(this).prop('checked') == true) {
                $('.questionGroup').addClass('in');
                $('#set_7.questionGroup').removeClass('in');
                $('.completedBar').css("width", '40%');
                $('.completedBar').html('40%');
                $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
                $("#error6").html("");
                return false;
            } else {
                $("#error6").html("Please provide an answer (don't worry, it's not set in stone).");
            }
        });


    });

    $("#set_7 .nextButton").click(function() {

        if ($('#moontlyDollarVolume option:selected').val() == '' && $('#projectedDollarVolume option:selected').val() == '') {
            $("#error7").html("Please provide an answer (don't worry, it's not set in stone).");
        } else {
            $('.questionGroup').addClass('in');
            $('#set_8.questionGroup').removeClass('in');
            $('.completedBar').css("width", '60%');
            $('.completedBar').html('60%');
            $('.compleredBarText').html("");
            $("#error7").html("");
        }
    });



    $("#set_8 .nextButton").click(function() {
        $(".AcceptCreditCardsTypeSelect").each(function() {
            if ($(this).prop('checked') == true) {
                $('.questionGroup').addClass('in');
                $('#set_10.questionGroup').removeClass('in');
                $('.completedBar').css("width", '80%');
                $('.completedBar').html('80%');
                $('.compleredBarText').html("");
                $('#set_10 .backButton').attr("data-id", 'set_8');
                $('#set_10 .nextButton').attr("data-id", 'Success');
                $("#error8").html("");
                return false;
            } else {
                $("#error8").html("Please provide an answer (don't worry, it's not set in stone).");
            }
        });


    });



    $("#set_9 .nextButton").click(function() {
        //var qtyVal = 
        if ($("#quantity").val() == "") {
            //alert("Please enter Name!");
            $("#error9").html("Please provide an answer (don't worry, it's not set in stone).");
        } else {
            var back_data_id = $(this).data('id');
            var next_data_id = $(this).data('id');
            $('.questionGroup').addClass('in');
            $('.questionGroup#' + back_data_id).removeClass('in');

            $('.completedBar').css("width", '60%');
            $('.completedBar').html('60%');
            $('.compleredBarText').html("");
            $("#error9").html("");
        }


    });



    $("#set_2 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
    });

    $("#set_3 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_9.questionGroup').removeClass('in');
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
    });

    $("#set_4 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
    });

    $("#set_5 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_9.questionGroup').removeClass('in');

        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
        $('#set_10 .backButton').attr("data-id", 'set_8');
        $('#set_10 .nextButton').attr("data-id", 'Success');


    });
    $("#set_6 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_1.questionGroup').removeClass('in');
        $('.completedBar').css("width", '0%');
        $('.completedBar').html('');
        $('.compleredBarText').html("");
    });

    $("#set_7 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_6.questionGroup').removeClass('in');
        $('.completedBar').css("width", '20%');
        $('.completedBar').html('20%');
        $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
    });

    $("#set_8 .backButton").click(function() {
        $('.questionGroup').addClass('in');
        $('#set_7.questionGroup').removeClass('in');
        $('.completedBar').css("width", '40%');
        $('.completedBar').html('40%');
        $('.compleredBarText').html("ALMOST DONE! JUST A FEW MORE.");
    });


    $("#set_9 .backButton").click(function() {

        var back_data_id = $(this).data('id');
        var next_data_id = $(this).data('id');

        $('.questionGroup').addClass('in');
        $('.questionGroup#' + back_data_id).removeClass('in');

        $('.completedBar').css("width", '20%');
        $('.completedBar').html('20%');
        $('.compleredBarText').html("GREAT PROGRESS! KEEP IT GOING.");
    });

    $("#set_10 .backButton").click(function() {

        var back_data_id = $(this).data('id');
        var next_data_id = $(this).data('id');

        $('.questionGroup').addClass('in');
        $('.questionGroup#' + back_data_id).removeClass('in');

        $('.completedBar').css("width", '60%');
        $('.completedBar').html('60%');
        $('.compleredBarText').html("");
    });

    
    $("input[name$='selectbudget']").click(function() {
        var budgetMonth = $(this).val();
        $("div.selectbudget").hide();
        $("#" + budgetMonth).show();

        if ($(this).val()=='monthly') {
            $('#moontlyDollarVolume').attr('disabled', false);
            $('#projectedDollarVolume').attr('disabled', true);
            //alert('Select 1');
        } 
        else if ($(this).val()=='projected') {
            $('#projectedDollarVolume').attr('disabled', false);
            $('#moontlyDollarVolume').attr('disabled', true);
           // alert('Select 1');
        }

    });



    $("#set_1 .nextButton").on( "click", function() {

        var atLeastOneChecked = false;
        $(".firstStepRadio").each(function() {
            if ($('.firstStepRadio').attr("checked") != "checked") {
                $("#msg").html("Please provide an answer (don't worry, it's not set in stone).");
            } else {
                alert('HAHA');
            }
        });
    });




    $("#set_10 .nextButton").on( "click", function() {
        var valid = true;  
    // var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        $email = $('#Email');

        if ($email.val() == '') {
            $("#errorEmail").html('This information is required.');
            valid = false;
        } 
        // if(!emailReg.test($('#Email').val() == '')) {
        //         $("#errorEmail").html('Enter a valid email address.');
        //         valid = false;
        //     }

        if($email.val() !== ""){
            if(!pattern.test($email.val())){
                $("#errorEmail").html('Enter a valid email address.');               
                valid  = false;
            }
        }

        if ($('#Zip').val() == '') {
            $("#errorZip").html('This information is required.');
            valid = false;
        } 

        
        if(valid) {
        // alert('Test');
            $('.questionGroup').addClass('in');
            $('.completedBar').css("width", '100%');
            $('.completedBar').html('100%');
            $('.compleredBarText').remove();
            $('#SuccessForm.questionGroup').removeClass('in');
            
        }    

    });


    $(".selectbudgetButton").on('change', function() {
        
     $('#set_7 .toggleWrapper').removeClass('active');

        if ($("#selectbudget").is(":checked")) {
          //  alert('1');
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $(this).prop("checked", "true");

        } else if ($("#selectNobudget").is(":checked")) {
          //  alert('2');
            $(this).parent().parent('.toggleWrapper').addClass('active');
            $(this).prop("checked", "true");        
        }
    });
});

