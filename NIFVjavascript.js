function ShowResults(Text,query){
query=encodeURI(query); 
    try{
	document.getElementById("Rmain").innerHTML='<div id="head" class="head"><h2 class="headtitle"> &nbsp;</h2><h2 class="headtitle" style="width: 149px"> &nbsp;&nbsp;NIF NAVIGATOR</h2></div><div id="Results" class="category" >Test Page...</div>';
    document.getElementById("Results").innerHTML="";        				
    var Lng= Text.getElementsByTagName("category").length;
    
    //Changed
	var myHash={};
	var k=0;
	var btitle=false;
	var keysArray= new Array();
    for (var i=0;i<Text.getElementsByTagName("category").length;i++)
    {	
			
        if (Text.getElementsByTagName("category")[i].attributes.getNamedItem("parent").value=="Nervous System Level")
        {
		
            if(btitle==false){
                document.getElementById("Results").innerHTML+="<h3>NERVOUS SYSTEM LEVEL</h3>"
                btitle=true;
            }
			//Store html contant in a hash table.
            myHash[Text.getElementsByTagName("category")[i].getAttribute("category")]='<a rel="nofollow"  class ="Zrightcool" target="_blank" href="https://www.neuinfo.org/mynif/search.php?q=%22'+query+'%22&cf='+Text.getElementsByTagName("category")[i].getAttribute("category")+'">'+Text.getElementsByTagName("category")[i].getAttribute("category")+"</a> <p class='count'>"+" ("+ Text.getElementsByTagName("categories")[0].getElementsByTagName("count")[i].firstChild.nodeValue+")</p> <BR />";
			keysArray[k]=Text.getElementsByTagName("category")[i].getAttribute("category");
			
			
			///////////
			//document.getElementById("Results").innerHTML+='<a rel="nofollow"  class ="Zrightcool" target="_blank" href="https://www.neuinfo.org/mynif/search.php?q=%22'+query+'%22&cf='+Text.getElementsByTagName("category")[i].getAttribute("category")+'">'+Text.getElementsByTagName("category")[i].getAttribute("category")+"</a> <p class='count'>"+" ("+ Text.getElementsByTagName("categories")[0].getElementsByTagName("count")[i].firstChild.nodeValue+")</p> <BR />";
			k++;
			
		}
		
    
	}
	//Sort the titles and use them
	keysArray.sort();
	for(var i=0;i<keysArray.length;i++){
	document.getElementById("Results").innerHTML+=myHash[keysArray[i]];
	}
	
	} catch (err){
	//alert(err);
	}
    
	//Changed
    try{
	myHash={};
	k=0;
	btitle=false;
	keysArray=new Array();				
    var Lng= Text.getElementsByTagName("category").length;
    //if (Lng!=0){
    //document.getElementById("Results").innerHTML+="<h3>DATA TYPE</h3>"
    for (var i=0;i<Text.getElementsByTagName("category").length;i++)
    {	
			
        if (Text.getElementsByTagName("category")[i].attributes.getNamedItem("parent").value=="Type of Data")
        {
            if (Text.getElementsByTagName("category")[i].getAttribute("category")=="Registries"){
                continue;
            }
            if(btitle==false){
                document.getElementById("Results").innerHTML+="<h3>DATA TYPE</h3>"
                btitle=true;
            }
            myHash[Text.getElementsByTagName("category")[i].getAttribute("category")]='<a rel="nofollow"  class ="Zrightcool" target="_blank" href="https://www.neuinfo.org/mynif/search.php?q='+query+'&cf='+Text.getElementsByTagName("category")[i].getAttribute("category")+'">'+Text.getElementsByTagName("category")[i].getAttribute("category")+"</a> <p class='count'>"+" ("+ Text.getElementsByTagName("categories")[0].getElementsByTagName("count")[i].firstChild.nodeValue+")</p> <BR />";
			keysArray[k]=Text.getElementsByTagName("category")[i].getAttribute("category");
			
		k++;
		}
    }
    //Sort the titles and use them
	keysArray.sort();
	for(var i=0;i<keysArray.length;i++){
	document.getElementById("Results").innerHTML+=myHash[keysArray[i]];
	}
	}catch(err){
	}
	//Changed	
    try{
    var reg=0;
	//Changed
    for (var i=0;i<Text.getElementsByTagName("results")[0].getElementsByTagName("result").length;i++)
    {
        if ((Text.getElementsByTagName("results")[0].getElementsByTagName("result")[i].getAttribute("category")=="Registries")&&(Text.getElementsByTagName("results")[0].getElementsByTagName("result")[i].getAttribute("nifId")=="nlx_144509-1"))
        {
            reg=Text.getElementsByTagName("results")[0].getElementsByTagName("count")[i].firstChild.nodeValue;
        }
    }
	//Changed	
    document.getElementById("Results").innerHTML+='<br /><a class="zh3" rel="nofollow"  target="_blank" href="https://www.neuinfo.org/mynif/search.php?q='+query+'&t=registry">'+"NIF Registry</a>";
    document.getElementById("Results").innerHTML+="<p class='zh3'> ("+reg+") </p><br />";
	}catch (err){
	document.getElementById("Results").innerHTML+='<br /><a class="zh3" rel="nofollow"  target="_blank" href="https://www.neuinfo.org/mynif/search.php?q='+query+'&t=registry">'+"NIF Registry</a>";
    document.getElementById("Results").innerHTML+="<p class='zh3'> ("+"0"+") </p><br />";
	}
		 
	try{
    var Lng= Text.getElementsByTagName("literatureSummary").length;
    //if (Lng!=0){
    document.getElementById("Results").innerHTML+="<br /><a class=\"zh3\" rel=\"nofollow\"  target=\"_blank\" href=\"https://www.neuinfo.org/mynif/search.php?q="+query+"&t=literature\">"+"LITERATURE</a>";
						
    document.getElementById("Results").innerHTML+="<p class='zh3'> ("+Text.getElementsByTagName("literatureSummary")[0].attributes.getNamedItem("resultCount").value+")</p><br />";
    //}
	}catch(err){
	document.getElementById("Results").innerHTML+="<br /><a class=\"zh3\" rel=\"nofollow\"  target=\"_blank\" href=\"https://www.neuinfo.org/mynif/search.php?q="+query+"&t=literature\">"+"LITERATURE</a>";
						
    document.getElementById("Results").innerHTML+="<p class='zh3'> ("+"0"+")</p><br />";
	}

    document.getElementById("Results").innerHTML+='<br /><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://neuinfo.org/" target="_blank"><img src="http://neurolex.org/w/skins/MW/Logo.png"/></a></p>';
							
							
}

function YLoadXML() {
    try {
        var YCM = YAHOO.util.Connect;
        var par = getParameter();
        var nurl = null;
        if (par == "Neurolex" || par.length == 0)
            nurl = 'http://neurolex.org/w/skins/MW/getUrl3.php?q=*';
        else
            nurl = 'http://neurolex.org/w/skins/MW/getUrl3.php?q=' + encodeURI('"' + par + '"');
        YCM.asyncRequest('GET', nurl, callback);
    } catch (err) {
        //alert("Error :" + err);
    }
}
var callback = {
    success: function (o) {
        var par = getParameter();
        if (par == "Neurolex" || par.length == 0)
            ShowResults(o.responseXML, '*');
        else
            ShowResults(o.responseXML, '"' + par + '"');
    },
    failure: function (o) {
        //alert("The NIF navigator could not load!");
    },
};

function getParameter() {
    var qs = getQuerystring('search');
    var url = window.location.pathname;
    var myPageName = document.title;
    if (qs != "") {
        return qs;
    } else {
        if (myPageName == "Neurolex") {
            return "*";
        } else {
            myPageName = myPageName.substring(0, (myPageName.length) - 11);
            myPageName = myPageName.replace(/Category:/g, '');
            myPageName = myPageName.replace(/Resource:/g, '');
            myPageName = myPageName.replace(/:/g, '');
            myPageName = myPageName.replace(/,/g, '');
            myPageName = myPageName.replace(/;/g, '');
            myPageName = myPageName.replace(/&/g, '');
            return myPageName;
        }
    }
    if (myPageName.substring(0, 8) == "Special:") {
        myPageName = "*";
        return myPageName;
    }
    if (myPageName.substring(0, 9) == "Category:") {
        myPageName = myPageName.substring(9, myPageName.length);
        if (myPageName.length >= 9) {
            if (myPageName.substring(0, 9) == "Resource:") {
                myPageName = myPageName.substring(9, myPageName.length);
                myPageName = myPageName.replace(/_/g, ' ');
                return myPageName;
            } else {
                myPageName = myPageName.replace(/_/g, ' ');
                return myPageName;
            }
        }
    }
    if (myPageName.substring(0, 9) == "Resource:") {
        myPageName = myPageName.substring(9, myPageName.length);
        myPageName = myPageName.replace(/_/g, ' ');
        return myPageName;
    }
    if (qs != "") {
        return qs;
    }
    myPageName = myPageName.replace(/_/g, " ");
    return myPageName;
}

function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}
