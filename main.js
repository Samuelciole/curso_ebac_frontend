$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    


    $('form').on('submit',function(e){
        e.preventDefault()

        const addForm = $('#main-Form').val()
        const adicionar = $('<li></li>')
        $(`<li>${addForm}</li>`).appendTo(adicionar)
        $(adicionar).appendTo('ul')
        $('#main-Form').val('')

        $('ul li').on('click', 'li', function(){
            $(this).toggleClass('completada')
        })
       
    })

  

})