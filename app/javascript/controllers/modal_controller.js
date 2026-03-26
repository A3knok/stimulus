import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  static targets =["modal", "background"]

  open() {
    this.modalTarget.classList.remove("d-none")
    this.backgroundTarget.classList.remove("d-none")
  }

  close() {
    this.modalTarget.classList.add("d-none")
    this.backgroundTarget.classList.add("d-none")
  }

  closeOnBackground(e) {
    // 背景自体がクリックされた場合のみモーダルを閉じる
    // (モーダル本体のクリックでは閉じない)
    if (e.target == this.backgroundTarget) {
      this.close()
    }
  }
}
