// @ts-nocheck
import cn from '../../i18n/callerName.json';
import sd from '../../i18n/speed.json';
import ms from '../../i18n/music_info.json';

export default {
    data: {
        //Left

        title: "This is  title",
        leftindicator:'/common/images/header/left_indicator_on.png',
        lowbeam: '/common/images/header/low_beam.png',
        bluetooth:"/common/images/header/bluetooth.png",
        sidestand:"/common/images/header/side_stand.png",
        highbeam:"/common/images/header/high_beam_on.png",
        indicatoroff:"/common/images/header/right_indicator_off.png",
        fuel:"/common/images/left/fuel.png",
        level10:"/common/images/left/level_10.png",
        level20:"/common/images/left/level_20.png",
        level40:"/common/images/left/level_40.png",
        level60:"/common/images/left/level_60.png",
        level80:"/common/images/left/level_80.png",
        level100:"/common/images/left/level_100.png",
        callericon:"/common/images/middle/user_pic.png",
        callaccept:"/common/images/middle/call_connect.png",
        callreject:"/common/images/middle/call_disconnect.png",
        music_cover:"/common/images/right/music_image.png",
        previousplay:"/common/images/right/previous.png",
        pause:"/common/images/right/pause.png",
        nextplay:"/common/images/right/next_on.png",
        menu:"/common/images/bottom/menu.png",
        location:"/common/images/bottom/location.png",
        home:"/common/images/bottom/home.png",
        headset:"/common/images/bottom/Hearphone_select.png",
        phone:"/common/images/bottom/contact_icon.png",


        //onclick images
        low_beamon:'/common/images/onClick/low_beam_on.png',
        left_indicatoroff:'/common/images/onClick/left_indicator_off.png',
        bluetooth_off:'/common/images/onClick/bluetooth_off.png',
        side_stand_on:'/common/images/onClick/side_stand_on.png',
        high_beam_off:'/common/images/onClick/high_beam_off.png',
        right_indicator_on:'/common/images/onClick/right_indicator_on.png',
        menu_select:'/common/images/onClick/menu_select.png',
        location_select:'/common/images/onClick/location_select.png',
        Hearphone_off:'/common/images/onClick/Hearphone.png',
        contact_select:'/common/images/onClick/contact_select.png',




        Front30PSI:"Front 30 PSI",
        Rear32PSI:"Rear 32 PSI",
        E:"E",
        R:"R",
        SPORT:"SPORT",
        80:"80 %",
        110:"110",
        Ekm:"Est Km Range Left",

        time:"01 : 20 PM",

        callername:"",
        Incomingcall:"Incoming call ... ",
        48:"48",
        Kmh:"60 Km/h",
        avg:"Average Speed",
        Kms:"2762 Kms",
        song_name:"In the Name of Love",
        album_name:"Album Name",
        music_start_timestamp:"00:00",
        music_stop_timestamp:"04:55",





        //dummay values
        myname:"Ajith M",
        //Middle


        caller:[],
        speed:[],
        music:[]

    },
    onInit() {
//        this.title = this.$t('strings.world');


        setInterval(this.time_calc,1000);


        this.setCallerName();
        this.setSpeed();
        this.setMusic();
    },

    lowbeamonclick(){
        if(this.lowbeam === '/common/images/header/low_beam.png'){

            this.lowbeam=this.low_beamon;
            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.lowbeam ='/common/images/header/low_beam.png' ;

            console.info('Inside else condition of lowbeamonclick()');
        }
    },
    leftindicatorclick(){
        if(this.leftindicator === '/common/images/header/left_indicator_on.png'){

            this.leftindicator=this.left_indicatoroff;
//            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.leftindicator = '/common/images/header/left_indicator_on.png'

//            console.info('Inside else condition of lowbeamonclick()');
        }
    },
    bluetoothclick(){
        if(this.bluetooth === '/common/images/header/bluetooth.png'){

            this.bluetooth=this.bluetooth_off;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.bluetooth = '/common/images/header/bluetooth.png';

            //            console.info('Inside else condition of lowbeamonclick()');
        }
    },
    sidestandclick(){
        if(this.sidestand === "/common/images/header/side_stand.png"){

            this.sidestand=this.side_stand_on;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.sidestand ="/common/images/header/side_stand.png"

            //            console.info('Inside else condition of lowbeamonclick()');
        }
    },
    highbeamclick(){
        if(this.highbeam==="/common/images/header/high_beam_on.png"){

            this.highbeam= this.high_beam_off;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.highbeam="/common/images/header/high_beam_on.png"

            //            console.info('Inside else condition of lowbeamonclick()');
        }
    },
    rightindicatorclick(){
        if(this.indicatoroff==="/common/images/header/right_indicator_off.png"){

            this.indicatoroff= this.right_indicator_on;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.indicatoroff="/common/images/header/right_indicator_off.png";

            //            console.info('Inside else condition of lowbeamonclick()');
        }

    },
    menuclick(){
        if(this.menu==="/common/images/bottom/menu.png"){

            this.menu= this.menu_select;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.menu="/common/images/bottom/menu.png";

            //            console.info('Inside else condition of lowbeamonclick()');
        }

    },
    locationclick(){
        if(this.location==="/common/images/bottom/location.png"){

            this.location=this.location_select;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.location="/common/images/bottom/location.png"

            //            console.info('Inside else condition of lowbeamonclick()');
        }

    },
    hearphoneclick(){
        if(this.headset==="/common/images/bottom/Hearphone_select.png"){

            this.headset=this.Hearphone_off;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{
            this.headset="/common/images/bottom/Hearphone_select.png"

            //            console.info('Inside else condition of lowbeamonclick()');
        }

    },
    phoneclick(){
        if(this.phone==="/common/images/bottom/contact_icon.png"){

            this.phone=this.contact_select;
            //            console.info('Inside if condition of lowbeamonclick()');

        }else{

            this.phone="/common/images/bottom/contact_icon.png"
            //            console.info('Inside else condition of lowbeamonclick()');
        }

    }
    ,//using time API
    time_calc(){
        //      Getting Local time in UTC and convert it into IST
        var today = new Date();


        var hr = today.getHours();
        var min = today.getMinutes();
        var ampm="PM";
        if(hr>12){hr=hr-12;}
        else{ampm="AM";}

        if (min>=60){
            hr = hr+1;
            min = min-60;

        }
        if (min<10){min = "0" + min;}
        this.time = hr + ":" + min + " " + ampm;

    },
    setCallerName() {

        let d=JSON.stringify(cn);
        this.caller=JSON.parse(d);

    },
    setSpeed() {

        let d=JSON.stringify(sd);
        this.speed=JSON.parse(d);

    },
    setMusic() {

        let d=JSON.stringify(ms);
        this.music=JSON.parse(d);

    }


}
