
var iqiyi = "http://www.iqiyi.com/lib/"
var youku = "http://www.youku.com/"
var tencent = "http://v.qq.com"
var leshi = "http://www.le.com/"
var lesou = "http://www.leso.cn/"
var mangguo = "http://www.mgtv.com/"
var sohu = "http://tv.sohu.com/"
var cur_web = iqiyi;

(function () {
    // var btn_play = document.querySelector("#btn_play");
    // var slt = document.querySelector("#slt");
    // btn_play.addEventListener('click', function (e) {
    //     var index = slt.selectedIndex;
    //     var desUrl = slt.options[index].value;
    //     var videoUrl = document.querySelector("#video_url").value;

    //     if (videoUrl == null || videoUrl == "") {
    //         alert("请输入url")
    //         return;
    //     }
    //     var docWindowOptions = {
    //         "title": "视频vip",
    //         "icon": "img/toy.png",
    //         "frame": false, //显示窗口栏
    //         "width": 800,
    //         "height": 500,
    //         "position": "center",
    //         "show_in_taskbar": true //显示任务栏图标,默认true
    //     }
    //     global.url = desUrl+videoUrl;
    //     console.log(global.url)

    //     // require('nw.gui').Window.open(desUrl+videoUrl, docWindowOptions)

    //     require('nw.gui').Window.open('movies.html', docWindowOptions)

    // });

    new window.Notification('提示', {
        body: '已启动。目前只支持 >>> 优酷、爱奇艺、乐视、腾讯、芒果、搜狐!',
        icon: 'img/toy.png'
    });

    window.setInterval(go, 1000);

    // ifr.onload = function () {

    // window.setInterval(add_play, 1000);
    // add_play();

    // var div_p = document.querySelector("#div_p");
    // div_p.setAttribute('hidden', 'hidden')
    // new window.Notification('提示', {
    //     body: '当前页面已准备就绪',
    //     icon: 'img/toy.png'
    // });
    // };

})();

function go() {
    search();
    add_play();
}

function search() {
    var ifr = document.querySelector("iframe");

    if (cur_web == iqiyi && ifr.contentWindow.document.querySelector("form") != null) {

        var div = ifr.contentWindow.document.querySelector("form").parentNode;
        var form = ifr.contentWindow.document.querySelector("form");
        div.removeChild(form);
        div.innerHTML = "<div class=\"clearfix\"><div class=\"fl pr\"><input class=\"search_input\" placeHolder=\"已准备就绪\" type=\"text\" autocomplete=\"off\"" +
            "data-suggest-elem=\"input\" data-suggest-type=\"normalInput\" style=\"color: rgb(153, 153, 153);\"></div><div class=\"fl\">" +
            "<input class=\"search_btn\" type=\"button\" id=\"btn_search\" value=\"搜全网\" data-suggest-elem=\"btn\" rseat=\"搜全网\"></div></div>" +
            "<input type=\"hidden\" name=\"source\" value=\"default\" style=\"display: none;\"><input type=\"hidden\" name=\"sr\"" +
            "value=\"1094662943877\" style=\"display: none;\"><input type=\"hidden\" name=\"refersource\" value=\"lib\" style=\"display: none;\">"
            + div.innerHTML;
        var btn_search = ifr.contentWindow.document.querySelector("#btn_search");
        btn_search.addEventListener('click', function (e) {
            var input_search = ifr.contentWindow.document.querySelector(".search_input").value;
            ifr.src = "http://so.iqiyi.com/so/q_" + input_search;
        });

        //去除左上角
        if (ifr.contentWindow.document.querySelector(".link_txt") != null) {
            var iqi_t_p = ifr.contentWindow.document.querySelector(".link_txt").parentNode;
            var iqi_t = ifr.contentWindow.document.querySelector(".link_txt");
            iqi_t_p.removeChild(iqi_t);

        }

        if (ifr.contentWindow.document.querySelector(".link_left") != null) {
            var iqi_l_p = ifr.contentWindow.document.querySelector(".link_left").parentNode;
            var iqi_l = ifr.contentWindow.document.querySelector(".link_left");
            iqi_l_p.removeChild(iqi_l);
        }
        var inp = $("iframe").contents().find(".search_input");
        icon_search(inp);


    } else if (cur_web == youku && ifr.contentWindow.document.querySelector("form") != null) {
        // "http://www.soku.com/search_video"
        var div = ifr.contentWindow.document.querySelector("form").parentNode;
        var form = ifr.contentWindow.document.querySelector("form");
        div.removeChild(form);
        div.innerHTML = "<input name=\"q\" id=\"headq\" type=\"text\" autocomplete=\"off\" _xbox_init=\"t\"" +
            " class=\"default\" _xbox_default=\"\" _xbox_input=\"\" _xbox_show=\"\" placeholder=\"已准备就绪\">" +
            "<a href=\"http://top.youku.com/rank/?spm=a2hww.20023042.search.1\" target=\"_self\" class=\"rankq\"" +
            " title=\"优酷指数排行榜\" data-spm-anchor-id=\"a2hww.20023042.search.1\"></a>" +
            "<button type=\"submit\" data-spm=\"dbutton\" id=\"search_btn\">搜库</button>"
            + div.innerHTML;
        var search_btn = ifr.contentWindow.document.querySelector("#search_btn");
        search_btn.addEventListener('click', function (e) {
            var input_search = ifr.contentWindow.document.querySelector("#headq").value;
            ifr.src = "http://www.soku.com/search_video/q_" + input_search;
        });
        var inp = $("iframe").contents().find("#headq");
        icon_search(inp);

    } else if (cur_web == tencent && ifr.contentWindow.document.querySelector("form") != null) {

        var div = ifr.contentWindow.document.querySelector("form").parentNode;
        var form = ifr.contentWindow.document.querySelector("form");
        div.removeChild(form);
        div.innerHTML = "<div class=\"search_inner\"><label class=\"search_label\" for=\"keywords\">搜索关键词</label>" +
            "<div class=\"search_keywords\"><input type=\"text\" name=\"q\" id=\"keywords\" class=\"search_input\" placeholder=\"已准备就绪\" autocomplete=\"off\">" +
            "</div><input type=\"hidden\" name=\"stag\"><input type=\"hidden\" name=\"smartbox_ab\">" +
            "<button class=\"search_btn\" type=\"submit\" _stat=\"new_vs_header:search\"><i class=\"icon icon_search\">" +
            "<svg class=\"svg_icon svg_icon_search\" viewBox=\"0 0 20 20\" width=\"20\" height=\"20\">" +
            "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg_icon_search\"></use></svg > " +
            "</i><span class=\"btn_inner\">全网搜</span></button><a class=\"btn_search_hot\"" +
            "href=\"https://v.qq.com/x/hotlist/search/?channel=555&amp;source=common_nav_vs\"" +
            "target=\"_self\" _stat=\"new_vs_header:search_hotlist\" title=\"全网热搜榜\">" +
            "<i class=\"icon icon_search_hot\"><svg class=\"svg_icon\" viewBox=\"0 0 20 20\" width=\"20\" height=\"20\">" +
            "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg_icon_search_hot\"></use></svg></i></a></div>"
            + div.innerHTML;
        var search_btn = ifr.contentWindow.document.querySelector(".search_btn");
        search_btn.addEventListener('click', function (e) {
            var input_search = ifr.contentWindow.document.querySelector(".search_input").value;
            ifr.src = "https://v.qq.com/x/search/?q=" + input_search;
        });

        var inp = $("iframe").contents().find(".search_input");
        icon_search(inp);
    } else if (cur_web == leshi && ifr.contentWindow.document.querySelector("form") != null) {
        var inp = $("iframe").contents().find(".i-t");
        icon_search(inp);

    } else if(cur_web == mangguo && ifr.contentWindow.document.querySelector("form") != null){
        var div = ifr.contentWindow.document.querySelector("form").parentNode;
        var form = ifr.contentWindow.document.querySelector("form");
        div.removeChild(form);
        div.innerHTML = "<input class=\"c-header-search-text\" type=\"text\" name=\"k\" autocomplete=\"off\">"+
		"<a class=\"c-header-search-top\" href=\"http://www.mgtv.com/top\" target=\"_self\"></a>"+
	    "<input class=\"c-header-search-btn\" type=\"submit\" value=\"\">"
            + div.innerHTML;
        var search_btn = ifr.contentWindow.document.querySelector(".c-header-search-btn");
        search_btn.addEventListener('click', function (e) {
            var input_search = ifr.contentWindow.document.querySelector(".c-header-search-text").value;
            ifr.src = "http://so.mgtv.com/so/k-" + input_search;
        });
        var inp = $("iframe").contents().find(".c-header-search-text");
        icon_search(inp);
    } else if(cur_web == sohu && ifr.contentWindow.document.querySelector("#sform") != null){
        var div;
        var form;
        if(ifr.contentWindow.document.querySelectorAll("#sform").length == 1){
            div = ifr.contentWindow.document.querySelector("#sform").parentNode;
            form = ifr.contentWindow.document.querySelector("#sform");
        }else{
            div = ifr.contentWindow.document.querySelectorAll("#sform")[1].parentNode;
            form = ifr.contentWindow.document.querySelectorAll("#sform")[1];
        }

        div.removeChild(form);
        div.innerHTML = '<div class="bar cfix"> <div class="text l">'
                 +'<input autocomplete="off" x-webkit-grammar="builtin:translate" x-webkit-speech="x-webkit-speech" style="display: -webkit-box;" speech="speech" type="text" class="fs14 hd_in" name="wd" id="gNewSearch">'
                +'<input type="hidden" class="fs14" value="1" name="box">   		<input type="hidden" class="fs14" value="0" name="flag">'
                +' </div><input type="submit" id="btn-search" class="btn-search hd_serbtn" style="display: block;" target="_self" value=""></div>'
            + div.innerHTML;
        var search_btn = ifr.contentWindow.document.querySelectorAll("#btn-search")[ifr.contentWindow.document.querySelectorAll("#btn-search").length-1];
        search_btn.addEventListener('click', function (e) {
            var input_search = ifr.contentWindow.document.querySelectorAll("#gNewSearch")[ifr.contentWindow.document.querySelectorAll("#gNewSearch").length-1].value;
            ifr.src = "http://so.tv.sohu.com/mts?wd=" + input_search;
        });
        var inp = $("iframe").contents().find("#gNewSearch");
        icon_search(inp);
    }
}


function add_play() {
    var ifr = document.querySelector("iframe");
    var all_a = ifr.contentWindow.document.querySelectorAll("a")
    var i_slt = document.querySelector("#i_slt")
    var index = i_slt.selectedIndex;
    var desUrl = i_slt.options[index].value;
    // if (cur_web == iqiyi) {

    //     // all_a.forEach(function(a) {
    //     //     a.target = "_self";
    //     //     // a.setAttribute("url1","http://api.47ks.com/webcloud/?v=" + a.href)     
    //     //     a.href = "http://api.47ks.com/webcloud/?v=" + a.href
    //     //     console.log(a)
    //     //     a.addEventListener("click", function(){
    //     //         require('nw.gui').Window.open("http://api.47ks.com/webcloud/?v="+this.href, docWindowOptions)
    //     //     })
    //     // }, this);

    //     for (var i = 0; i < all_a.length; i++) {
    //         if (all_a[i].href.indexOf("v_") >= 0) {
    //             all_a[i].target = "_blank";
    //             // if (all_a[i].href.indexOf(desUrl) == -1) {
    //             //     all_a[i].href = desUrl + all_a[i].href;
    //             // }
    //             if (all_a[i].href.indexOf("?v=") >= 0 | all_a[i].href.indexOf("?url=") >= 0) {
    //                 all_a[i].href = desUrl + all_a[i].href.substring(all_a[i].href.indexOf("=") + 1);
    //             } else {
    //                 all_a[i].href = desUrl + all_a[i].href;
    //             }

    //         } else {
    //             all_a[i].target = "_self";
    //         }
    //         // var docWindowOptions = {
    //         //     "title": "视频vip",
    //         //     "icon": "img/toy.png",
    //         //     "frame": true, //显示窗口栏
    //         //     "width": 800,
    //         //     "height": 500,
    //         //     "position": "center",
    //         //     "show_in_taskbar": true //显示任务栏图标,默认true
    //         // }
    //         // require('nw.gui').Window.open("http://api.47ks.com/webcloud/?v=" + all_a[i].href, docWindowOptions)

    //         // // console.log(all_a[i])
    //         // var n_btn = all_a[i].nextSibling;
    //         // if (n_btn != null) {
    //         //     n_btn = all_a[i].nextSibling.nodeName;
    //         // }
    //         // if (n_btn != "INPUT" & n_btn != "#text") {
    //         //     // console.log(all_a[i].nextSibling)

    //         //     var btn = document.createElement("input");
    //         //     btn.type = "button";
    //         //     btn.value = "播放";

    //         //     insertAfter(btn, all_a[i]);

    //         // }

    //         // all_a[i].addEventListener("click", function (e) {
    //         //     var docWindowOptions = {
    //         //         "title": "视频vip",
    //         //         "icon": "img/toy.png",
    //         //         "frame": true, //显示窗口栏
    //         //         "width": 800,
    //         //         "height": 500,
    //         //         "position": "center",
    //         //         "show_in_taskbar": true //显示任务栏图标,默认true
    //         //     }
    //         //     require('nw.gui').Window.open("http://api.47ks.com/webcloud/?v=" + this.href, docWindowOptions)
    //         // })
    //     }
    // } else if (cur_web == youku) {

    //     for (var i = 0; i < all_a.length; i++) {
    //         if (all_a[i].classList.value == "sn" | all_a[i].classList.value == "A") {
    //             all_a[i].target = "_blank";
    //             // if (all_a[i].href.indexOf(desUrl) == -1) {
    //             //     all_a[i].href = desUrl + all_a[i].href;
    //             // }
    //             if (all_a[i].href.indexOf("?v=") >= 0 | all_a[i].href.indexOf("?url=") >= 0) {
    //                 all_a[i].href = desUrl + all_a[i].href.substring(all_a[i].href.indexOf("=") + 1);
    //             } else {
    //                 all_a[i].href = desUrl + all_a[i].href;
    //             }

    //         } else {
    //             all_a[i].target = "_self";
    //         }
    //     }

    // } else if (cur_web == tencent) {

    //     for (var i = 0; i < all_a.length; i++) {
    //         if (all_a[i].href.indexOf('/x/cover') >= 0) {
    //             all_a[i].target = "_blank";
    //             if (all_a[i].href.indexOf("?v=") >= 0 | all_a[i].href.indexOf("?url=") >= 0) {
    //                 all_a[i].href = desUrl + all_a[i].href.substring(all_a[i].href.indexOf("=") + 1);
    //             } else {
    //                 all_a[i].href = desUrl + all_a[i].href;
    //             }

    //         } else {
    //             all_a[i].target = "_self";
    //         }
    //     }
    // } else if (cur_web == leshi | cur_web == lesou) {
    //     for (var i = 0; i < all_a.length; i++) {
    //         // /b/芒果 v_爱奇艺，优酷
    //         if (all_a[i].href.indexOf('/vplay') >= 0 | all_a[i].href.indexOf('/x/cover') >= 0 | all_a[i].href.indexOf("v_") >= 0 | all_a[i].href.indexOf("/b/") >= 0) {
    //             all_a[i].target = "_blank";
    //             if (all_a[i].href.indexOf("?v=") >= 0 | all_a[i].href.indexOf("?url=") >= 0) {
    //                 all_a[i].href = desUrl + all_a[i].href.substring(all_a[i].href.indexOf("=") + 1);
    //             } else {
    //                 all_a[i].href = desUrl + all_a[i].href;
    //             }

    //         } else {
    //             all_a[i].target = "_self";
    //         }
    //     }
    // }

    for (var i = 0; i < all_a.length; i++) {
        // /b/芒果；  v_爱奇艺，优酷； /x/cover 腾讯； sn,A优酷； i.com/v_：爱奇艺; /n：搜狐
        if (all_a[i].href.indexOf('/vplay') >= 0 | all_a[i].href.indexOf('/x/cover') >= 0 | all_a[i].href.indexOf("i.com/v_") >= 0 | all_a[i].href.indexOf("/b/") >= 0 | all_a[i].classList.value == "sn" | all_a[i].classList.value == "A" | all_a[i].href.indexOf("/n") >= 0) {
            all_a[i].target = "_blank";
            if (all_a[i].href.indexOf("?v=") >= 0) {
                all_a[i].href = desUrl + all_a[i].href.substring(all_a[i].href.lastIndexOf("v=") + 2);
            } else if (all_a[i].href.indexOf("?url=") >= 0) {
                all_a[i].href = desUrl + all_a[i].href.substring(all_a[i].href.lastIndexOf("url=") + 4);

            } else {
                all_a[i].href = desUrl + all_a[i].href;
            }

        } else {
            all_a[i].target = "_self";
        }
    }
}

function slt_web() {
    var p_slt = document.querySelector("#p_slt")
    var index = p_slt.selectedIndex;
    var webUrl = p_slt.options[index].value;
    var ifr = document.querySelector("iframe");
    ifr.src = webUrl;
    cur_web = webUrl;
}

// function insertAfter(newEl, targetEl) {
//     var parentEl = targetEl.parentNode;

//     if (parentEl.lastChild == targetEl) {
//         parentEl.appendChild(newEl);
//     } else {
//         parentEl.insertBefore(newEl, targetEl.nextSibling);
//     }
// }

function changeFrameHeight() {
    var ifr = document.querySelector("iframe");
    ifr.height = document.documentElement.clientHeight;
}
window.onresize = function () {
    changeFrameHeight();
} 