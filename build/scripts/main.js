const error_message = document.querySelector(".error");
const diss_message = document.querySelector(".diss_sect");
const subcribe_btn = document.querySelector(".subcribe_btn");
const email_text = document.querySelector(".email_info");
const main_hid = document.querySelector(".main_hid");

error_message.classList.add("hidden");

const getEmailInputValue = () => {
  // Get the value of the email input when the button is clicked
  const email_input = document.querySelector(".email_input").value;
  return email_input;
};
subcribe_btn.addEventListener("click", function () {
  const get_email_input = getEmailInputValue();
  email_text.textContent = get_email_input;
  diss_message.classList.remove("hidden");
  main_hid.classList.add("hidden");
  console.log(get_email_input);
});

diss_message.addEventListener("click", function () {
  diss_message.classList.add("hidden");
  main_hid.classList.remove("hidden");
});
