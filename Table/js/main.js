/**
 * Created by Tory on 01.02.2017.
 */
$(function(){
    var m=0; s=0, ms;
    var i=0;
    function Time()
    {
        ms++;
        if(ms>=60)
        {
            ms=0;
            s++;
            if(s>=60) {
                s = 0;
                m++;
            }
        }
        time.innerHTML=m+';'+s+':'+ms;
    }
    var M, S, MS;
    function Stop(M, S, MS)
    {
        time.innerHTML=M+';'+S+':'+MS;
        m=0; s=0; ms=0;
        clearInterval(timeId);
    }
    var timeId;
    $("#clock").click(function(){
        if(i==0) {
            timeId= setInterval(function(){Time();}, 10);
            i=1;
        }
        else {
            i=0;
            Stop(m, s, ms);
        }
    });
    var array=[];
    var boolarray=[];
    var rand;
    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function gen(k) {
        array=[];
        boolarray=[];
        rand=getRandomInt(0, k*k);
        for(var i=0; i<k*k; i++)
        {
           boolarray.push(false);
        }
        for (var i = 0; i < k; i++) {
            var a = [];
            for(var j=0; j< k; j++) {
                if(boolarray[rand]==false) {
                    a[a.length] = rand;
                    boolarray[rand]=true;
                }
                else
                {
                    j--;
                }
                rand=getRandomInt(0, k*k);
            }
            array.push(a);
        }
    }
    var created=false;
    function create_table(){
       if(created){
           $(".table").remove();
       }
        else created=true;

        var mytable = $('<table/>',{
            class:'table table-bordered'
        }).append(

            $('<tbody/>')
        );

        $.each(array,function() {
            //Переопределяем строку
            var DataCell = $('<tr/>');
            //Пробегаемся по ячейкам
            $.each(this,function() {
                DataCell.append(
                    $('<td/>',{
                        text:this
                    })
                );
            });
            $("tbody",mytable).append(DataCell);
        });
        $("#table").append(mytable);
    }
    $('table').css("resize", "both");


    $("#generate").click(function(){
        if($("#size").val()==0)
        gen(5);
        else gen(7);
        create_table();
        Stop(0, 0, 0);
        i=0;

    });

});


    //          //
   ///        ////
  /////////////////
////./ \   / \./////
///////////////////
 ///////)(///////
  /////////////
      ////
      ///           /////
     ////         //   //
    /////              //
   ///////            //
   ////////          //
  ///////////      //
  ////////////   //
  ///////////////
///////////////
