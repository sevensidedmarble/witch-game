window.addEventListener("load", () => {
  console.log("loaded")

  var elements = document.querySelectorAll('[data-channel-subscribe="room"]')
  Array.prototype.forEach.call(elements, function(el, i){
    let element = document.querySelector(el)
    let room_id = element.data('room-id')
    let messageTemplate = document.querySelector('[data-role="message-template"]')

    // element.animate({ scrollTop: element.prop("scrollHeight")}, 1000)

    App.cable.subscriptions.create(
      {
        channel: "RoomChannel",
        room: room_id
      },
      {
        received: function(data) {
          console.log(data)
          console.log("ELEMENT RECEIVED")
          // var content = messageTemplate.children().clone(true, true);
          // content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
          // content.find('[data-role="message-text"]').text(data.message);
          // content.find('[data-role="message-date"]').text(data.updated_at);
          // element.append(content);
          // element.animate({ scrollTop: element.prop("scrollHeight")}, 1000);
        }
      }
    )
  })
})
