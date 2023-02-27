$(function () {
  $("form[name='registration']").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      surname: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      city: {
        required: true,
        minlength: 3,
      },
      cp: {
        required: true,
        number: true,
        min: 5,
      },
      check: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Por favor, introduzca un nombre",
        minlength: "El nombre debe tener mínimo tres caracteres",
      },
      surname: {
        required: "Por favor, introduzca un apellido",
        minlength: "El apellido no sebe ser menor a 3 caracteres",
      },
      email: {
        required: "Por favor, introduzca un email",
        email: "El email debe tener el formato correcto",
      },
      city: {
        required: "Por favor, introduzca una ciudad",
        minlength: "La ciudad no sebe ser menor a 3 caracteres",
      },
      cp: {
        required: "Por favor, introduzca un código postal",
        min: "El código debe ser de 5 números",
      },
      check: {
        required: "Por favor, acepte las condiciones",
      },
    },
  });

  $("input").focus(function () {
    $(this).animate(
      {
        padding: "+0.7em",
      },
      0500,
      function () {}
    );
  });
  $("input").blur(function () {
    $(this).animate(
      {
        padding: "-0.7em",
      },
      0500,
      function () {}
    );
  });

  $("button[name='coleccion1']").click(function () {
    $("div[name='coleccion1']").toggle();
  });

  $("button[name='coleccion2']").click(function () {
    $("div[name='coleccion2']").toggle();
  });
});
