$(document).ready(function() {
    var plinks = [{
        name: 'YouTube',
        plink: 'https://www.youtube.com/user/nimu1337/'
		}, {
        name: 'Twitch',
        plink: 'https://twitch.tv/nimiiiiii/'
		}, {
        name: 'Twitter',
        plink: 'https://twitter.com/zxcvNimu/'
		}, ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 15000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});