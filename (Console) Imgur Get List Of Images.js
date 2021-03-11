// Define var tmp = nul before execute

var tmp = null;

$('.cboxElement').each(function(element) { tmp += $(this).attr('href') + "\r\n"; }); console.log(tmp);
