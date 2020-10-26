const sendButton = document.getElementById('sendButton')

sendButton.onclick = () => {
    var userId = document.getElementById('commandInput').value

    location.href = `/admin/user/${userId}`
}