const error_message = document.querySelector(".error");
const display_card = document.querySelector(".diss_sect");
const subcribe_btn = document.querySelector(".subcribe_btn");
const email_text = document.querySelector(".email_info");
const main_hid = document.querySelector(".main_hid");

error_message.classList.add("hidden");

subcribe_btn.addEventListener("click", function () {
  const email_input = document.querySelector(".email_input").value;
  const valid_email = emailValidator(email_input);
  if (valid_email) {
    // If email is valid
    console.log(`${email_input} is valid`);
    display_card.classList.remove("hidden");
    main_hid.classList.add("hidden");
    // text for display card
    email_text.textContent = email_input;
  } else {
    // Email is not valid
    console.log(`${email_input} is not valid`);
    error_message.classList.remove("hidden");
    email_input.style.borderColor = "red";
  }
});

display_card.addEventListener("click", function () {
  display_card.classList.add("hidden");
  main_hid.classList.remove("hidden");
});

// Email Validator
function emailValidator(email = "") {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (validRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}
