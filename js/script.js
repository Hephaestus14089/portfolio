$(() => {
    $('#hamburger').click(() => {
        $('.sidebar').css('display', 'inline-block');
        $('.space').css('display', 'none');
        $('#hamburger').css('display', 'none');
    });

    $('#cross').click(() => {
        $('.sidebar').css('display', 'none');
        $('.space').css('display', 'inline-block');
        $('#hamburger').css('display', 'inline');
    });
});