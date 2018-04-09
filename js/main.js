/*
 * vueの特徴：双方向データバインディング（data <-> UI）
 */
(function(){
    'use strict';
    // UIに結びつくデータの設定
    var vm = new Vue({
        // 結合するUI
        el: '#name',
        // バインドする情報
        data: {
            name: ''
        }
    });

    var app_vm = new Vue({
        // 結合する要素
        el: '#app',
        // データ
        data: {
            task: "",
            todos: [
                'task 1',
                'task 2',
                'task 3'
            ]
        },
        // 関数
        methods: {
            addTask: function(){
                this.todos.push(this.task); 
                // todoの追加後に入力欄を空にする
                this.task = "";
            }
        }
    });
})();