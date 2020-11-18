
/*==================================================

** アコーデォンメニュー
==================================================*/
/*  Menu開いたまま */
jQuery(function ($) {
  $('.js-question_voice').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });

  });

/* Menu一つのみ開く */
  $(function () {
    //中のコンテンツを隠す
    $(".panel-inbox").css("display", "none");
    //タイトルがクリックされたら
    $(".js-flowsp-title").click(function () {
      //クリックしたjs-flowsp-title以外の全てのopenを取る
      $(".js-flowsp-title").not(this).removeClass("open");
      //クリックされたtitle以外のcontentを閉じる
      $(".js-flowsp-title").not(this).next().slideUp(300);
      //thisにopenクラスを付与
      $(this).toggleClass("open");
      //thisのcontentを展開、開いていれば閉じる
      $(this).next().slideToggle(300);
    });
  });
