class ArrayList{  

    /* Cria-se um método Construtor o qual será implementado, assim que o documento
     for aberto ou atualizado. Acarreta-se, portanto, na atribuição de um vetor (array)
     vazio ao atributo "data" do Objeto que o "chamar". */
    constructor(){
        this.data=[];
    }

    /* Retornam-se os elementos do array (data) permitindo a passagem de parâmetros do separador,
     o qual é uma vírgula, mostrando assim ao usuário que chamar o método show() no console. */
    show(separator=', '){
        return this.data.join(separator);
    }

    /* Insere-se o argumento passado ao parâmetro "element" no metódo push(), adicionando o argumento
     em questão sempre no final do array (data). */
    append(element){
        this.data.push(element);
    }

    /* Insere-se elementos no array (data) de acordo com os parâmetros passados para o método splice():
     - O parâmetro "position" receberá o valor do índice de onde começará a inserção/remoção dos valores.
     - O parâmetro de número 2 o número de elementos que serão substituídos.
     - O parâmetro "element" receberá o valor a ser inserido. */
    insert(position, element){
        this.data.splice(position, 0, element);
    }
    
    /* Remove-se o elemento da posição indicada na lista utilizando-se o método splice():
     - O parâmetro "position" receberá o valor do índice o qual informa de onde começará a inserção/remoção
      dos valores.
     - O parâmetro "1" informa que apenas o elemento apartir do índice do parâmetro "position" será substituído. */
    removeAt(position){
        if (position > -1 && position < this.size())
        this.data.splice(position, 1);
    }

    /* Localiza-se o elemento pelo método indexOf() usando o parâmetro "element". Logo após, remove-se o elemento da
     posição indicada na lista utilizando-se o método removeAt() com o parâmetro "index" indicando, portanto, a posição.
     O resultado consiste na remoção do último elemento da lista. */
    remove(element){
        let index = this.indexOf(element);
        this.removeAt(index);
    }

    /* Localiza-se o índice do elemento passado como parâmetro "element" percorrendo todo o array (data) através de uma
     estrutura de repetição (for). */
    indexOf(element){
        for (let index = 0; index < this.data.length; index++)
            if(element===this.data[index]) 
                return index;
        return -1;
    }
    
    /* Verifica-se a possibilidade do tamanho do array (data) ser de índice 0 (zero), ou seja, a possibilidade de 
     está vazio. */
    isEmpty(){
        return this.size()===0;
    }

    /* Calcula-se o tamanho da lista através do retorno do resultado do método length do Objeto-array (data). */
    size(){
        return this.data.length;
    }
    
    /* Retorna-se o elemento localizado na posição de índice passado como parâmetro "position". */
    getElement(position){
        if (position >= 0 && position < this.size())
            return this.data[position];
        return null;
    }

    /* Retorna-se um valor verdadeiro ou falso de acordo com o parâmetro passado no método some() o qual atua como "regra
     de pesquisa". */
    search(value){
        return this.data.some((n)=> n===value)
    }
}