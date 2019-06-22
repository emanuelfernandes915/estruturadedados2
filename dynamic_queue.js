class DynamicQueue{
    /* Estabele-se um método construtor o qual é chamado após a abertura da página web
     ou atualização da mesma. Portanto, são declarados os atributos do Objeto Fila:
      - "head": primeira posição incializa com um valor "null".
      - "tail": última posição incializa com um valor "null".
      - "length": tamanho da fila em questão. */
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Enfileira-se o elemento após a verificação se a fila está vazia. Estando vazia, a primeira
     posição recebe o ponteiro. Caso contrário, o ponteiro da próxima posição em relação a última
     posição recebe o ponteiro em questão. Logo, a última posição recebe o ponteiro, como também
     o tamanho da fila é ampliado. */
    enqueue(element) {
        let node = new Node(element);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    /* Desenfileira-se o elemento após, com o auxílio das variáveis locais "deadElement" e "deadNode",
     o elemento da primeira posição ser substitúido pelo elemento da próxima posição, além do
     tamanho da fila ser reduzido. Isso ocorre caso o tamanho seja maior do que um (> 1). Caso contrário,
     usa-se o método clear() para esvaziar a fila, e o "deadElement" recebe o conteúdo da última
     posição. */
    dequeue(){
        let deadElement = null;
        if(this.length===1){
            deadElement = this.tail.content;
            this.clear();
        }else if(this.length>1){
            let deadNode = this.head;
            this.head = this.head.next;
            deadNode.next = null;
            deadElement = deadNode.content;
            this.length--;
        }
        return deadElement;
    }

    /* Retorna-se o conteúdo da primeira posição da fila. */
    front(){
        return this.head.content;
    }

    /* Retorna-se o conteúdo da última posição da fila. */
    back(){
        return this.tail.content;
    }

    /* Retorna-se o valor da última posição caso seja igual a "null". */
    isEmpty(){
        return this.tail===null;
    }

    /* Retorna-se o valor equivalente ao tamanho da fila em questão. */
    size() {
        return this.length;
    }

    /* Limpa-se a fila, após a primeira e última posições receberem o valor "null".
     Além do tamanho receber o valor inteiro 0 (zero). */
    clear() {
        this.tail=this.head=null;
        this.length=0;
    }

    /* Apresenta-se os elementos enfileirados separados por hífen, porém utilizando-se
     do método substr() para substituir o último hífen por uma String vazia, valorizando,
     portanto, a questão estética. */
    print(separator=" - ") {
        let output = "";
        for (let node = this.head; node!=null; node = node.next) {
            output+=node.content+separator;
        }
        return output.substr(0, output.length-separator.length);
    }
}