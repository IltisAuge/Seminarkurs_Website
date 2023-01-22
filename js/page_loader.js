const uri = '/seminarkurs-2023';

function load_navbar() {
    $('#header').load(uri + '/navbar.html');
}

function load_footer() {
    $('#footer').load(uri + '/footer.html');
}

function load_page(url) {
    document.location = uri + '/' + url;
}

load_navbar();
load_footer();