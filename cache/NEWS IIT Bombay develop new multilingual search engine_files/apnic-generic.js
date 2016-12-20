//---------------- quick links navigation --------------------------//
// 
 function changePage(pageLoc)  {
  if(pageLoc == "") { return; } // if null selection do nothing
    else  if(pageLoc != "/index.html") { document.location.href = pageLoc;  }
      return; 
  }
//
function change(iform){
//
var list=iform.selectedIndex;
 self.location=iform.options[list].value;  
  iform.selectedIndex = 0;
}
//
function clearform(iform){
 if (iform.value=="WHOIS search", "Web &amp; FTP") {
  iform.value=""; }
}

//
//----------------------------------------window handling ------------------------------------//
var windowHandle = null;
//
function newWindow(winURL, winName) {
   if (!winName) { winName = 'APNIChelpWindow' }
   windowHandle = open(winURL, winName, 'menubar=no,scrollbars=yes,status=no,resizable=yes,width=750,height=420');
   if (!windowHandle.opener) { windowHandle.opener = self; }
   return windowHandle.focus();
}
// function closeWindow() { if (windowHandle) { if (!windowHandle.closed) { windowHandle.close();} } } 
//
//---------------------------------------------- testing ---------------------------//
// display object properties: implement with arguments 'object', 'property'.  takes multiple arguments.
//  <SCRIPT type="text/javascript" language="JavaScript">
//       return show_property('window.document','form');
//  </SCRIPT>
//
 function show_property(object) {
     for (var si = 1; si < show_property.arguments.length; si++) {       document.writeln('&nbsp;&nbsp;&nbsp;'+show_property.arguments[si]+':<b>'+unescape(eval(object+'.'+show_property.arguments[si]))+'</b><br>'); } }
//
//-->