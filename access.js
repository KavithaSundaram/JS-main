var ol = document.getElementById("list-container")
var input = document.getElementById("input")
function add()
{
    var listitem = document.createElement("li")
    listitem.innerHTML = input.value + "<button onclick='deleteItem(event)' id='btn' class='btn btn-danger'>Delete</button>"
    ol.append(listitem)
}
function deleteItem(event)
{
    event.target.parentElement.remove()
}

