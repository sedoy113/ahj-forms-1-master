export default class Popover {
  constructor(element) {
    this.button = element;
    this.showPopover = this.showPopover.bind(this);
  }

  initPopover() {
    this.createPopover();
    this.button.addEventListener('click', this.showPopover);
  }

  createPopover() {
    this.popContainer = document.createElement('div');
    this.popContainer.classList.add('pop_container');
    const popTitle = document.createElement('div');
    popTitle.classList.add('pop_title');
    popTitle.innerText = this.button.dataset.popoverTitle;
    const popText = document.createElement('div');
    popText.classList.add('pop_text');
    popText.innerText = this.button.dataset.popoverContent;
    this.popContainer.append(popTitle, popText);
  }

  showPopover() {
    if (document.body.contains(this.popContainer)) {
      this.popContainer.remove();
      return;
    }

    this.button.after(this.popContainer);

    const coords = this.button.getBoundingClientRect();
    this.popContainer.style.left = `${window.scrollX + coords.left + this.button.offsetWidth / 2 - this.popContainer.offsetWidth / 2}px`;
    this.popContainer.style.top = `${window.scrollY + coords.top - this.popContainer.offsetHeight - 5}px`;
  }
}
