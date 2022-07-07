$( () => {
  const colors = {red:'#F16D69', pink:'#F379A2', purple:'#9170CB', blue:'#5EB3F6', turquoise:'#67D7E5', yellow:'#FFE083'};

  function makeLiString(color, textFieldVal) {
  return '<li style="background-color: ' + color + ';"><input type="checkbox"> <div>' + textFieldVal + '</div></li>'
  }
  
  function addStringHTML() {
    $('#list').append(makeLiString(colors[randomProperty(colors)], $('#text_field').val()));
    $('#text_field').val('');

    $('input[type=checkbox]').bind('click', () => {
      $('input[type=checkbox]:checked').parent().attr('style', changeBackGround());
    });
  }

  function randomProperty(obj) {
    let keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
  };

  function changeBackGround() {
    return 'background-color: ' + colors[$('input[type=radio]:checked').attr('id')]
  }

  $('#button').bind('click', () => {
    if($('#text_field').val() != false ){
      addStringHTML();
    }
  });

  $('#text_field').keydown(function(element) {
    if (element.keyCode === 13 && $('#text_field').val() != false ) {
      addStringHTML();
    }
  });

  $('input[type=radio]').bind('click', () => {
    $('input[type=checkbox]').each(function() {
      $('input[type=checkbox]:checked').parent().attr('style', changeBackGround());
    });
  });
});