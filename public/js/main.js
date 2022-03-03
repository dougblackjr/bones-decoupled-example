// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

// Let's create our data holder
// We'll use 
// data-category-id
// data-color-id
// data-size-id
// data-shipping-id
const bonesParams = {
    "category": null,
    "color": null,
    "size": null,
    "shipping": null
}

// Document ready
$(function() {

    // We'll just use this to show Loading animation
    function showLoading() {
        $('#product-cards').html('<img src="https://cdn.dribbble.com/users/20130/screenshots/2933302/media/2f5c373fc385ed7214241c461e2ad267.gif" />')
    }

    // We'll just use this to show no items available
    function showNoResults() {
        $('#product-cards').html('<img src="/images/404.png" />')
    }

    // This is our main function to get the datab from the API
    function getDataFromBones() {
        showLoading()
        // Let's create a query string from the Object. We'll join
        // the array items with a pipe (|), and each query string portion
        const categories = Object.keys(bonesParams).map(function(key) {
            return bonesParams[key]
        }).filter(Boolean).join('&');

        console.log('categories', categories)
        const apiUrl = window.location.origin + '/api'
        console.log('apiUrl', apiUrl)

        // Let's set up the Bones Parameters. This follows EE structure
        const params = {
            // We'll see up to only get products
            channel: 'product',
            // We don't want closed products
            status: 'not closed',
            // And I want them in order
            orderby: 'entry_id',
            sort: 'asc'
        }

        // Finally we'll add our categories from our variable above, if its not empty
        if (categories) params.category = categories

        console.log('params', params)

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            data: params,
        })
        .done(function(response) {
            console.log("success", response);
            // We had a successful response, but let's check if Bones was successful
            if (!response.success) {
                alert('Bones had an issue!')
                return
            }

            // Then let's set up our title text
            const count = response.count
            $('#product-heading-text').text(count)

            // If no results, we'll show our sad GIF
            if (count === 0) {
                showNoResults()
                return
            }

            // Now, let's create our cards
            // We'll do a replace of a big string, you can see it in product-card
            var html = ''

            for (var i = 0; i < response.data.length; i++) {
                const item = response.data[i]
                const itemString = '<div class="w-full sm:w-1/2 md:w-1/3 px-3 mb-8"><div class="p-6 bg-gray-50"><a class="block px-6 mt-6 mb-2" href="#"><img class="mb-5 mx-auto h-56 w-full object-contain" src="' + item.featured_image + '" alt=""><h3 class="mb-2 text-xl font-bold font-heading">'+item.title+'</h3><p class="text-lg font-bold font-heading text-blue-500"><span>$'+Math.round(item.price, 2).toFixed(2)+'</span></p></a><a class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#"><svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a></div></div>'
                html += itemString
            }


            // Then we'll set up our products
            console.log('Final HTML', html)
            $('#product-cards').html(html)
        })
        .fail(function(jqXHR, textStatus) {
            alert('error: ' + textStatus)
        })
        
    }

    // Let's process category clicks
    $(document).on('click', '[data-category-id]', function(event) {
        event.preventDefault()
        const el = $(this)
        console.log('Got a click on Category', el.data('category-id'))
        bonesParams.category = el.data('category-id')
        getDataFromBones()
    })

    $(document).on('click', '[data-color-id]', function(event) {
        event.preventDefault()
        const el = $(this)
        console.log('Got a click on color', el.data('color-id'))
        bonesParams.color = el.data('color-id')
        getDataFromBones()
    })

    $(document).on('click', '[data-size-id]', function(event) {
        event.preventDefault()
        const el = $(this)
        console.log('Got a click on size', el.data('size-id'))
        bonesParams.size = el.data('size-id')
        getDataFromBones()
    })

    $(document).on('click', '[data-shipping-id]', function(event) {
        event.preventDefault()
        const el = $(this)
        console.log('Got a click on shipping', el.data('shipping-id'))
        bonesParams.shipping = el.data('shipping-id')
        getDataFromBones()
    })

    getDataFromBones()
});