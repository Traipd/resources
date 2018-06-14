/**
 * Created by Administrator on 2018/5/30.
 */
$(function () {
    //初始化：
    $("#showAI").show();
    $("#showDI").hide();
    $("#showCommon").show();
    $("#showAO").hide();
    $("#showDO").hide();
    $("#showOMenu").hide();

    //通道添加：
    $("#addRoadI").click(function () {
        if($("#showAI").is(":hidden")){
            addRow("DItable");
        }else{
            addRow("AItable");
        }
    });
    $("#addRoadO").click(function () {
        if($("#showAO").is(":hidden")){
            addRow("DOtable");
        }else{
            addRow("AOtable");
        }
    });
    //添加命令
    $("#addCommon").click(function () {
        if($("#showAO").is(":hidden")){
            addRow("DOtable");
        }else{
            addRow("AOtable");
        }
    });

    //通道删除
    $("#removeRoadI").click(function(){
        if($("#showAI").is(":hidden")){
            removeRow("DItable");
        }else{
            removeRow("AItable");
        }
    });
    $("#removeRoadO").click(function(){
        if ($("#showAO").is(":hidden")) {
            removeRow("DOtable");
        } else {
            removeRow("AOtable");
        }
    });

    //点击隐藏显示：
    $("#AI").click(function(){
        $("#showAI").show();
        $("#showDI").hide();
        $("#showOMenu").hide();
    });
    $("#DI").click(function(){
        $("#showDI").show();
        $("#showAI").hide();
        $("#showOMenu").hide();
    });
    $("#common").click(function(){
        $("#showCommon").show();
        $("#showAO").hide();
        $("#showDO").hide();
        $("#showOMenu").hide();
    });
    $("#AO").click(function(){
        $("#showAO").show();
        $("#showOMenu").show();
        $("#showCommon").hide();
        $("#showDO").hide();
    });
    $("#DO").click(function(){
        $("#showDO").show();
        $("#showOMenu").show();
        $("#showCommon").hide();
        $("#showAO").hide();
    });

});

//添加行
function addRow(id){
    //var check_name = 'choose' + id.substring(0,2);
    //$("#" + id ).append(
    //      "<tr>"
    //      + "<td><input type='checkbox' name=check_name'></td>"
    //    + "</tr>") ;
    //var elem = $("#" + id + " tr:first-child");
    //var len = elem.childElementCount;
    //alert("id=" + id + "elem=" + elem + "len= " + len);
    //for(var i = 0;i<len;i++){
    //    elem.nextElementSibling.append("<td><input type='text'></td>");
    //}

    switch (id){
        case "AItable":
            $("#AItable").append(
                "<tr>"
                    + "<td><input type='checkbox' name='chooseAI'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                    + "<td><input type='text'></td>"
                + "</tr>") ;
            break;
        case "DItable":
            $("#DItable").append(
                "<tr>"
                + "<td><input type='checkbox' name='chooseDI'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "</tr>") ;
            break;
        case "DOtable":
            $("#DOtable").append(
                "<tr>"
                + "<td><input type='checkbox' name='chooseDO'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "</tr>") ;
            break;
        case "AOtable":
            $("#AOtable").append(
                "<tr>"
                + "<td><input type='checkbox' name='chooseAO'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "<td><input type='text'></td>"
                + "</tr>") ;
            break;
    }
}

//删除行
function removeRow(id){
    var check_name = 'choose' + id.substring(0,2);
    if($("#" + id + " input[type='checkbox']:checked").length == 0) {
        alert("请至少选择一条记录进行删除操作！");
    } else{
        if (confirm("你确定删除吗？")) {
            $("#" + id + " input[type='checkbox']:checked").each(function() { // 遍历选中的checkbox
                var n = $(this).parents("tr").index();  // 获取checkbox所在行的顺序
                $("table#"+id).find("tr:eq("+n+")").remove();
            });
        }
    }
}
