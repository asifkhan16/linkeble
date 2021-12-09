$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        // arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.rectangle-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    });
    $('.gigslider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    //    LOGIN , SIGNIN, FORGOT
    $(this).on("click", "#nav-sign-btn", function() {
        $("#login-form").removeClass("d-none");
    });
    $(this).on("click", "#join-btn", function() {
        $("#login-form").addClass("d-none");
        $("#signup-form").removeClass("d-none");
    });
    $(this).on("click", "#signin-btn", function() {
        $("#login-form").removeClass("d-none");
        $("#signup-form").addClass("d-none");
    });
    $(this).on("click", "#forgot-btn", function() {
        $("#login-form").addClass("d-none");
        $("#forgot-form").removeClass("d-none");
    });
    // MAIN FORM IN START
    $(this).on('click', '#exit_sign_in_model', function() {
        $('#login-form').addClass('d-none');
    });
    $(this).on('click', '#exit_sign_up_model', function() {
        $('#signup-form').addClass('d-none');
    });
    $(this).on('click', '#exit_forgot_model', function() {
        $('#forgot-form').addClass('d-none');
    });
    $(this).on('click', '#back_forgot_model', function() {
        $('#forgot-form').addClass('d-none');
        $('#login-form').removeClass('d-none');
    });
    // MAIN FORM IN END
    //    START-----  FUNCTIONS FOR CHOOSEN FILE IN SERVICES PAGE 
    $(this).on("click", "#file-upload-btn", function() {
        $("#file-upload").click();
    });
    $(this).on("change", "#file-upload", function() {
        var file_name = $("#file-upload").val().split('\\').pop();
        $("#file-name").text(file_name);
        $("#choosen-file").removeClass("d-none");
    });
    $(this).on("click", "#clear-file", function() {
        $("#file-upload").val("");
        $("#choosen-file").addClass("d-none");
    });
    $(this).on("keyup", "#message_word_count", function() {
        var count = this.value.length;
        $("#word_count").text(count);
    });
    //    END-----  FUNCTIONS FOR CHOOSEN FILE IN SERVICES PAGE
    $(this).on("click", "#reviews-btn", function() {
        $("#reviews-btn").css("color", "#00966B");
        $(".reviews-area").css("background-color", "#00966B");
        $("#services-btn").css("color", "#fff")
        $(".services-area").css("background-color", "#fff");
        $("#services").addClass("d-none");
        $("#reviews").removeClass("d-none");
    });
    $(this).on("click", "#services-btn", function() {
        $("#reviews-btn").css("color", "#fff");
        $(".reviews-area").css("background-color", "#fff");
        $("#services-btn").css("color", "#00966B")
        $(".services-area").css("background-color", "#00966B");
        $("#reviews").addClass("d-none");
        $("#services").removeClass("d-none");
    });
    /////////////////
    $(this).on("click", "#basic-btn", function() {
        $("#standard-section").addClass("d-none");
        $("#premium-section").addClass("d-none");
        $("#basic-section").removeClass("d-none");
        $("#standard-btn").removeClass("active-package,fw-bold");
        $("#premium-btn").removeClass("active-package,fw-bold");
        $("#standard-btn").addClass("text-muted");
        $("#premium-btn").addClass("text-muted");
        $("#basic-btn").addClass("fw-bold");
        $("#basic-btn").removeClass("text-muted");
    });
    $(this).on("click", "#standard-btn", function() {
        $("#basic-section").addClass("d-none");
        $("#premium-section").addClass("d-none");
        $("#standard-section").removeClass("d-none");
        $("#basic-btn").removeClass("active-package,fw-bold");
        $("#premium-btn").removeClass("active-package,fw-bold");
        $("#basic-btn").addClass("text-muted");
        $("#premium-btn").addClass("text-muted");
        $("#standard-btn").addClass("fw-bold");
        $("#standard-btn").removeClass("text-muted");
    });
    $(this).on("click", "#premium-btn", function() {
        $("#basic-section").addClass("d-none");
        $("#standard-section").addClass("d-none");
        $("#premium-section").removeClass("d-none");
        $("#basic-btn").removeClass("active-package,fw-bold");
        $("#standard-btn").removeClass("active-package,fw-bold");
        $("#basic-btn").addClass("text-muted");
        $("#standard-btn").addClass("text-muted");
        $("#premium-btn").addClass("fw-bold");
        $("#premium-btn").removeClass("text-muted");
    });
    ///////////////////////////
    ///     ORDER  DETAILS start
    $(this).on("click", "#order-details-continue", function() {
        $("#order-detail").addClass("d-none");
        $("#Payment").removeClass("d-none");
        $("#step-1").css("background-color", "#00966B");
        $("#num-2").css("background-color", "#00966B");
        $("#pay-clr").css("color", "#00966B");
    });
    $(this).on("click", "#pay-continue", function() {
        $("#Payment").addClass("d-none");
        $("#place-order").removeClass("d-none");
        $("#step-2").css("background-color", "#00966B")
        $("#num-3").css("background-color", "#00966B")
        $("#place-order-clr").css("color", "#00966B");
    });
    $(this).on("click", "#visa-card", function() {
        $("#visa-card-select").removeClass("d-none");
        $("#visa-card").css("border", "1.5px solid #00FFF6");
        $("#master-card-select").addClass("d-none");
        $("#master-card").css("border", "none");
    });
    $(this).on("click", "#master-card", function() {
        $("#master-card-select").removeClass("d-none");
        $("#master-card").css("border", "1.5px solid #00FFF6");
        $("#visa-card-select").addClass("d-none");
        $("#visa-card").css("border", "none");
    });
    ///     ORDER DETAILS end

    // CREATE SERVICES START
    $(this).on('click', '#next_from_overview', function() {
        $('#Overview').addClass('d-none');
        $('#Pricing').removeClass("d-none");
        $('.create-service-indicator-1').addClass('active-create-service-indicator');
        $('.create-service-indicator-2').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_2').removeClass('text-muted');
    });
    $(this).on('click', '#next_from_pricing', function() {
        $('#Pricing').addClass('d-none');
        $('#Requirements').removeClass("d-none");
        $('.create-service-indicator-3').addClass('active-create-service-indicator');
        $('.create-service-indicator-4').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_3').removeClass('text-muted');
    });
    $(this).on('click', '#back_from_pricing', function() {
        $('#Pricing').addClass('d-none');
        $('#Overview').removeClass("d-none");
        $('.create-service-indicator-1').removeClass('active-create-service-indicator');
        $('.create-service-indicator-2').removeClass('active-create-service-indicator');
        $('#create_service_text_indicator_2').addClass('text-muted');
    });
    $(this).on('click', '#next_from_requirements', function() {
        $('#Requirements').addClass('d-none');
        $('#Mockup').removeClass("d-none");
        $('.create-service-indicator-5').addClass('active-create-service-indicator');
        $('.create-service-indicator-6').addClass('active-create-service-indicator');
        $('#create_service_text_indicator_4').removeClass('text-muted');
    });
    $(this).on('click', '#back_from_requirements', function() {
        $('#Requirements').addClass('d-none');
        $('#Pricing').removeClass("d-none");
        $('.create-service-indicator-4').removeClass('active-create-service-indicator');
        $('.create-service-indicator-3').removeClass('active-create-service-indicator');
        $('#create_service_text_indicator_3').addClass('text-muted');
    });
    $(this).on('click', '#back_from_mockup_design', function() {
        $('#Requirements').removeClass('d-none');
        $('#Mockup').addClass("d-none");
        $('.create-service-indicator-5').removeClass('active-create-service-indicator');
        $('.create-service-indicator-6').removeClass('active-create-service-indicator');
        $('#create_service_text_indicator_4').addClass('text-muted');
    });
    // CREATE SERVICES END

    // MANAGE ORDERS START
    $(this).on('click', '#manage_order_late_btn', function() {
        $('#manage_orders_active').addClass('d-none');
        $('#manage_orders_late').removeClass('d-none');
        // $('#manage_order_active_btn').html('Active');
        $('#manage_order_active_btn').removeClass('active');
        $('#manage_order_late_btn').addClass('active');
        $('#manage_order_late_icon').removeClass('d-none');
        $('#manage_order_active_icon').addClass('d-none');

    });
    $(this).on('click', '#manage_order_active_btn', function() {
        $('#manage_orders_late').addClass('d-none');
        $('#manage_orders_active').removeClass('d-none');
        // $('#manage_order_late_btn').html('Late');
        $('#manage_order_late_btn').removeClass('active');
        $('#manage_order_active_btn').addClass('active');
        $('#manage_order_active_icon').removeClass('d-none');
        $('#manage_order_late_icon').addClass('d-none');

    });
    // MANAGE ORDERS END

    $(this).on('click', '.all-paticipants', function() {
        $('.group-members-list').slideToggle();
    });

    // SERVICES INFO PAGE START
    $(this).on('click', '#pause_btn_of_services_info', function() {
        $('#services_active_section').addClass('d-none');
        $('#services_pause_section').removeClass('d-none');
        $('#active_btn_of_services_info').removeClass('active');
        $('#active_btn_of_services_info').html('Active');
        $('#rejected_btn_of_services_info').removeClass('active');
        $('#rejected_btn_of_services_info').html('Rejected');
        $(this).addClass('active');
        $(this).html('Pause<i class="fas fa-chevron-right ms-5"></i>');

    });
    $(this).on('click', '#active_btn_of_services_info', function() {
        $('#services_active_section').removeClass('d-none');
        $('#services_pause_section').addClass('d-none');
        $('#pause_btn_of_services_info').removeClass('active');
        $('#pause_btn_of_services_info').html('Pause');
        $('#rejected_btn_of_services_info').removeClass('active');
        $('#rejected_btn_of_services_info').html('Rejected');
        $(this).addClass('active');
        $(this).html('Active<i class="fas fa-chevron-right ms-5"></i>');

    });
    $(this).on('click', '#rejected_btn_of_services_info', function() {
        $('#active_active_section').addClass('d-none');
        $('#services_active_section').addClass('d-none');
        $('#rejected_btn_of_services_info').removeClass('d-none');
        $('#pause_btn_of_services_info').removeClass('active');
        $('#services_rejected_section').removeClass('d-none');
        $('#pause_btn_of_services_info').html('Pause');
        $('#active_btn_of_services_info').removeClass('active');
        $('#active_btn_of_services_info').html('Active');
        $(this).addClass('active');
        $(this).html('Rejected<i class="fas fa-chevron-right ms-5"></i>');

    });

    // SERVICES INFO PAGE END

    






}) //END OF MAIN FUNCTION