const uri = '/seminarkurs-2023';

function load_navbar() {
    $('#header').load(uri + '/navbar.html');
}

function load_footer() {
    $('#footer').load(uri + '/footer.html');
}

load_navbar();
load_footer();