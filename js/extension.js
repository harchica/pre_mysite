$(function(){
    // 「id="jQueryBox"」を非表示
    $("#hidden_cap").css("display", "none");

    // 「id="jQueryPush"」がクリックされた場合
    $("#first").click(function(){
        // 「id="jQueryBox"」の表示、非表示を切り替える
        $("#hidden_cap").toggle();
        $("#fake").css("padding-top", "0px");
        $("#fake").css("padding-bottom", "100px");

        $("#first").toggle();
    });
    $("#reduction").click(function(){
        $("#first").toggle();
        $("#fake").css("padding","80px 20px 20px 20px");
        $("#hidden_cap").toggle();
    });
});
