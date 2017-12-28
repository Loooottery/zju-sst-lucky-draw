window.onload = function() {
  let memoryStack = []; //记录每一次抽取后的box_text以便重置

  let candidateObj = new Candidate(); //候选学号

  candidateAll.forEach(id => {
    if (exceptList.indexOf(id) < 0) { //不在排除列表中
      let IDobj = new ID(id);
      candidateObj.IDs.push(IDobj);

      //统计不同位上不同数字出现的次数
      candidateObj.digit_4_cnt[IDobj.digit_4] ++;
      candidateObj.digit_5_cnt[IDobj.digit_5] ++;
      candidateObj.digit_6_cnt[IDobj.digit_6] ++;
      candidateObj.digit_7_cnt[IDobj.digit_7] ++;
      candidateObj.digit_8_cnt[IDobj.digit_8] ++;
    }
  });
  console.log(candidateObj);
  //显示人数
  $('#info').text(candidateObj.IDs.length);

  //抽取结果
  var result = {//初始化为'X'
    'box-4': 'X',
    'box-5': 'X',
    'box-6': 'X',
    'box-7': 'X',
    'box-8': 'X'
  }

  //初始memory
  memoryStack.push(new Memory("init", result));


  document.getElementById('boxes').addEventListener('click', function(event) {
    let boxId = event.target.getAttribute('box')
    var noScroll = event.target.getAttribute('noscroll')
    if (!boxId || noScroll !== null || $('#box-' + boxId).attr('clicked')) {
      return
    }
    let id = 'box-' + boxId;
    //人数显示变为载入
    $('#info').css('display', 'none');
    $('#loading').css('display', 'inline-block');

    //设置range
    let range = [];
    let digit_cnt = candidateObj['digit_' + boxId + '_cnt'];
    for(let num in digit_cnt) {
      if(digit_cnt[num] > 0) range.push(num);
    }

    //设置随机数种子
    let seed = $('#randomSeed').val();
    console.log(seed);

    //设置result
    let result_now = randNum(seed, candidateObj, boxId); //!!!!!!!由随机函数得到抽取结果(字符)
    result[id] = result_now;
    console.log(result_now);

    //滚动效果并显示结果
    luckyscroll.scroll(id, range, result_now)

    //更新candidateObj
    let candidateObj_new = new Candidate();
    candidateObj.IDs.forEach(IDobj => {
      if (IDobj["digit_" + boxId] == result_now) {
        candidateObj_new.IDs.push(IDobj);

        //统计不同位上不同数字出现的次数
        candidateObj_new.digit_4_cnt[IDobj.digit_4] ++;
        candidateObj_new.digit_5_cnt[IDobj.digit_5] ++;
        candidateObj_new.digit_6_cnt[IDobj.digit_6] ++;
        candidateObj_new.digit_7_cnt[IDobj.digit_7] ++;
        candidateObj_new.digit_8_cnt[IDobj.digit_8] ++;
      }
    });
    candidateObj = candidateObj_new;
    //定时器：8s后显示人数
    setTimeout(function(){
      //人数显示变为载入
      $('#info').text(candidateObj.IDs.length);
      $('#info').css('display', 'inline');
      $('#loading').css('display', 'none');
    }, 8000);

    //推入memory栈
    memoryStack.push(new Memory(id, result));
    console.log(candidateObj);
  });

  //撤销上一次抽取
  document.getElementById('undo').addEventListener('click', function(event) {
    let oldstate = memoryStack.pop();
    let newstate = memoryStack[memoryStack.length - 1];
    if(!newstate) return;
    console.log(newstate);

    //重置数字显示
    $('#box-4').text(newstate.digit_4);
    $('#box-5').text(newstate.digit_5);
    $('#box-6').text(newstate.digit_6);
    $('#box-7').text(newstate.digit_7);
    $('#box-8').text(newstate.digit_8);

    $('#' + oldstate.scrollBox).removeAttr('clicked');
    $('.lucky-box-numbers').css('transform', 'translate(0, 0)');
    $('.lucky-box-numbers').css('transition', 'none');

    //重置candidateObj
    let candidateObj_new = new Candidate();
    candidateAll.forEach(id => {
      if (exceptList.indexOf(id) < 0) { //不在排除列表中
        let IDobj = new ID(id);
        console.log();
        if((newstate.digit_4 == 'X'||newstate.digit_4 == IDobj.digit_4) &&
           (newstate.digit_5 == 'X'||newstate.digit_5 == IDobj.digit_5) &&
           (newstate.digit_6 == 'X'||newstate.digit_6 == IDobj.digit_6) &&
           (newstate.digit_7 == 'X'||newstate.digit_7 == IDobj.digit_7) &&
           (newstate.digit_8 == 'X'||newstate.digit_8 == IDobj.digit_8)) {

             candidateObj_new.IDs.push(IDobj);

             //统计不同位上不同数字出现的次数
             candidateObj_new.digit_4_cnt[IDobj.digit_4] ++;
             candidateObj_new.digit_5_cnt[IDobj.digit_5] ++;
             candidateObj_new.digit_6_cnt[IDobj.digit_6] ++;
             candidateObj_new.digit_7_cnt[IDobj.digit_7] ++;
             candidateObj_new.digit_8_cnt[IDobj.digit_8] ++;
        }
      }
    });
    candidateObj = candidateObj_new;
    console.log(candidateObj);
    //显示人数
    $('#info').text(candidateObj.IDs.length);
  });
}
