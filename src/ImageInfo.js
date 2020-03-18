let mouseOver = true;

function clickTest(event){
  console.log($target);
}

class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }
  
  render() {

    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper" id="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close" id="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      


      
      
      this.$imageInfo.style.display = "block";
      
      const close = document.getElementById("close");
      const content = document.getElementById("content-wrapper");
      

      // X 버튼 누를 시 닫힘
      close.addEventListener("click", () => this.$imageInfo.style.display = "none");

      // ESC 누를 시 닫힘
      window.addEventListener("keydown", event => event.which == 27 ? this.$imageInfo.style.display = "none" : "");

      // 바깥 레이아웃 누를 경우 닫힘
      content.addEventListener("mouseover", () => mouseOver = true);
      content.addEventListener("mouseout", () => mouseOver = false);
    


    } else {
      this.$imageInfo.style.display = "none";
      mouseOver = true;

    }
  }
}
