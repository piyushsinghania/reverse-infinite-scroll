const list = document.getElementById('list');
const items = document.getElementsByClassName('item');

const generateElements = (lastItem) => {
  const number = +lastItem.innerHTML;
  const elements = [];

  for (let i = 1; i <= 9; i++) {
    const element = document.createElement('div');
    element.classList.add('item');
    element.innerHTML = number + i;
    elements.push(element);
  }

  return elements;
};

const isElementInScrollView = (el, parent) => {
  const rect = el.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();

  return (
    rect.top >= parentRect.top &&
    rect.left >= parentRect.left &&
    rect.bottom <= parentRect.bottom &&
    rect.right <= parentRect.right
  );
};

list.addEventListener('scroll', () => {
  const lastItem = document.querySelector('.item:last-child');

  if (isElementInScrollView(lastItem, list)) {
    const newElements = generateElements(lastItem);
    list.append(...newElements);
  }
});
