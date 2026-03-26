import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dynamic-select"
export default class extends Controller {
  static targets = ["parent", "child", "data"]

  connect() {
    // Javascriptで使えるようにデータ形式を変換
    this.options = JSON.parse(this.dataTarget.textContent)
  }

  updateChild() {
    const selectedParentValue = this.parentTarget.value

    this.childTarget.innerHTML = '<option value="">選択してください</option>'

    this.options[selectedParentValue].forEach(option => {
      const optionElement = document.createElement('option')
      optionElement.value = option.value
      optionElement.text = option.text
      this.childTarget.appendChild(optionElement)
    })
  }
}
