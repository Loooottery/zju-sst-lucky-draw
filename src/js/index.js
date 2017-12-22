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
    if (!boxId || noScroll !== null) {
      return
    }
    let id = 'box-' + boxId;

    //设置range
    let range = [];
    let digit_cnt = candidateObj['digit_' + boxId + '_cnt'];
    for(let num in digit_cnt) {
      if(digit_cnt[num] > 0) range.push(num);
    }

    //设置result
    let result_now = randNum(candidateObj, boxId); //!!!!!!!由随机函数得到抽取结果(字符)
    result[id] = result_now;

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

    //推入memory栈
    memoryStack.push(new Memory(id, result));
    console.log(candidateObj);
    console.log(memoryStack);
  })
}
