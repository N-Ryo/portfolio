$(document).ready(function () {
    $("#form").submit(function (event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var title = $("#title").val();
        var body = $("#body").val();
 
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSeOEZqtGLlpgk5gzwNLUPZ0U2hg2nMoTugjC4qtQcs2cucI_A/formResponse",
            data: {
                "entry.106339191": name,
                "entry.1647594": email,
                "entry.520156615": title,
                "entry.218869935": body
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();
    });

    var $form_modal = $('.form-modal');
    var $form = $('.form');
    var $appear_form = $('.appear-form')
    var $mail_link = $('.mail-link');
    var $close_form = $('.form-modal');

    $mail_link.on('click', function(){
        $form_modal.toggleClass('modal-active');
        $appear_form.toggleClass('active');
        $form.toggleClass('form-active');
    });
    $close_form.on('click', function(){
        $form_modal.toggleClass('modal-active');
        $appear_form.toggleClass('active');
        $form.toggleClass('form-active');
    });
});