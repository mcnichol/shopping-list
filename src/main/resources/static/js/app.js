(function () {
    //Do work
})();

function addListItem() {
    var productList = document.getElementById("product-list");

    var label = document.createElement("label");
    label.innerText = "Enter List Item:";

    var input = document.createElement("input");
    input.id = "new-list-item";
    input.onblur = function (e, el) {
        var text = e.target.value;
        document.getElementById(e.target.id).parentElement.remove();

        var li = document.createElement("li");
        li.innerText = text;
        productList.append(li);
    };

    var listContainer = document.createElement("div");
    listContainer.append(label, input);

    productList.append(listContainer);
}