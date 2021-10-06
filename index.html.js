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
  console.log("message");
  console.log(message);
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
    addMessages(data.message);
  });
}
