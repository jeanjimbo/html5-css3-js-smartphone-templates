$(function(){
    var form_id = $('form');

    // 再読み込み時
	form_id.find(":checked").each(function(){
		var isl = $(this).attr("id");
        form_id.find('li').has("label[for="+isl+"]").addClass('active');
	});

    // チェックボックスにチェックが入った時
	form_id.find(":checkbox").click(function() {
		var isl = $(this).attr("id");
        var chk = $(this).attr("checked");
        var typ = 'checkbox';
        backgroundChange(isl,chk,typ);
    });

     // radioにチェックが入った時
	form_id.find(":radio").click(function() {
		var isl = $(this).attr("id");
        var chk = $(this).attr("checked");
        var typ = 'radio';
        backgroundChange(isl,chk,typ);
    });

    // リセット動作
    form_id.find(":reset").click(function() {
        form_id.find('li').removeClass('active');
    });

    function backgroundChange(isl,chk,typ) {
		if(chk == "checked" && typ == 'checkbox') {
			return form_id.find('li').has('input:'+typ).has("label[for="+isl+"]").addClass('active');
        }else if(chk == "checked" && typ == 'radio'){
            return form_id.find('li').has('input:'+typ).removeClass('active').has("label[for="+isl+"]").addClass('active');
        }else{
			return form_id.find('li').has('input:'+typ).has("label[for="+isl+"]").removeClass('active');
		}
    }
});