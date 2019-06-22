class StaticQueue{

    /* O construtor é estabelecido inicializando um vetor (array) "data" vazio. */
    constructor(){
        this.data = [];
    }

    /* Enfileira-se o elemento utilizando o método push() o qual insere-o no final
     da fila. */
    enqueue(element) {
        this.data.push(element);
    }

    /* Desenfileira-se o primeiro elemento utilizando o método shift() o qual remove-o do
     início da fila. */
    dequeue(){
        return this.data.shift();
    }

    /* Retorna-se o conteúdo da primeira posição da fila (array). */
    front() {
        return this.data[0];
    }
    
    /* Retorna-se o conteúdo da última posição da fila (array). */
    back(){
        return this.data[this.data.length-1];
    }
    
    /* Retorna-se o valor da última posição caso seja igual a "null". */
    isEmpty() {
        return (this.data.length===0);
    }

    /* Retorna-se o valor equivalente ao tamanho da fila (array) em questão. */
    size() {
        return this.data.length;
    }

    /* Limpa-se a fila, após o vetor (array) "data" receber uma estrutura vazia . */
    clear() {
        this.data = [];
    }

    /* Apresenta-se os elementos enfileirados separados por hífen, utilizando o
     método join() o qual, através do parâmetro "separator" mostra ao usuário
     a fila em ordenação estética. */
    print(separator=" - ") {
        return this.data.join(separator);
    }
}