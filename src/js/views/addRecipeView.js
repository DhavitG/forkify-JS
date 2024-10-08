import View from "./View";
import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _message = "Recipe was successfully uploaded!";

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addhandlerHideWindow();
  }

  toggleWindow() {
    this._window.classList.toggle("hidden"); // here this keyword would've pointed to _btnOpen
    this._overlay.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addhandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const dataArr = [...new FormData(this._parentElement)]; // returns a weird object so we convert it into array
      const data = Object.fromEntries(dataArr); // converts array to object
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
