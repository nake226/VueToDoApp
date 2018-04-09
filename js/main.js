/*
 * vueの特徴：双方向データバインディング（data <-> UI）
 */
(function(){
    'use strict';
    var app_vm = new Vue({
        // 結合する要素
        el: '#app',
        // データ
        data: {
            name: "",
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
            },
            deleteTask: function(index){
                if(confirm("you done?")) {
                    this.todos.splice(index, 1);
                }
            }
        }
    });
})();