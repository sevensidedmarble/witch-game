import consumer from "./consumer"

console.log("test!!")
consumer.subscriptions.create(
  {
    channel: "RoomChannel",
    room: room_id
  },
  {
    connected() {
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log(data)
      console.log("ELEMENT RECEIVED")
    }
  }
)

  // var elements = document.querySelectorAll('[data-channel-subscribe="room"]')
  // Array.prototype.forEach.call(elements, function(el, i){
  //   let element = document.querySelector(el)
  //   let room_id = element.data('room-id')
  //   let messageTemplate = document.querySelector('[data-role="message-template"]')

  //   // element.animate({ scrollTop: element.prop("scrollHeight")}, 1000)

  //   App.cable.subscriptions.create(
  //     {
  //       channel: "RoomChannel",
  //       room: room_id
  //     },
  //     {
  //       received: function(data) {
  //         console.log(data)
  //         console.log("ELEMENT RECEIVED")
  //         // var content = messageTemplate.children().clone(true, true);
  //         // content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
  //         // content.find('[data-role="message-text"]').text(data.message);
  //         // content.find('[data-role="message-date"]').text(data.updated_at);
  //         // element.append(content);
  //         // element.animate({ scrollTop: element.prop("scrollHeight")}, 1000);
  //       }
  //     }
  //   )
  // })
