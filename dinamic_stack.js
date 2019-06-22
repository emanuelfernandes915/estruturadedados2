   /* Inicia a cabeça com tamanho zero (0) e o topo nulo
   */
class DinamicStack{

    constructor(){
        this.top = null;
        this.length = 0;
    }
    
    /* Esse método inclui o elemento digita pelo usuário, 
        e esse número ficará no topo, onde o tamanho recebe
        um acréscimo de mais um (+1)
    */
    push(element){
        let node = new Node(element);
        if(!this.isEmpty()){
            node.next = this.top;
        }
        this.top = node;
        this.length++;
    }
    /* Esse método remove o elemento que se encontra no topo,
    caso não tiver nenhum elemento, ele retorna nulo. E, ao remover o elemento, 
    o próximo assume a posição de topo, e ele vai diminuindo, subtraindo menos um (-1)
    */
    pop(){
        if(this.isEmpty()) return null;
        let diedNode = this.top;
        this.top = this.top.next;
        diedNode.next = null;
        this.length--;
        return diedNode.content;
    }

    /* Tem a função de mostrar o índice do topo e 
    subtrai menos (-1) do tamanho da pilha
    */
    peek(){
        return this.length -1;
    }
    
    /* Retorna verdadeiro (true) se a variável for vazia; e falso (false)
        se ela não for vazia
    */
    isEmpty(){
        return this.top===null;
    }

    /* Mostra o tamanho da pilha
    */
    size(){
        return this.length;
    }

    /* Serve para remover (apagar) o elemento que está no topo da pilha
    */
    clear(){
        this.top=null;
        this.length = 0;
    }
    
    /* Mostra os elementos inseridos na pilha
    */
    print(separator=' - '){
        let text = "", current = this.top;
        while (current!==null){
            text += current.content + separator;
            current = current.next;
        }
        return text.substr(0, text.length - separator.length);
    }
}