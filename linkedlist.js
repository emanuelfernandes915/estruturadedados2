class LinkedList{
    /* Cria-se um método Construtor o qual será implementado assim que o documento
     for aberto ou atualizado (instância). Acarreta-se, portanto, na atribuição de 
     um valor "null" (vazio) ao atributo "head" do Objeto que o "chamar" e um valor
     inteiro 0 (zero) ao atributo "length" do mesmo Objeto. */
    constructor(){
        this.head = null;
        this.length = 0;
    }

    /* Cria-se um método show(), o qual estabelecendo uma variável local "current",
     permitindo a atribuição do valor do atributo "head", assim como um valor String 
     vazio à variável output, varre-se a lista, mostrando os valores que foram adicionados. */
    show (separator=', '){
        let current = this.head,
            output = '';
        if(current!=null){
            output += current.content;
            while(current.next){
                current = current.next;
                output += separator + current.content;
            }
        }
        return output;
    }
    
    /* Adiciona-se o elemento após verificar, através do método isEmpty(), se a lista
     está ou não vazia. Estando vazia, o atributo "head" recebe a variável local "node".
     Se não estiver vazia, então a variável atual recebe a da posição posterior. 
     Contudo, ampliando o tamanho da lista de acordo com a inserção. */
    append(element){
        let node = new Node(element),
            current = this.head;
        if(this.isEmpty()){
            this.head = node;
        } else{
            while(current.next)
                current = current.next;
            current.next = node;
        }
        this.length++;
    }

    /* Insere-se o elemento dada a posição de inserção. A primeira posição não terá 
     ponteiro para uma posição anterior, fazendo-se necessário uma condição a qual 
     valide isso. Apartir da segunda posição em diante (>= 1) haverão ponteiros para 
     a posição anterior e posterior, sendo preciso uma estrutura de repetição a qual 
     possibilite a atribuição do valor da posição atual à posição anterior e o valor
     da posição posterior à atual. Contudo, ampliando o tamanho da lista de acordo 
     com a inserção. */
    insert(position, element){
        if(position > -1 && position <= this.size()){
            let node = new Node(element),
                current = this.head,
                previous = null,
                index=0;
            if(position===0){
                node.next = this.head;
                this.head = node;
            } else {
                while(index<position){
                    index++;
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            this.length++;
            return true;
        }
        return false;
    }
    
    /* Remove-se um elemento dada sua posição. Após verificar se a posição é 0 (zero), 
     se for, então a primeira posição recebe a próxima do elemento atual. Se for falsa, 
     a posição anterior recebe o valor da posição atual, a posição atual recebe a posição
     posterior e, independentemente de tais atribuições, a posição atual (previous.next) 
     recebe a posição posterior da atual (current.next), anulando-se, portanto, o elemento 
     em questão e reduzindo o tamanho da lista. */
    removeAt(position){
        if(position > -1 && position < this.size()){
            let current = this.head,
                previous = null,
                index=0;
            if(position===0){
                this.head = current.next;
            } else {
                while(index<position){
                    index++;
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            current.next=null;
            this.length--;
            return current.content;
        }
        return null;
    }
    
    /* Remove-se o elemento após retornar o índice do mesmo quando localizado, através
     do método indexOf(), atribuindo-o à variável local "index" a qual será utilizada
     como argumento para o método removeAt() atuar na remoção. */
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    /* Localiza-se o índice do elemento passado como parâmetro. Verifica-se, portanto,
     se o valor da posição atual é diferente de "null", logo dando início à estrutura
     de repetição a qual varre a lista buscando o conteúdo que for igual ao valor do
     elemento em questão, retornando-o caso encontrado. */
    indexOf(element){
        let current = this.head,
            index = 0;
        while(current!==null){
            if(current.content===element){
                return index;
            }
            index++
            current = current.next;
        }
        return -1;
    }
    
    /* Verifica-se se o valor da primeira posição é "null". Se for, conclui-se que a 
     lista está vazia.*/
    isEmpty(){
        return this.head === null;
    }
    
    /* Retorna-se o tamanho da lista. */
    size(){
        return this.length;
    }
    
    /* Captura-se o elemento ao passar a posição como parâmetro e após a lista ser
     varrida, retorna-se o elemento cujo índice for igual a posição informada. */
    getElement(position){
        let current = this.head,
            index = 0;
            while(current!==null){
                if(index===position){
                    return current.content;
                }
                index++
                current = current.next;
            }
            return null;
    }

    /* Retorna-se através do método indexOf() a posição do valor a ser pesquisado. */
    search(value){
        return this.indexOf(value) >= 0;
    }

}