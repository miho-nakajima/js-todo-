'use strict';
// タスク新規作成画面(item.html)

// 作成ボタン処理
const newbtntext = document.querySelector(".newcreate-btn");/*クラス「newcreate-btn」を読み込んで定数「newbtntext」に代入*/

newbtntext.addEventListener('click', onClickButton);/*対象要素「newbtntext」をクリックしたら「onClickButton」で宣言した関数を実行*/
function onClickButton(){/*関数「onClickButton」を宣言*/
  window.alert("作成しました！");/*アラートで「作成しました」を表示*/
}
