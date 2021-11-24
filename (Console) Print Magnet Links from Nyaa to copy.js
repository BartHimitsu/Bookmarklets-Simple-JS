var tmp=[];

jQuery('i.fa-magnet').each(function(){

  tmp.push( jQuery(this).parent('a').attr('href') );

})

console.log(tmp.join('\n') + '\n')
