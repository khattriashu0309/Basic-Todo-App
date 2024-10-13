var arr = [];
var ids = 100;
var oldvalue;
function add() {
  var val = document.getElementById("new-task").value;
  var obj = { uid: ids, id: val, flag: 0 };
  ids++;
  if (check(val)) {
    arr.push(obj);
    document.getElementById("new-task").value = "";
    display();
  } else {
    alert("Same Tasks Not Allowed!!");
  }
}

function check(b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == b) {
      return false;
    }
  }
  return true;
}
function display() {
  document.getElementById("new-task").value = "";
  var temp = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].flag == 0) {
      console.log(arr[i].id + arr[i].flag);
      temp +=
        "<li><input type='checkbox' onclick='checking(" +
        arr[i].uid +
        ")'><label>" +
        arr[i].id +
        "</label><input type='text'><button class='edit' onclick='editrecord(" +
        arr[i].uid +
        ")'>Edit</button><button class='delete' onclick='deleterecord(" +
        arr[i].uid +
        ")'>Delete</button></li>";
    }
  }
  document.getElementById("incomplete-tasks").innerHTML = temp;
  display2();
}

function display2() {
  var temp = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].flag == 1) {
      console.log(arr[i].id + arr[i].flag);
      temp +=
        "<li><input type='checkbox' onclick='checking(" +
        arr[i].uid +
        ")'><label>" +
        arr[i].id +
        "</label><input type='text'><button class='edit' onclick='editrecord(" +
        arr[i].uid +
        ")'>Edit</button><button class='delete' onclick='deleterecord(" +
        arr[i].uid +
        ")'>Delete</button></li>";
    }
  }
  document.getElementById("completed-tasks").innerHTML = temp;
}

function checking(r) {
  console.log(typeof r);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == r) {
      if (arr[i].flag == 1) {
        arr[i].flag = 0;
      } else {
        arr[i].flag = 1;
      }
      break;
    }
  }
  display();
}
function deleterecord(r) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == r) {
      arr.splice(i, 1);
    }
  }
  display();
}

function editrecord(r) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == r) {
      document.getElementById("new-task").value = arr[i].id;
      break;
    }
  }
  document.getElementById("addtask").style.display = "none";
  document.getElementById("updatetask").style.display = "block";
  oldvalue = document.getElementById("new-task").value;
}

function update() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == oldvalue) {
      arr[i].uid = document.getElementById("new-task").value;
    }
  }
  document.getElementById("addtask").style.display = "block";
  document.getElementById("updatetask").style.display = "none";
  display();
}
