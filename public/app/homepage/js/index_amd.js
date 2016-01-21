define([
  'jquery',
  'jquery-ui',
  'TweenMax',
  'superscrollorama',
  'jQueryRotate',
  //'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyAN8vlxy4pU1oSAEhNYFslLMNBLLMNgChw',
  'async!https://maps.googleapis.com/maps/api/js'
], function ($) {
    var controller = {
        language: null,
        isMobileDevice: null,
        parallaxoffsection: [1],
        translation: {
            'EN': {
                empty: 'Empty Error',
                msgOK: 'Message Successfully Received!',
                msgFail: 'Submit failed for server problem, please try again.',
                search: 'Thank you for searching me.',
                thank: 'Thanks',
                serverError: 'Server Error',
                oneTime: 'Only Once',
                oneTimeV: 'You can only vote once on every visit.',
                zjname: 'ZJ Guo',
                nyu: 'New York University',
                menuarray: {
                    "Skills": 1021,
                    "Track": 2743,
                    "Academic": 4370,
                    "Contact": 5747
                },
                menuarrayNoTL: {
                    "Skills": 1021,
                    "Track": 2500,
                    "Academic": 3770,
                    "Contact": 5173
                }
            },
            'CN': {
                empty: '不能为空',
                msgOK: '留言成功!',
                msgFail: '留言失败，请稍后再试.',
                search: '谢谢搜索我，本功能还未开通.',
                thank: '谢谢.',
                serverError: '服务器错误',
                oneTime: '只能一次',
                oneTimeV: '每次只能访问一次哦.',
                zjname: '郭子剑',
                nyu: '纽约大学',
                menuarray: {
                    "技能": 1021,
                    "经验": 2743,
                    "学业": 4370,
                    "留言": 5747
                },
                menuarrayNoTL: {
                    "技能": 1021,
                    "经验": 2500,
                    "学业": 3770,
                    "留言": 5173
                }
            }
        },
        timelineLoaded: false,
        step: [],
        scrollHtInfo: null,
        stepArray: [
		[3, 2, 3.5, 1.4], //firefox
		[3, 1.9, 3.3, 1.8], //chrome
		[3, 1.8, 3, 2.2], //mid
		[3, 1.75, 2.8, 2.1], // ie			
		[3, 2.4, 3.7, 2.1], //firefox-mini 692
        [3, 2.4, 3.7, 1.9], //firefox-mini 692
        [3, 2.5, 2.3, 1.7]//firefox-mini 692
	],
        likeNum: 128,
        allowLike: true,
        initial: function () {
            var me = this;
            var url = window.location.pathname.toLowerCase();
            var language = url.indexOf('/cn') > -1 ? 'CN' : 'EN';
            me.isMobileDevice = $('#fullMask').data('ismobile');
            me.language = language;   /* 'EN' = English; 'CN'  = Chn;*/
            me.preLoader(); // Dbg Close to save time
            me.eventBus();
            me.consoleSayHello();
        },
        tmax: function () {
            var TweenController = $.superscrollorama({
                triggerAtCenter: false,
                playoutAnimations: true
            });
            TweenController.addTween('.skill1', TweenMax.from($('.skill1'), .9, { css: { right: '80px', opacity: 0 }, ease: Power2.easeOut }), 0, -450);
            TweenController.addTween('.skill2', TweenMax.from($('.skill2'), .9, { css: { right: '-80px', opacity: 0 }, ease: Power2.easeOut }), 0, -540);
            TweenController.addTween('#sct2_table', TweenMax.from($('#sct2_table'), 0.7, { css: { opacity: 0} }), 0, -400);
            TweenController.addTween('.univ-name', TweenMax.from($('.univ-name'), .8, { css: { opacity: 0} }), 0, -400);
            $('#sct5 table td').css('position', 'relative').each(function () {
                TweenController.addTween('#sct5 table td', TweenMax.from($(this), 1, { delay: Math.random() * .2, css: { left: Math.random() * 200 - 100, top: Math.random() * 200 - 100, opacity: 0 }, ease: Back.easeOut }), 0, -330);
            });
            TweenController.addTween('.smush-it', TweenMax.fromTo($('.smush-it'), .6, { css: { opacity: 0, 'letter-spacing': '30px' }, immediateRender: true, ease: Quad.easeInOut }, { css: { opacity: 0.8, 'letter-spacing': '0px' }, ease: Quad.easeInOut }), 0, -410);
            TweenController.addTween('.school1', TweenMax.from($('.school1'), .9, { css: { right: '80px', opacity: 0 }, ease: Power2.easeOut }), 0, -450);
            TweenController.addTween('.school2', TweenMax.from($('.school2'), .9, { css: { right: '-80px', opacity: 0 }, ease: Power2.easeOut }), 0, -510);
            $('#sct2 span').each(function () { TweenController.addTween('#sct2 span', TweenMax.from($(this), 1.2, { css: { width: 0 }, ease: Power3.easeOut }), 0, -300); });
            TweenController.addTween('#sct1_2_text h1', TweenMax.from($('#sct1_2_text h1'), .9, { css: { right: '-80px', opacity: 0 }, ease: Power2.easeOut }), 0, -400);
            TweenController.addTween('#sct1_2_text p', TweenMax.from($('#sct1_2_text p'), .9, { css: { right: '80px', opacity: 0 }, ease: Power2.easeOut }), 0, -450);
            TweenController.addTween('#sct3_1_info', TweenMax.from($('#sct3_1_info'), .9, { css: { right: '800px', opacity: 0 }, ease: Power2.easeOut }), 0, -350);
        },
        eventBus: function () {
            var me = this;
            me.tmax();

            if (me.isMobileDevice) {
                // Mobile Device Event   

                $("#social-icon a").fadeTo(400, 1);
            } else {
                // ============= DeskTop Device Event =============

                $("#social-icon a").mouseenter(function () {
                    $(this).removeClass('btnGrayScale');
                    $(this).fadeTo(420, 1);
                });
                $("#social-icon a").mouseleave(function () {
                    $(this).fadeTo(370, 0.55);
                    $(this).addClass('btnGrayScale');
                });

                $('#menubar_img').mouseenter(function (event) {
                    $(this).rotate({ animateTo: 2, duration: 460 });
                });
                $('#menubar_img').mouseout(function (event) {
                    $(this).rotate({ animateTo: -10, duration: 460 });
                });

                $('#sct2_table table tr td h2').mouseenter(function (event) {
                    $(this).animate({ 'marginTop': '1px', 'color': '#F66' }, 300);
                });
                $('#sct2_table table tr td h2 ').mouseout(function (event) {
                    $(this).animate({ 'marginTop': '6px', 'color': '#fff' }, 300);
                });

                // ============= DeskTop Device Event End=============
            }
            $('#menubar_img').click(function (event) {
                if (!me.isMobileDevice) {
                    me.titleImageSizePop();
                }
                if ($(document).scrollTop() > 1000) {
                    $('html, body').animate({ scrollTop: 0 }, 1600, 'easeInOutQuart');
                }
            });
            $('#menubar_img').on('contextmenu', function (event) {
                event.preventDefault();
                me.titleImageSizePop();
            });


            $('#menubar ul>li>a').click(function (event) {
                if ($(this).text().trim() != '中文版' &&
                $(this).text().trim() != 'English' &&
                $(this).text().trim() != '网站' &&
                $(this).text().trim() != 'Website') {
                    event.preventDefault();
                    var langList = me.timelineLoaded ? me.translation[me.language].menuarray : me.translation[me.language].menuarrayNoTL;
                    $('html, body').animate({ scrollTop: langList[$(this).text()] }, 1600, 'easeInOutExpo');
                }
            });

            $('#searchBar').keypress(function (e) {
                me.searchBarClicked(e.which);
            });

            $('#MsgSwitch').change(function () {
                me.messageSectionChange();
            });

            $("#sumbitMsgBtn").click(function (event) {
                event.preventDefault();
                me.submitMsgBtnClicked();
            });

            $('#likebtn').click(function (event) {
                event.preventDefault();
                me.likeBtnClicked();
            });

            $(document).scroll(function () {
                if ($(document).scrollTop() < 1000) {
                    $('#sct_menubar').css('opacity', '1');
                } else {
                    $('#sct_menubar').css('opacity', '0.9');
                }

                if ($(document).scrollTop() > 4210 && $(document).scrollTop() < 4390) {
                    $('#sct5_Table tr td a h3').each(function (key, value) {
                        var $txt = $(value);
                        var color = '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
                        $txt.css('color', color);
                    });
                }
            });

            if (!me.isMobileDevice) {
                me.parallex();
            }
            $('#timelineToggle').click(function (e) {
                e.preventDefault();
                return false;
                me.timeLineBtnClicked();
            });

            $('#sct5_Table tr td a h3').each(function (key, value) {
                var $txt = $(value);
                var color = '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
                $txt.css('color', color);
            });


        },
        titleImageSizePop: function () {
            $('#menubar_img').animate({ height: '106.55px', width: '176px' }, 165, 'easeInOutCubic');
            $('#menubar_img').animate({ height: '112px', width: '185px' }, 165, 'easeInOutCubic');
        },
        messageSectionChange: function () {
            $("#social-icon").slideToggle(1400, 'easeInOutExpo');
            $('#MsgContainer').slideToggle(1400, 'easeInOutExpo');
        },
        iconRotate: function () {
            $("#menubar_img").rotate({
                angle: 350,
                animateTo: -10,
                duration: 2900
            });
        },
        timeLineBtnClicked: function () {
            var me = this;
            if (!me.timelineLoaded) {
                /*==============================*/
                $('#timelineToggle').text('Downloading...');
                $('#sctTL').slideDown();
                $.ajax({
                    url: '/Home/GetTimeLineEvents',
                    type: 'post',
                    success: function (data) {
                        $('#timelineContainer').html(data);
                        $('#timelineToggle').text('TimeLine Loaded Successfully!');
                        $('html, body').animate({ scrollTop: 3019 }, 1600, 'easeInOutExpo');
                        me.timelineLoaded = true;
                    },
                    error: function (xhr, desc, err) {
                        $('#timelineToggle').text('TimeLine Loaded Fail!');
                    }
                });
                /*===============================*/
            } else {
                $('html, body').animate({ scrollTop: 3119 }, 800, 'easeInOutExpo');
            }
        },

        submitMsgBtnClicked: function () {
            var me = this;
            if ((!$('#MsgName').val()) || (!$('#MsgContent').val())) {
                var noEmptyMsg = me.translation[me.language].empty;
                controller.msgPop(noEmptyMsg, 800, false);
                return null;
            } else {
                $('#ajaxLoader').fadeIn(300);
                var name = '';
                var content = '';
                name = $('#MsgName').val();
                content = $('#MsgContent').val();
                $('#MsgName').val('');
                $('#MsgContent').val('');
                /*==============================*/
                $.ajax({
                    url: '/Home/VisitorMessage',
                    type: 'post',
                    data: {
                        action: 'add',
                        name: name,
                        content: content
                    },
                    success: function (data) {
                        $('#ajaxLoader').fadeOut(300);
                        var subSucc = me.translation[me.language].msgOK;
                        controller.msgPop(subSucc, 1500, true);
                        me.iconRotate();
                    },
                    error: function (xhr, desc, err) {
                        $('#ajaxLoader').fadeOut(300);
                        var subFail = me.translation[me.language].msgFail;
                        controller.msgPop(subFail, 900, false);
                    }
                });
                /*===============================*/
            }
        },

        likeBtnClicked: function () {
            var me = this;
            if (controller.allowLike) {
                $('#ajaxLoader').fadeIn(300);
                /*---------------*/
                $.ajax({
                    url: '/Home/GetVisitorAddOneNum',
                    success: function (data) {
                        $('#ajaxLoader').fadeOut(300);
                        controller.likeNum = data;
                        $('#likebtn').text(data);
                        controller.likeNum++;
                        setTimeout(function () {
                            $('#likebtn').text(controller.likeNum);
                            setTimeout(function () {
                                var thxMsg = me.translation[me.language].thank;
                                controller.msgPop(thxMsg, 400, true);
                                me.iconRotate();
                            }, 500);
                        }, 500);
                        controller.allowLike = false;
                    },
                    error: function (xhr, desc, err) {
                        $('#ajaxLoader').fadeOut(300);
                        var serverErrMsg = me.translation[me.language].serverError;
                        controller.msgPop(serverErrMsg, 1200, false);
                    }
                });
                /*---------------------------------*/
            }
            else {
                $('#likebtn').text(controller.likeNum);
                $('#likebtn').attr('disabled', '');
                setTimeout(function () {
                    $('#likebtn').text(controller.likeNum);
                    $('#likebtn').removeAttr('disabled');
                    var oneTimeLong = me.translation[me.language].oneTimeV;
                    controller.msgPop(oneTimeLong, 1200, false);
                }, 800);
                var oneTimeMsg = me.translation[me.language].oneTime;
                $('#likebtn').text(oneTimeMsg);
            }

        },

        preLoader: function () {
            var me = this;
            //$('#fullMask').remove();
            $('#fullMask').fadeOut();
            me.iconRotate();
            me.initialMap();
        },

        msgPop: function (content, time, redFalseGreenTrue, callback) {
            if (redFalseGreenTrue) {
                $('#MsgSuccess').text(content);
                $('#MsgSuccess').slideDown(300).delay(time).slideUp(400, function () {
                    if (callback) callback();
                });
            } else {
                $('#MsgFail').text(content);
                $('#MsgFail').slideDown(300).delay(time).slideUp(400, function () {
                    if (callback) callback();
                });
            }
        },
        parallex: function () {
            var me = this;
            me.calculateStepByViewport();
            $('section[data-type="background"]').each(function (key, value) {
                var $bgobj = $(value);
                var div = me.step[key];
                $(window).scroll(function () {
                    var top = $(document).scrollTop();
                    //console.log(top); //test for scroll Height value
                    var yPos = -(top / div);
                    var coords = '0 ' + yPos + 'px';
                    $bgobj.css({ backgroundPosition: coords });
                });
            });
        },
        GoogleMapSetting: function () {
            var me = this;
            var zjguoStr = me.translation[me.language].zjname;
            var nyuStr = me.translation[me.language].nyu;
            var myLatlng = new google.maps.LatLng(40.750785, -73.976541);
            var mapOptions = {
                zoom: 13,
                center: myLatlng,
                disableDefaultUI: true
            };

            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var image = ["/app/homepage/content/image/mapMarker/map_marker.png", "/app/homepage/content/image/mapMarker/map_marker2.png"];
            var locations = [
		  ['ZJ', 40.750785, -73.976541, zjguoStr],
		  ['NYU', 40.729696, -73.996466, nyuStr]
		];
            var i;
            var markers = [];
            function toggleBounce() {
                for (var m = 0; m < markers.length; m++) {
                    if (marker[m].getAnimation() != null) {
                        marker[m].setAnimation(null);
                    } else {
                        marker[m].setAnimation(google.maps.Animation.BOUNCE);
                    }
                }

            }
            for (i = 0; i < locations.length; i++) {
                markers.push(new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: image[i],
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    title: locations[i][3]
                }));
                google.maps.event.addListener(markers[i], 'mouseover', function () {
                    if (this.getAnimation() != null) {
                        this.setAnimation(null);
                    } else {
                        this.setAnimation(google.maps.Animation.BOUNCE);
                    }
                });
            }


        },
        initialMap: function () {
            if (typeof (google) === "undefined") {
                var notice = "Your browser disabled script for some reason, GoogleMap will not work at all." +
                "你的浏览器设置限制脚本文件运行,谷歌地图无法工作(可能是IE安全级别设置最高，或者大陆防火墙作怪)---ZJ Guo";
                alert(notice);
                $('#map-canvas').hide();
                return;
            } else {
                google.maps.event.addDomListener(window, 'load', this.GoogleMapSetting());
            }
        },
        calculateStepByViewport: function () {
            var me = this;
            var ht = $(window).height();

            if (ht < 600)
                me.step = me.stepArray[6];
            else if (ht < 690)
                me.step = me.stepArray[5];
            else if (ht < 720)
                me.step = me.stepArray[4];
            else if (ht < 800)
                me.step = me.stepArray[0];
            else if (ht < 860)
                me.step = me.stepArray[1];
            else if (ht < 950)
                me.step = me.stepArray[2];
            else if (ht < 1100)
                me.step = me.stepArray[3];
            else
                me.step = me.stepArray[3];


            if (me.parallaxoffsection != null && me.parallaxoffsection.length > 0) {
                $.each(me.parallaxoffsection, function (key, value) {
                    me.step.splice(value, 1);
                });
            }
            me.scrollHtInfo = 'viewport: ' + ht + ', select: ' + me.stepArray.indexOf(me.step);
        },
        consoleSayHello: function () {
            var bar8 = '==V==5==8==7==V==5==8==7==V==5==8==7==V==5==8==7==V==5==8==7==V==5==8==7==V==5==8==7==';
            var msg = ' WOA! Developer also? \n    Welcome to ZJ web\'s console. Very..Very Nice to see Ya!!  (^^)';
            console.log('');
            console.log(bar8);
            console.log('');
            console.log(msg);
            console.log('');
            console.log(bar8);
        },
        searchBarClicked: function (which) {
            var me = this;
            if (which == 13) {
                var txt = $('#searchBar').val();
                var msg;
                if (txt == 'ht') {
                    msg = me.scrollHtInfo;
                } else {
                    msg = me.translation[me.language].search;
                }
                alert(msg);
                $('#searchBar').val('');
            }
        }
    };


    return controller;
});