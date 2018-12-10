function sendMessage(url, form, config){
  if(!validateEmail(form.email)){
    alert("wrong email!!!");
  }else{
    $.ajax({
      method:"POST",
      url:url,
      data:{
        log:btoa(JSON.stringify({
          user:config.user,
          pass:config.pass
        })),
        name:form.name,
        email:form.email,
        extradata:btoa(JSON.stringify({
          theme:form.theme,
          browser:getBrowserName(),
          referer:document.referrer,
          os:navigator.platform,
          lang:navigator.language,
          size:screen.availWidth+'x'+screen.availHeight
        })),
        message:form.message
      }
    }).done(function(msg){
      var tmp=JSON.parse(msg);
      if(tmp.result=="ok"){
        alert("Message has been sended ! ! ! ");
        location.replace("http://"+(typeof(config.host)=="String")?config.host:location.host+"/");
      }else{
        alert("fill fields with valid data!!!");
      }
    });
  }
}
loadNext();
