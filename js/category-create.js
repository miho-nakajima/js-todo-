"use strict";
// １、フォーム+色選択が完了したら作成ボタンを押せるように(getElementById.onchange?)
const btnCreate = document.getElementById("btnCreate");
const inputCreate = document.getElementById("js-create-input");

inputCreate.addEventListener("keyup", (event) => {
  console.log("value: ", event.target.value);
  const value = event.target.value;

  if (value.length <= 0) {
    // 0文字以下、btnCreate を disabed
    btnCreate.disabled = true;
  } else {
    // 1文字以上だったら、 btnCreate の disabled を解除
    btnCreate.disabled = false;
  }
});

// ２、作成ボタンをクリックしたら「作成しました」のアラート表示(addEventListener,alert)
btnCreate.addEventListener("click", (event) => {
  // localStorage 取得
  const ls = window.localStorage;
  // localStorage の categories を取得
  const categories = JSON.parse(ls.getItem("categories"));
  // categoris に新しいカテゴリを追加
  categories.push(inputCreate.value);
  // 新しいカテゴリーをlocalStoageに保存
  ls.setItem("categories", JSON.stringify(categories));

  alert("作成しました");
});
