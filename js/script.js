jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  const topBtn = $(".pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // ドロワーメニュー
  $(".js-hamburger, .js-drawer, .js-drawer a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  // スライダー（MV）
  const swiper1 = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });
  // スライダー（制作実績）
  const swiper2 = new Swiper(".swiper2", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // スクロールでヘッダーの背景色変更
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});
