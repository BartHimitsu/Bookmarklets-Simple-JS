var tmp=""

jQuery('i.fa-magnet').each(function(){
  
  tmp += jQuery(this).parent('a').attr('href')
  
  tmp += "\n"
  
})

console.log(tmp)
