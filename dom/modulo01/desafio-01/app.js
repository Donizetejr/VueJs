new Vue({
    el: '#desafio',
    data: {
        nome: 'Donizete',
        idade: '21',
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeXtres(){
            var newIdade = this.idade * 3
            return newIdade
        },
        numRandom(){
            return Math.random()
        }
    }
})