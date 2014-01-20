(function($){
  var showHome = function () {
        $.get('home.html', function(data){
          $('.wrapper.main').html(data);
        });
      },
      showServices = function () {
        $.get('services.html', function(data){
          $('.wrapper.main').html(data);
        });
      },
      showProducts = function () {
        $.get('products.html', function(data){
          $('.wrapper.main').html(data);
        });
      },
      showContact = function () {
        $.get('contact.html', function(data){
          $('.wrapper.main').html(data);
        });
      },
      routes = {
        '/home': showHome,
        '/services': showServices,
        '/products': showProducts,
        '/contact': showContact
      },
      router = Router(routes);

  router.init();

  // Default to home
  if(window.location.hash.slice(2).length === 0){
    showHome();
  }

  $(document).ready(function(){
    $('body').on('submit', '.contact + aside form', function(e){
      e.preventDefault();
      var $form = $('.contact + aside form');
      $.ajax({
        type: "POST",
        url: "/contact",
        data: {
          "name": $form.find('[name="name"]').val(),
          "email": $form.find('[name="email"]').val(),
          "phone": $form.find('[name="phone"]').val(),
          "message": $form.find('[name="message"]').val(),
        },
        success: function(){
          alert('hit');
        }
      });
    });
  });

}(jQuery));
