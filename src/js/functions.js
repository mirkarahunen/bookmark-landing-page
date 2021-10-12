   //Variables
    const $featuresTab = $('.features-link')
    const $featuresContent = $('.features-content')
    const $accordionItems = $('.accordion .header')
    const $formInput = $('input')
    const $form = $('form')
    //const $mobileNav = $('.nav-mobile')
    const $burgerIcon = $('.burger')
    const $mobileBg = $('.mobile nav')
    const $mobileLinks = $('.nav-mobile')
    const $social = $('.social-media')
    const $logo = $('.logo-text, .logo-path, .logo-circle')
    const $close = $('.close')
      
    // Features navigation
    $featuresTab.click(function() {
       
        let $dataIndex = $(this).attr('data-index')
       
      
        if ($dataIndex === "0") {
            $($featuresTab).siblings('.active').removeClass('active');
            $($featuresContent).siblings('.active').removeClass('active')
            $(this).addClass('active')
            $('#content-0').addClass('active')
        }
        else if ($dataIndex === "1") {
            $($featuresTab).siblings('.active').removeClass('active');
            $($featuresContent).siblings('.active').removeClass('active')
            $(this).addClass('active')
            $('#content-1').addClass('active')   
        }
        else if ($dataIndex === "2") {
            $($featuresTab).siblings('.active').removeClass('active');
            $($featuresContent).siblings('.active').removeClass('active')
            $(this).addClass('active')
            $('#content-2').addClass('active')
        }
    })


    // FAQ accordion
    $accordionItems.click(function() {
        $(this).next().toggleClass('show')
        $(this).children('svg').children('path').toggleClass('active');
    })  

    // Form Validation 
    // Validate on submit
    $form.submit(function(event) {
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
    $formInput.change(function() {
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
$burgerIcon.click(function() {
    $mobileBg.addClass('show')
    $mobileLinks.addClass('show')
    $social.addClass('show')
    $close.addClass('show')
    $logo.addClass('mobile')
    $burgerIcon.addClass('hide')
})

$close.click(function() {
    $mobileBg.removeClass('show')
    $mobileLinks.removeClass('show')
    $social.removeClass('show')
    $logo.removeClass('mobile')
    $burgerIcon.removeClass('hide')
    $close.removeClass('show')
})

