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
                {
                    name: 'task 1',
                    is_done: false,
                },
                {
                    name: 'task 2',
                    is_done: true,
                },
                {
                    name: 'task 3',
                    is_done: false,
                },
                {
                    name: 'task 4',
                    is_done: true,
                },
            ]
        },
        // 監視
        watch: {
            /**
             * @name todos
             * タスクの増減のみを監視する
             */
            /*
            todos: function(){
                localStorage.setItem('todos', JSON.stringify(this.todos));
                alert("Data saved!");
            }
            */
            /**
             * @name todos
             * タスクの内部（プロパティ / 値）も監視する
             */
            todos: {
                handler: function(){
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                },
                deep: true
            }
        },
        // 関数
        methods: {
            // タスク追加
            addTask: function(){
                var newTask = {
                    name: this.task,
                    is_done: false
                }
                this.todos.push(newTask); 
                // todoの追加後に入力欄を空にする
                this.task = "";
            },
            // タスク削除
            deleteTask: function(index){
                if(confirm("you done?")){
                    this.todos.splice(index, 1);
                }
            },
            // 処理済みタスクの削除
            purge: function(){
                if(!confirm('delete finished task?')){
                    return;
                }
                this.todos = this.remaining;
            }
        },
        // 算出プロパティ
        computed: {
            /**
             * @name remaining
             * @returns 残りのタスク
             */
            remaining: function(){
                return this.todos.filter(function(todo){
                    return !todo.is_done;
                });
            }
        }
    });
})();