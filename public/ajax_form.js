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

    var $about = $('.about');
    var $skills = $('.skills');
    var $works = $('.works');
    var $about_title = $('#about-title');
    var $skills_title = $('#skills-title');
    var $works_title = $('#works-title');
    var $about_content = $('#about-content');
    var $skills_content = $('#skills-content');
    var $works_content = $('#works-content');
    var $about_main = $('.about-main');
    var $skills_main = $('.skills-main');
    var $works_main = $('.works-main');

    $about.on('click', function(){
        $about_title.toggleClass('title-active');
        $about_title.toggleClass('title-passive');
        $about_content.toggleClass('content-active');
        $about_content.toggleClass('content-passive');
        $about.toggleClass('icon-active');
        $about.toggleClass('icon-passive');
        $about_main.toggleClass('main-active');
        if( $skills_title.hasClass('title-active') == true ) {
            $skills_title.toggleClass('title-active');
            $skills_title.toggleClass('title-passive');
            $skills_content.toggleClass('content-active');
            $skills_content.toggleClass('content-passive');
            $skills.toggleClass('icon-active');
            $skills.toggleClass('icon-passive');
            $skills_main.toggleClass('main-active');
        }
        if( $works_title.hasClass('title-active') == true ) {
            $works_title.toggleClass('title-active');
            $works_title.toggleClass('title-passive');
            $works_content.toggleClass('content-active');
            $works_content.toggleClass('content-passive');
            $works.toggleClass('icon-active');
            $works.toggleClass('icon-passive');
            $works_main.toggleClass('main-active');
        }
    });
    $skills.on('click', function(){
        $skills_title.toggleClass('title-active');
        $skills_title.toggleClass('title-passive');
        $skills_content.toggleClass('content-active');
        $skills_content.toggleClass('content-passive');
        $skills.toggleClass('icon-active');
        $skills.toggleClass('icon-passive');
        $skills_main.toggleClass('main-active');
        if( $about_title.hasClass('title-active') == true ) {
            $about_title.toggleClass('title-active');
            $about_title.toggleClass('title-passive');
            $about_content.toggleClass('content-active');
            $about_content.toggleClass('content-passive');
            $about.toggleClass('icon-active');
            $about.toggleClass('icon-passive');
            $about_main.toggleClass('main-active');
        }
        if( $works_title.hasClass('title-active') == true ) {
            $works_title.toggleClass('title-active');
            $works_title.toggleClass('title-passive');
            $works_content.toggleClass('content-active');
            $works_content.toggleClass('content-passive');
            $works.toggleClass('icon-active');
            $works.toggleClass('icon-passive');
            $works_main.toggleClass('main-active');
        }
    });
    $works.on('click', function(){
        $works_title.toggleClass('title-active');
        $works_title.toggleClass('title-passive');
        $works_content.toggleClass('content-active');
        $works_content.toggleClass('content-passive');
        $works.toggleClass('icon-active');
        $works.toggleClass('icon-passive');
        $works_main.toggleClass('main-active');
        if( $skills_title.hasClass('title-active') == true ) {
            $skills_title.toggleClass('title-active');
            $skills_title.toggleClass('title-passive');
            $skills_content.toggleClass('content-active');
            $skills_content.toggleClass('content-passive');
            $skills.toggleClass('icon-active');
            $skills.toggleClass('icon-passive');
            $skills_main.toggleClass('main-active');
        }
        if( $about_title.hasClass('title-active') == true ) {
            $about_title.toggleClass('title-active');
            $about_title.toggleClass('title-passive');
            $about_content.toggleClass('content-active');
            $about_content.toggleClass('content-passive');
            $about.toggleClass('icon-active');
            $about.toggleClass('icon-passive');
            $about_main.toggleClass('main-active');
        }
    });
});