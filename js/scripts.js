$(document).ready(function () {
  $('#myForm').submit(function (event) {
    var valid = true

    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()
    var phonenumber = $('#phonenumber').val()

    if (name === '') {
      $('#nameError').text('Name is missing')
      valid = false
    } else {
      $('#nameError').text('')
    }

    if (email === '') {
      $('#emailError').text('Email is missing')
      valid = false
    } else if (!isValidEmail(email)) {
      $('emailError').text('invalid Format')
      valid = 'false'
    } else {
      $('#emailError').text('')
    }

    if (message === '') {
      $('#messageError').text('message is missing')
      valid = false
    } else if (!isValidMessage(message)) {
      $('messageError').text('invalid Format')
      valid = 'false'
    } else {
      $('#messageError').text('')
    }

    if (phonenumber === '') {
      $('#phonenumberError').text('Phone Number is missing')
      valid = false
    } else if (!isValidPhoneNumber(phonenumber)) {
      $('phonenumberError').text('invalid Format')
      valid = 'false'
    } else {
      $('#phonenumberError').text('')
    }

    if (!valid) {
      event.preventDefault()
    }
  })

  function isValidEmail(email) {
    var emailPattern = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  function isValidMessage(message) {
    // must be between four and 196 characters
    var messagePattern =
      /'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{4,196}/
    return messagePattern.test(message)
  }

  function isValidPhoneNumber(phonenumber) {
    var phoneNumberPattern =
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
    return phoneNumberPattern.test(phonenumber)
  }
})

$(document).ready(function () {
  $('#button').click(function () {
    var toAdd = $('input[name=ListItem]').val()
    if (toAdd.trim() !== '') {
     
      $('ul').append(
        '<li>' + toAdd + ' <button class="remove-me">-</button></li>'
      )
    }
  })

  $('input[name=ListItem]').keyup(function (event) {
    if (event.keyCode == 13) {
      $('#button').click()
    }
  })


  $('ul').on('click', '.remove-me', function () {
    $(this).parent().remove() 
  })

  $('ul').sortable()
})
