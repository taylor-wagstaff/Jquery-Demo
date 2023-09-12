$(document).ready(function () {
  var score = 0
  var timeLeft = 20
  var gameStarted = false
  var timerInterval

  function startGame() {
    if (!gameStarted) {
      gameStarted = true
      $('#shape').show()
      $('#start-button').prop('disabled', true)
      $('#stop-button').prop('disabled', true)
      $('#score-value').text(score)
      $('#time-left').text(timeLeft)
      moveShape()
      updateTimer()
    }
  }

  function moveShape() {
    var maxX = $(window).width() - $('#shape').width()
    var maxY = $(window).height() - $('#shape').height()

    var newX = Math.random() * maxX
    var newY = Math.random() * maxY

    $('#shape').css({
      left: newX + 'px',
      top: newY + 'px',
    })

    $('#shape').one('click', function () {
      if (gameStarted) {
        score++
        $('#score-value').text(score)
        moveShape()
      }
    })
  }

  function updateTimer() {
    timerInterval = setInterval(function () {
      timeLeft--
      $('#time-left').text(timeLeft)
      if (timeLeft <= 0) {
        clearInterval(timerInterval)
        endGame()
      }
    }, 1000)
  }

  function endGame() {
    gameStarted = false
    $('#shape').hide()
    $('#start-button').prop('disabled', false)
    $('#stop-button').prop('disabled', true)
    $('#pause-button').prop('disabled', false)

    alert('Game is Over! your score is:' + score)
    score = 0
    timeLeft = 20
    $('#score-value').text(score)
    $('#time-left').text(timeLeft)
  }
  $('#shape').hide()
  $('#start-button').click(startGame)
  $('#stop-button').click(endGame)
  $('#pause-button').click(function () {
    if (!gameStarted) {
      startGame();
    }
  })
})

//

//

$(document).ready(function () {
  var slideIndex = 0
  var slides = $('.slide')
  var totalSlides = slides.length
  var interval = 3000

  function showSlide(index) {
    slides.eq(index).show()
  }

  function hideSlide() {
    slides.hide()
  }

  function nextSlide() {
    hideSlide()
    slideIndex = (slideIndex + 1) % totalSlides
    showSlide(slideIndex)
  }
  function prevSlide() {
    hideSlide()
    slideIndex = slideIndex - 1 + totalSlides
    showSlide(slideIndex)
  }
  $('.slider').hover(
    function () {
      clearInterval(sliderInterval)
    },
    function () {
      sliderInterval = setInterval(nextSlide, interval)
    }
  )
  $('.next').click(nextSlide)
  $('.prev').click(prevSlide)
  showSlide(slideIndex)
  var sliderInterval = setInterval(nextSlide, interval)
  $(window).resize(function () {
    hideSlide()
    showSlide(slideIndex)
  })
})

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
