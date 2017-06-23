
(function () {
    var btn_play = document.querySelector("#btn_play");
    var slt = document.querySelector("#slt");
    btn_play.addEventListener('click', function (e) {
        var index = slt.selectedIndex;
        var desUrl = slt.options[index].value;
        var videoUrl = document.querySelector("#video_url").value;

        if (videoUrl == null || videoUrl == "") {
            alert("请输入url")
            return;
        }
        var docWindowOptions = {
            "title": "视频vip",
            "icon": "img/toy.png",
            "frame": false, //显示窗口栏
            "width": 800,
            "height": 500,
            "position": "center",
            "show_in_taskbar": true //显示任务栏图标,默认true
        }
        global.url = desUrl+videoUrl;
        console.log(global.url)

        // require('nw.gui').Window.open(desUrl+videoUrl, docWindowOptions)

        require('nw.gui').Window.open('movies.html', docWindowOptions)

    });

})();

