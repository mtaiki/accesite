$(function() {
    // drawer.js
    $('.drawer').drawer();

    // スムーススクロール
    $('a[href^="#"]').click(function() {

        //headerクラスがついた要素の高さを取得
        let header = $(".header").innerHeight();
        // topの戻るスピード
        let speed = 400;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idのの値が#だけだったらターゲットをhtmlタグにしてtopに戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        if ("fixd" !== $(".header").css("position")) {
            position = $(target).offset().top;
        }
        if (0 > position) {
            position= 0;
        }
        $("html, body").animate(
            {
                scrollTop: position - $("#js-header").outerHeight()
            },
            speed
        );
        return false;
    });

    // wowjs
    new WOW().init();

    // googleform
    let $form = $('#js-form')
    $form.submit(function (e) { 
        $.ajax({ 
          url: $form.attr('action'), 
          data: $form.serialize(), 
          type: "POST", 
          dataType: "xml", 
          statusCode: { 
            0: function () {
                //送信に成功したときの処理
                $form.slideUp()
                $('#js-success').slideDown()
            }, 
            200: function () { 
                //送信に失敗したときの処理
                $form.slideUp()
                $('#js-error').slideDown() 
            } 
          } 
        }); 
        return false; 
      }); 

    // formの入力確認
    let $submit = $('#js-submit')
    $('#js-form, #js-form textarea').on('change', function() {
        if(
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.2067475509"]').prop('checked') === true
        ) {
            // 全て入力された時
            $submit.prop("disabled", false);
            $submit.addClass("-active");
        } else {
            // 入力されていない時
            $submit.prop("disabled", true);
            $submit.removeClass("-active");
        }
    });
});