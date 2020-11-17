'use strict';
// タスク新規作成画面(item.html)

// 作成ボタン処理
const newbtntext = document.querySelector(".newcreate-btn");/*クラス「newcreate-btn」を読み込んで定数「newbtntext」に代入*/

newbtntext.addEventListener('click', onClickButton);/*対象要素「newbtntext」をクリックしたら「onClickButton」で宣言した関数を実行*/
function onClickButton(){/*関数「onClickButton」を宣言*/
  window.alert("作成しました！");/*アラートで「作成しました」を表示*/
}

//やりたい動作//

// タスク名表示
// １、create画面で作成したタスク名を取得(getElementByid)
// ２、create画面で作成したタスク名を表示(getElementByid)?
// ３、タスクが無い場合は「現在タスクはありません」と表示(if)
//
// 件数表示
// １、タスク毎に合計件数を取得(getElementByid)
// ２、タスク毎に合計件数を表示(getElementByid)?
// ３、タスクが0件の場合はタスク表示同様「現在タスクはありません」と表示(if)
