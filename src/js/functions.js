$(document).ready(() => {

    let collapsed = false
    let menuOpen = false
    
    // Features navigation
    $('.features-link').click((event) => {
       
        let $dataIndex = $(event.currentTarget).attr('data-index')
        const $featuresContent = $('.features-content')     
      
        if ($dataIndex === "0") {
            $(event.currentTarget).siblings('.active').removeClass('active');
            $($featuresContent).siblings('.active').removeClass('active')
            $(event.currentTarget).addClass('active')
            $('#content-0').addClass('active')
        }
        else if ($dataIndex === "1") {
            $(event.currentTarget).siblings('.active').removeClass('active');
            $($featuresContent).siblings('.active').removeClass('active')
            $(event.currentTarget).addClass('active')
            $('#content-1').addClass('active')   
        }
        else if ($dataIndex === "2") {
            $(event.currentTarget).siblings('.active').removeClass('active');
            $($featuresContent).siblings('.active').removeClass('active')
            $(event.currentTarget).addClass('active')
            $('#content-2').addClass('active')
        }
    })


    // FAQ accordion    
    $('.item-header').on('click', (event) => {

        // add active class to svg
        $(event.currentTarget).children('svg').children('path').toggleClass('active');

        // collapsing the accordion
        if(!collapsed) {  
            $(event.currentTarget).next().addClass('collapsing')
            setTimeout(() => {
                $(event.currentTarget).next().addClass('show')
            }, 300)

            collapsed = true
        } else {
            $(event.currentTarget).next().removeClass('show')
            $(event.currentTarget).next().removeClass('collapsing')

            collapsed = false
        }
        
    })  

    // Form Validation 
    const $formInput = $('input')

    // Validate on submit
    $('form').submit((event) => {
        event.preventDefault();
      
        if ($($formInput).val() === '') {
            //console.log('empty')
            $('.error').addClass('show')
            $('.error-icon').addClass('show')
        } 
        else {
            console.log($formInput.val());
        }
    })

    // Validate on input change
    $formInput.change((event) => {
        const $email = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
        const $val = $formInput.val() 

        
        if (!$val.match($email)) {
            //console.log('doesnt match');
            $('.error').addClass('show')
            $('.error-icon').addClass('show')
        }
        else {
            //console.log('success');
            $('.error').removeClass('show')
            $('.error-icon').removeClass('show')
        }
    }) 

    // Mobile Menu
    $('.menu-btn').click(() => {

        const $burgerIcon = $('.menu-btn')
        const $mobileLinks = $('.mobile')
        const $logo = $('.logo-text, .logo-path, .logo-circle')
        
        //console.log(menuOpen);
        
        if(!menuOpen) {
            $mobileLinks.addClass('show')
            $logo.addClass('white')
            $burgerIcon.addClass('open')
            menuOpen = true
            

        } else if (menuOpen) {
            $mobileLinks.addClass('transition-close')
            $mobileLinks.removeClass('show')
           
            setTimeout(() => {
                $mobileLinks.removeClass('transition-close')
                $logo.removeClass('white')
                $burgerIcon.removeClass('open')
                menuOpen = false

            }, 400)
        }
    })
})
