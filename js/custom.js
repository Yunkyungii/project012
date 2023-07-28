$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        // 페이지에 이름 붙이기
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        // responsiveHeight: 1200,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on')
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on')
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on')
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on')
            console.log(idx, nidx, dir)

            if (dir == 'up') {
                $('.header').addClass('on')
            }
            else {
                $('.header').removeClass('on')
            }
        },
    });


    $('.left_slide').slick({
        arrows: false,
        vertical: true,
    });
    $('.right_slide').slick({
        arrows: false,

    });
    $('.center_slide').slick({
        arrows: true,
    });
})