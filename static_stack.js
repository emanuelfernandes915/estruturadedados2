    
    /* Inicia-se o construtor, informando o topo nulo */
class StaticStack{

    constructor(){
        this.data = [];
    }
    
    /* Inclui elementos sobrepostos */
    push(element){
        this.data.push(element);
    }

    /* É removido o elemento que se encontra no topo */
    pop(){
        return this.data.pop();
    }

    /* Verifica o índice do topo da pilha, subtraindo meno um (-1)
       do tamanho da pilha */
    peek(){
        return this.data.length -1;
    }

    /* Verifica se a variável é igual a zero (0), se for, retorna verdadeiro */
    isEmpty(){
        return (this.size()===0);
    }

    /* Verifica o tamanho da pilha */
    size(){
        return this.data.length;
    }

    /* Serve para limpar duma forma geral todos os elementos da pilha */
    clear(){
        this.data = [];
    }
    
    /* Mostra os elementos da pilha */
    print(separator=' - '){
        /*  Another implementation
        if(this.isEmpty()) return "";
        let text = this.data[this.peek()];
        for (let index = (this.peek()-1); index >= 0; index--){
            text+=separator+this.data[index];
        }
        return text; 
        */
        let text = "";
        for (let index = (this.data.length - 1); index >= 0; index--){
            text += this.data[index] + separator;
        }
        return text.substr(0, text.length - separator.length);
    }
}