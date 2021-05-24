var elements = document.getElementsByClassName("column");
var i;

// Список
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "97%";
  }
}

// Плитка
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "47%";
  }
}

// Для изображений

$(".images-grid-demo").imagesGrid();

$(".images-grid-demo").imagesGrid({
  rowHeight: 150
});

$(".images-grid-demo").imagesGrid({
  margin: 1
});