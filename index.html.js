const socket = io();
socket.on("message", addMessages);

$(() => {
  $("#send").click(() => {
    sendMessage({
      name: $("#name").val(),
      message: $("#message").val(),
    });
  });

  getMessages();
});

function addMessages(message) {
  $("#messages").append(`
    <h4> ${message.name} </h4>
    <p>  ${message.message} </p>`);
}

function getMessages() {
  $.get("http://localhost:3000/messages", (data) => {
    if (!data.error) {
      data.messages.forEach(addMessages);
    } else {
      addMessages(data.error);
    }
  });
}

function sendMessage(messageData) {
  $.post("http://localhost:3000/messages", messageData).done((data) => {
    $("#name").val("");
    $("#message").val("");
  });
}
