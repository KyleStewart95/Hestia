class Theme {
    name;
    cssClass;
    prefix; // For image prefixes

    constructor(name, cssClass, prefix) {
        this.name = name;
        this.cssClass = cssClass;
        this.prefix = prefix;
    }

    get name() {
        return this.name;
    }

    get cssClass() {
        return this.cssClass;
    }

    get prefix() {
        return this.prefix;
    }
}

let selectedTheme = null;

const Themes = Object.freeze([
    new Theme("Dark Mode", null, 'd_'),
    new Theme("Light Mode", "whiteMode", 'l_'),
    new Theme("High Contrast Mode", "contrastMode", 'c_'),
    new Theme("Red Mode", "redMode", 'r_'),
    new Theme("Green Mode", "greenMode", 'g_'),
    new Theme("Blue Mode", "blueMode", 'b_')
]);

function usePreferredThemeColorIfSet() {
    let name = localStorage.getItem('theme');
    if (name == null)
        return;

    let theme = Themes.find((e) => e.name === name);
    selectedTheme = theme;
    setThemeColor(theme);
}

function setThemeColor(newTheme) {
    let body = $("body");
    body.removeClass();

    if (newTheme.cssClass != null)
        body.addClass(newTheme.cssClass);

    replaceImages(newTheme);
}

function replaceImages(newTheme) {
    const regex = '/[a-z]_';
    $("img").each(function () {
        let src = $(this).attr('src');
        let newSrc = src.replace(regex, newTheme.prefix);
        $(this).attr('src', newSrc);
    });
}

function addThemeColorChoiceListener() {
    $("#theme-color-choice").on("change", (e) => {
        let selected = e.target.value;
        let theme = Themes.find((theme) => theme.name === selected);
        selectedTheme = theme;
        setThemeColor(theme)
    });
}

function addThemeColorSaveButtonListener() {
    $("#saveTheme").on("click", (event) => {
        event.preventDefault();
        saveTheme();
    });
}

function saveTheme() {
    if (selectedTheme == null)
        return;

    localStorage.setItem('theme', selectedTheme.name);
}

$(() => {
    addThemeColorChoiceListener();
    addThemeColorSaveButtonListener();
    usePreferredThemeColorIfSet();
    replaceImages(selectedTheme);
});
