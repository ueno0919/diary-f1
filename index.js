// 保存した日記を読み込み
window.onload = () =>{
    for(let i = 0; i < this.sessionStorage.length; i++){
        const key = this.sessionStorage.key(i);
        addTilleToSideBar(key);
        modalTextSetting();
    }
}

var diarySubmit = document.getElementById("diarySubmit");

diarySubmit.addEventListener("click",function(){
    var title = document.getElementById("diaryTitle");
    var content = document.getElementById("diaryContent");

    addTilleToSideBar(title.value);
    
    // セッションに日記を保存
    sessionStorage.setItem(title.value,content.value);

    modalTextSetting();
})

// モーダルテキストを取得
function modalTextSetting(){
    var diaryBox = document.getElementById("diaryBox");
    var titleList = Array.from(diaryBox.children);
    var modalTitleElement = document.getElementById("modal-diary-title");
    var modalContentElement = document.getElementById("modal-diary-content");
    
    var titleText;
    titleList.forEach(function(e){
        e.addEventListener("click", function(){
            titleText = e.children[0].innerHTML;
            modalTitleElement.innerHTML = titleText;
            modalContentElement.innerHTML = sessionStorage.getItem(titleText);
        });
    });
}

// サイドバーにタイトルを追加
function addTilleToSideBar(titleText){
    // モーダルトリガーを初期化
    var diaryItem = document.createElement("li");
    diaryItem.classList.add("nav-item");
    var modalButton = document.createElement("button");
    modalButton.classList.add("btn");
    modalButton.classList.add("btn-link");
    modalButton.setAttribute("data-bs-toggle","modal");
    modalButton.setAttribute("data-bs-target","#exampleModal");
    modalButton.innerHTML = titleText;

    // 要素を追加
    diaryItem.appendChild(modalButton);
    var diaryBox = document.getElementById("diaryBox");
    diaryBox.appendChild(diaryItem);
}




