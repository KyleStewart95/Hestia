/* The code that actually changes the font size */

let selectedSize = '';

/* Font-size functions */
function addFontSizeChoiceListener() {
    $("#font-size-choice").on("change", (e) => {
        selectedSize = e.target.value;
        setFontSize(selectedSize)
    });
}

function setFontSize(value) {
    $("p").css("fontSize", value);
    $("ul li").css("fontSize", value);
    $("a").css("fontSize", value);
    $("a:visited").css("fontSize", value);
}

function saveFont() {
    localStorage.setItem('fontSize', selectedSize);
}

function addFontSizeSaveButtonListener() {
    $("#save").on("click", (event) => {
        event.preventDefault();
        saveFont();
    });
}

function usePreferredFontSizeIfSet() {
    let storedSize = localStorage.getItem('fontSize');
    if (storedSize != null) {
        setFontSize(storedSize);
    }
}

/* Dark mode functions */
function getDarkModePreference() {
    return localStorage.getItem("darkMode");
}

function enableDarkMode() {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', null);
}

function addDarkModeTogglesListener() {
    function onDarkModeToggleClicked() {
        let darkMode = getDarkModePreference();

        // If it is not currently enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    // When someone clicks the button
    $("#dark-mode-toggle").on('click', onDarkModeToggleClicked);
}

function applyDarkModeIfSet() {
    let darkModeEnabled = getDarkModePreference();
    if (darkModeEnabled !== null)
        enableDarkMode();
}

function addNavigationHandlers() {
    $(document).on("click", () => {
        closeNav();
    });

    $("#openNavBtn").on("click", (e) => {
        e.stopPropagation();
        openNav();
    });

    $("#closeNavBtn").on("click", (e) => {
        e.stopPropagation();
        closeNav();
    });

    $("#mySidenav").on("click", (e) => {
        e.stopPropagation();
        return false;
    });
}

$(() => {
    // Side nav
    addNavigationHandlers();

    // Font size
    addFontSizeChoiceListener();
    addFontSizeSaveButtonListener();
    usePreferredFontSizeIfSet();

    // Dark mode
    addDarkModeTogglesListener();
    applyDarkModeIfSet();
});

//function for opening and closing the navigation

function openNav() {
    $("#mySidenav").removeClass("sidenav-hidden").addClass("sidenav-visible");
    $("#main")[0].style.marginLeft = "20%";
}

function closeNav() {
    $("#mySidenav").removeClass("sidenav-visible").addClass("sidenav-hidden");
    $("#main")[0].style.marginLeft = "0%";
}

function refresh() {
    if(new Date().getTime() - time >= 60000) //Set to 1 min for testing purposes. set to 300000 for 5 mins.
        window.location.reload(true);
    else
        setTimeout(refresh, 10000);
}

setTimeout(refresh, 10000);