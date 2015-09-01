$(function () {
    $('.video--header').waypoint(function () {
        $('.video--header').addClass('animated slideInLeft');
    }, {
        offset: '100%'});
});
$(function () {
    $('.video--text').waypoint(function () {
        $('.video--text').addClass('animated slideInLeft');
    }, {
        offset: '100%'});
});

$(function () {
    $('.btn-group-lg').waypoint(function () {
        $('.btn-group-lg').addClass('animated fadeInLeftBig');
    }, {
        offset: '100%'});
});

