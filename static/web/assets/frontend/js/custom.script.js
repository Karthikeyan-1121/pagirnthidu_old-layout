/* To Fix Header */
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const placeholder = document.createElement("div");
    const headerHeight = header.offsetHeight;

    placeholder.style.height = headerHeight + "px";
    placeholder.style.display = "none";
    header.parentNode.insertBefore(placeholder, header);

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            header.classList.add("fixed-header");
            placeholder.style.display = "block";
        } else {
            header.classList.remove("fixed-header");
            placeholder.style.display = "none";
        }
    });
});




/* Ellipsis for campaign title */
$(document).ready(function () {
    $('.title_sort').css({
        'display': 'block',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'width': '100%' // Adjust or hardcode if needed
    });
});




/* Stepper */
(function ($) {
    "use strict";
    $(function () {
        $(document).ready(function () {
            var $progressWizard = $(".stepper"),
                $btn_prev = $progressWizard.find(".prev-step"),
                $btn_next = $progressWizard.find(".next-step"),
                $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
                $tooltips = $progressWizard.find('[data-toggle="tab"][title]');

            $tooltips.tooltip();

            $tab_toggle.on("show.bs.tab", function (e) {
                if ($(e.target).parent().hasClass("disabled")) {
                    return false;
                }
            });

            // NEXT BUTTON with validation
            $btn_next.on("click", function () {
                var $currentTab = $(this).closest(".tab-pane");
                var $inputs = $currentTab.find("input, select, textarea");
                var isValid = true;
                var firstInvalid = null;

                // Validation rules
                $inputs.each(function () {
                    var $input = $(this);
                    var val = $input.val().trim();
                    var name = $input.attr("name");
                    var required = $input.prop("required");
                    var error = "";

                    if (required && !val) {
                        error = "This field is required.";
                    } else {
                        // Specific validations
                        if (name === "mail-id") {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(val)) error = "Enter a valid email.";
                        } else if (name === "Phone-number") {
                            if (!/^\d{10}$/.test(val)) error = "Phone number must be 10 digits.";
                        } else if (name === "PAN-card-number") {
                            if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(val)) error = "Invalid PAN format.";
                        } else if (name === "aadhar-no" && val) {
                            const cleanedVal = val.replace(/\s/g, ''); // Remove spaces before testing
                            if (!/^\d{12}$/.test(cleanedVal)) {
                                error = "Aadhar number must be 12 digits.";
                            }
                        } else if (name === "Postal-code") {
                            if (!/^\d{6}$/.test(val)) error = "Postal code must be 6 digits.";
                        }
                    }

                    if (error) {
                        $input.addClass("is-invalid");
                        if ($input.next(".invalid-feedback").length === 0) {
                            $input.after('<div class="invalid-feedback d-block">' + error + '</div>');
                        } else {
                            $input.next(".invalid-feedback").text(error);
                        }

                        if (!firstInvalid) {
                            firstInvalid = $input;
                        }

                        isValid = false;
                    } else {
                        $input.removeClass("is-invalid");
                        $input.next(".invalid-feedback").remove();
                    }
                });

                if (!isValid) {
                    if (firstInvalid) {
                        $('html, body').animate({
                            scrollTop: firstInvalid.offset().top - 100
                        }, 500);
                        firstInvalid.focus();
                    }
                    return false;
                }

                var $tab_active = $progressWizard.find(".nav-tabs > .active");
                var $tab_next = $tab_active.next();

                $tab_next.removeClass("disabled");
                $tab_next.find('a[data-toggle="tab"]').tab('show');
            });

            // Restrict input types and lengths for specific fields
            $("input[name='Phone-number']").on("input", function () {
                this.value = this.value.replace(/\D/g, '').substring(0, 10); // Only digits, max 10
            });

            $("input[name='PAN-card-number']").on("input", function () {
                this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10); // Uppercase letters/numbers, max 10
            });

            // Aadhar number masking and length limitations
            $("input[name='aadhar-no']").on("input", function () {
                let val = this.value.replace(/\D/g, '').substring(0, 12); // Digits only, max 12
                let parts = val.match(/.{1,4}/g); // Split into chunks of 4
                this.value = parts ? parts.join(" ") : "";
            });

            $("input[name='Postal-code']").on("input", function () {
                this.value = this.value.replace(/\D/g, '').substring(0, 6); // Only digits, max 6
            });


            // PREVIOUS BUTTON
            $btn_prev.on("click", function () {
                var $tab_active = $progressWizard.find(".nav-tabs > .active");
                var $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
                $tab_prev.tab('show');
            });



        });
    });
})(jQuery);






/* To automatically add a red asterisk (*) after the <label> if form field is required */
$(document).ready(function () {
    $('input[required], select[required], textarea[required]').each(function () {
        var $input = $(this);

        // Skip radio inputs
        if ($input.attr('type') === 'radio') {
            return;
        }

        var $label = $input.closest('.form-group, .form-field, .form-row, div').find('label').first();

        // Avoid duplicates
        if (!$label.hasClass('required-mark-added')) {
            var currentText = $label.text().trim();
            $label.html(currentText + ' <span style="color: red;">*</span>');
            $label.addClass('required-mark-added');
        }
    });
});



/* Donation field if selected Other button */
const otherRadio = document.getElementById('dC');
const customAmountField = document.getElementById('customAmountField');
const customAmountInput = document.getElementById('customAmount');
const amountError = document.getElementById('amountError');
const minAmountError = document.getElementById('minAmountError');
const allRadios = document.querySelectorAll('input[name="check-substitution-2"]');

const MAX_AMOUNT = 100000;
const MIN_AMOUNT = 100;

allRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (otherRadio.checked) {
            customAmountField.style.display = 'block';
            setTimeout(() => customAmountInput.focus(), 100);
        } else {
            customAmountField.style.display = 'none';
            amountError.style.display = 'none';
            minAmountError.style.display = 'none';
        }
    });
});

let lastRawValue = '';

customAmountInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');

    if (parts.length > 2) {
        value = parts[0] + '.' + parts[1];
    }

    let [integerPart, decimalPart] = value.split('.');
    integerPart = integerPart ? integerPart.replace(/^0+(?=\d)/, '') : '0';

    let rawValue = Number(integerPart + (decimalPart ? '.' + decimalPart : ''));
    lastRawValue = rawValue;

    // Show max error immediately
    if (rawValue > MAX_AMOUNT) {
        amountError.style.display = 'block';
    } else {
        amountError.style.display = 'none';

        // Format with commas and decimals
        integerPart = Number(integerPart).toLocaleString('en-IN');
        if (decimalPart !== undefined) {
            decimalPart = decimalPart.slice(0, 2);
            e.target.value = `${integerPart}.${decimalPart}`;
        } else {
            e.target.value = integerPart;
        }
    }

    // Don't show min error here — only on blur
    minAmountError.style.display = 'none';
});

customAmountInput.addEventListener('blur', () => {
    if (lastRawValue < MIN_AMOUNT) {
        minAmountError.style.display = 'block';
    } else {
        minAmountError.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const otherRadio = document.getElementById("dC");
    const customAmountField = document.getElementById("customAmountField");
    const customAmountInput = document.getElementById("customAmount");
    const allRadios = document.querySelectorAll('input[name="donation-amount"]');

    allRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (otherRadio.checked) {
                customAmountField.style.display = "block";
                setTimeout(() => customAmountInput.focus(), 100);
            } else {
                customAmountField.style.display = "none";
                customAmountInput.value = "";
                document.getElementById("amountError").style.display = "none";
                document.getElementById("minAmountError").style.display = "none";
            }
        });
    });
});

/* To display dynamically (the selected donation amount & frequency) */
document.addEventListener("DOMContentLoaded", function () {
    const donationRadios = document.querySelectorAll('input[name="donation-amount"]');
    const frequencyRadios = document.querySelectorAll('input[name="donation-frequency"]');
    const customAmountField = document.getElementById("customAmountField");
    const customAmountInput = document.getElementById("customAmount");
    const donationAmountGet = document.getElementById("donationAmount-Get");
    const donationFrequencyText = document.getElementById("donationFrequency");
    const totalAmountSection = document.querySelector(".totalAmount");

    // Hide totalAmount initially
    totalAmountSection.style.display = "none";

    function getSelectedFrequency() {
        const selectedFrequency = document.querySelector('input[name="donation-frequency"]:checked');
        if (!selectedFrequency) return '';
        const label = document.querySelector(`label[for="${selectedFrequency.id}"]`);
        return label ? label.textContent : '';
    }

    function getSelectedAmount() {
        const customRadio = document.getElementById("dC");
        if (customRadio.checked) {
            const val = parseFloat(customAmountInput.value.replace(/[^0-9.]/g, ''));
            return isNaN(val) ? 0 : val;
        } else {
            const selectedAmount = document.querySelector('input[name="donation-amount"]:checked');
            const label = document.querySelector(`label[for="${selectedAmount.id}"]`);
            return label ? parseInt(label.textContent.replace(/[^0-9]/g, ''), 10) : 0;
        }
    }

    function updateTotalAmount() {
        const frequency = getSelectedFrequency();
        if (!frequency) {
            totalAmountSection.style.display = "none";
            return;
        }

        const amount = getSelectedAmount();
        donationAmountGet.textContent = amount.toLocaleString('en-IN');  // Comma for Indian format
        donationFrequencyText.textContent = `${frequency}`;
        totalAmountSection.style.display = "block";
    }

    donationRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            customAmountField.style.display = radio.id === "dC" ? "block" : "none";
            updateTotalAmount();
        });
    });

    frequencyRadios.forEach(radio => {
        radio.addEventListener("change", updateTotalAmount);
    });

    customAmountInput.addEventListener("input", updateTotalAmount);

    // Initial setup
    customAmountField.style.display = document.getElementById("dC").checked ? "block" : "none";
});


/* Error Toaster */
const toast = document.querySelector("#toast");
const toastTimer = document.querySelector("#timer");
const closeToastBtn = document.querySelector("#toast-close");

let countdown;

// Helper to reset animation
const resetAnimation = (el) => {
    el.style.animation = 'none';
    el.offsetHeight; // Force reflow
    el.style.animation = '';
};

// Close toast
const closeToast = () => {
    resetAnimation(toast);
    toast.style.animation = "close 0.4s ease-in forwards";
    toastTimer.classList.remove("timer-animation");
    clearTimeout(countdown);

    setTimeout(() => {
        toast.style.visibility = "hidden";
        toast.style.pointerEvents = "none";
    }, 400); // Match close animation
};

// Open toast with pulse glow
const openToast = (type = "error") => {
    toast.className = type; // Apply type class
    resetAnimation(toast);

    // Show + Animate with pulse
    toast.style.visibility = "visible";
    toast.style.pointerEvents = "auto";
    toast.style.animation = "open 0.4s ease-out forwards, pulse-glow 1.2s ease-out";

    // Restart timer animation
    toastTimer.classList.remove("timer-animation");
    void toastTimer.offsetWidth;
    toastTimer.classList.add("timer-animation");

    // Clear old timer, start new
    clearTimeout(countdown);
    countdown = setTimeout(() => {
        closeToast();
    }, 10000);

    // Remove pulse-glow after it finishes
    setTimeout(() => {
        toast.style.animation = "open 0.4s ease-out forwards";
    }, 1200);
};

// Close button listener
closeToastBtn.addEventListener("click", closeToast);