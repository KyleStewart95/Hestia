/**
 * Add 'input' event listeners to all sliders
 * to update the according to the current value.
 *
 * The function also sets the default labels value.
 */
function addSliderInputListener() {
    function setLabel(slider, label) {
        label.html(slider.value);
    }

    $(".slider1").each((index, slider) => {
        const labelId = "#lightValue" + (index + 1).toString();
        const correspondingLabel = $(labelId);
        setLabel(slider, correspondingLabel);

        $(slider).on("input", () => {
            setLabel(slider, correspondingLabel);
        })
    });
}

/**
 * Add listeners to the plus and minus buttons that updates
 * the temperature control accordingly.
 */
function addTemperatureControlListener() {
    function onTemperatureChange() {
        $("#count").val(currentTemperature);
    }

    let currentTemperature = 18;

    $("#plus").on("click", () => {
        if (currentTemperature >= 30)
            return;

        currentTemperature++;
        onTemperatureChange();
    });

    $("#mins").on("click", () => {
        if (currentTemperature <= 1)
            return;

        currentTemperature--;
        onTemperatureChange();
    });
}

/**
 * Add listeners to all light toggle switches to show/hide
 * the additional brightness and colour controls.
 */
function addLightButtonListener() {
    const switches = $(".lightSwitch");

    switches.each((index, element) => {
        $(element).on("click", () => {
            const id = "#light" + (index + 1).toString();
            const div = $(id)[0];

            div.style.display = (div.style.display === "block") ? "none" : "block";
        });
    });
}

$(() => {
    addSliderInputListener();
    addTemperatureControlListener();
    addLightButtonListener();
});
