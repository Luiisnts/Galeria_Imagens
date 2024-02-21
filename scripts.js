    $(document).ready(function(){

        const baseImagens = {
            todas:['imagem.jpg', 'animal.jpg', 'natureza.jpg', 'cidade.jpg'],
            animais:['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpg'],
            natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg', 'natureza3.jpg'],
            cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg', 'cidade3.jpg'],
        }
    
        function carregaImagens(){
            console.log(baseImagens);
            alert(categoria);
        }

        $('.botao-categoria').on('click',function(){
            $('body').find('.botao-categoria').removeClass(''active');
            $(this).addclass('active');
            carregaImagens(categoria);
            
        });

    });