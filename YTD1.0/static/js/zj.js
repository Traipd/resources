function makeDisabledByClass(a,c) {//修改(父标签ID，下‘class名’)的Disabled
    var oUl=document.getElementById(a);
    var aBox=getByClass(oUl, c);

    for(var i=0;i<aBox.length;i++){
        if(aBox[i].disabled==false )/*或使用.readOnly .disabled*/
        { aBox[i].disabled= true;}
        else
        {aBox[i].disabled=false;}
    }

}

function getByClass(oParent, sClass){//通过Class获取标签列表(父标签，‘class名’)
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');

    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }

    return aResult;
}