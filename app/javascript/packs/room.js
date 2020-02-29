// document.addEventListener('ajax:success', event => {
//   console.log("test")
//   alert("test")
//   let el = document.querySelectorAll('#new_room_message')
//   el.querySelector('input[type="text"]').val('');
// })

window.addEventListener("load", () => {
  const element = document.querySelector(".main-input")
  element.addEventListener("ajax:success", (event) => {
    console.log("success")
    element.querySelector('input[type="text"]').val('');
    // const [_data, _status, xhr] = event.detail
    // element.insertAdjacentHTML("beforeend", xhr.responseText)
  })
})
