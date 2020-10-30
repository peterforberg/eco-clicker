/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

//add random alerts

// VARIABLES
var money = 0;
var seeds = 0;
var land = 1;
var workers = 0;
var tractor = 0;
var fertilizer = 0;
var solar = 0;
var sresearch = 0;
var sresearchers = 0;
var cresearch = 0;
var cresearchers = 0;
var pesticide = 0;
var clicks = 1000;
var bug = 1;
var cbugs = 0;
var harvestclicks = 0;
var bugcatcher = 0;
var compost = 0;
var silk = 0;
var hive = 0;
var bio = 0;
var bbot = 0;
var bcbbot = 0;
var wind = 0;
var cland = 0;
var veg = 0;
var tree = 0;
var hydro = 0;
var accountant = 0;
var combine = 0;
var mineral = 0;
var miner = 0;
var pump = 0;
var oil = 0;
var spump = 0;
var shelter = 0;
var wealthy = 0;
var impoverished = 0;

var epro = 0;
var euse = 0;
var monmod = 0;
var monmod5 = 0;
var laborlaws = 0;
var carbon = 0;
var renew = 0;
var indig = 0;
var landcarbon = 0;
var grid = 0;
var animal = 0;
  var badan = 0;
var image = 0;
var pr = 0;
var compuse = 0;
var pollutants = 0;

var automate = false;
var authoritarian = false;
var socialism = false;
var excess = false;
var convert = false;
var monopolizeo = false;
var monpolizes = false;
var mineralr = false;
var exporto= false;
var exportso = false;
var usage = 0;

var rbbotbh = false;
var automatebh = false;
var authoritarianbh = false;
var sbbotbh = false;
var socialismbh = false;
var excessbh = false;
var friendlybh = false;
var fishbh = false; 
var convertbh = false; 
var rfusionbh = false;
var greenbh = false;
var monopolizeobh = false;
var mineralrbh = false;
var paperlessbh = false;
var monopolizesbh = false;
var cauthoritarianbh = false;

//local storage

//BUTTON VISIBILITY THROUGH CLICKCLICK FUNCTION
function clickClick() {
   clicks --; 
   document.getElementById("clicks").innerHTML = clicks;
   if (clicks == 0) {
     alert("You've run out of clicks! You can continue playing, but this is the point at which you should submit your climate quest screenshot!")
   }
   if (seeds >= 20) {
          var a = document.getElementById("harvestb");
            a.style.display = "flex";
   }    
   if (harvestclicks >= 1) {
          var b = document.getElementById("pesticideb");
            b.style.display = "flex";
           var tt = document.getElementById("pesticided");
            tt.style.display = "flex";
            var bb = document.getElementById("pollutantsd");
            bb.style.display = "flex";
        }
   if (harvestclicks >= 3) {
          var c = document.getElementById("fertilizerb");
            c.style.display = "flex";
     var tt = document.getElementById("fertilizerd");
            tt.style.display = "flex";
        }
   if (harvestclicks >= 5) {
          var e = document.getElementById("tractorb");
            e.style.display = "flex";
     var tt = document.getElementById("tractord");
            tt.style.display = "flex";
        }
   if (harvestclicks >= 2) {
          var f = document.getElementById("landb");
            f.style.display = "flex";
     var tt = document.getElementById("landd");
            tt.style.display = "flex";
        }
   if (harvestclicks >= 4) {
          var g = document.getElementById("workerb");
            g.style.display = "flex";
     var tt = document.getElementById("workerd");
            tt.style.display = "flex";
        }
  if (harvestclicks >= 6) {
          var g = document.getElementById("bugcatcherb");
            g.style.display = "flex";
    var tt = document.getElementById("bugcatcherd");
            tt.style.display = "flex";
        }
   if (money >= 200) {
          var h = document.getElementById("solarb");
            h.style.display = "flex";
     var tt = document.getElementById("solard");
            tt.style.display = "flex";
        }
   if (tractor >= 2) {
          var i = document.getElementById("cresearchb");
            i.style.display = "flex";
     var tt = document.getElementById("cresearchd");
            tt.style.display = "flex";
        }
   if (solar >= 2) {
          var j = document.getElementById("sresearchb");
            j.style.display = "flex";
     var tt = document.getElementById("sresearchd");
            tt.style.display = "flex";
        }
  if (cbugs > 0) {
          var f = document.getElementById("compostb");
            f.style.display = "flex";
    var tt = document.getElementById("compostd");
            tt.style.display = "flex";
        }
  if (cbugs >= 100) {
          var f = document.getElementById("silkb");
            f.style.display = "flex";
    var tt = document.getElementById("silkd");
            tt.style.display = "flex";
        }
  if (cbugs >= 30) {
          var f = document.getElementById("hiveb");
            f.style.display = "flex";
    var tt = document.getElementById("hived");
            tt.style.display = "flex";
        }
  if (compost >= 50) {
          var f = document.getElementById("biob");
            f.style.display = "flex";
    var tt = document.getElementById("biod");
            tt.style.display = "flex";
        }
  if (compost >= 5000) {
          var f = document.getElementById("gridb");
            f.style.display = "flex";
    var tt = document.getElementById("gridd");
            tt.style.display = "flex";
        }
  if (sresearch >= 200 && cbugs >= 200 && silk >= 10 && hive >= 25 && rbbotbh == false) {
          var f = document.getElementById("rbbotb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("rbbotb");
            f.style.display = "none";
        }
  if (sresearch >= 350 && bbot >= 25) {
          var f = document.getElementById("bcbbotb");
            f.style.display = "flex";
    var tt = document.getElementById("bcbbotd");
            tt.style.display = "flex";
        }
  if (bbot >= 900 && automatebh == false) {
          var f = document.getElementById("automateb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("automateb");
            f.style.display = "none";
        }
  if (automate == true && sbbotbh == false) {
          var f = document.getElementById("sbbotb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("sbbotb");
            f.style.display = "none";
        }
  if (automate == true && bbot >= 1000 && authoritarianbh == false) {
          var f = document.getElementById("authoritarianb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("authoritarianb");
            f.style.display = "none";
        }
  if (automate == true && bbot >= 1200 && socialismbh == false) {
          var f = document.getElementById("socialismb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("socialismb");
            f.style.display = "none";
        }
  
  if (sresearch >= 50 && money >= 90) {
          var f = document.getElementById("windb");
            f.style.display = "flex";
    var tt = document.getElementById("windd");
            tt.style.display = "flex";
        }
  if (epro > euse && excessbh == false) {
          var f = document.getElementById("excessb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("excessb");
            f.style.display = "none";
        }
  if (sresearch >= 500 && money >= 200 && land >= 10) {
          var f = document.getElementById("clandb");
            f.style.display = "flex";
    var tt = document.getElementById("clandd");
            tt.style.display = "flex";
        }
  if (sresearch >= 300 && seeds >= 300 || tree >= 20) {
          var f = document.getElementById("vegb");
            f.style.display = "flex";
    var tt = document.getElementById("vegd");
            tt.style.display = "flex";
        }
  if (land >= 10) {
          var f = document.getElementById("treeb");
            f.style.display = "flex";
    var tt = document.getElementById("treed");
            tt.style.display = "flex";
        }
  if (sresearch >= 400 && money >= 800 && convertbh == false) {
          var f = document.getElementById("convertb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("convertb");
            f.style.display = "none";
        }
  if (sresearch >= 200 && money >= 300 && land >= 10) {
          var f = document.getElementById("hydrob");
            f.style.display = "flex";
    var tt = document.getElementById("hydrod");
            tt.style.display = "flex";
        }
  if (hydro >= 2 && fishbh == false) {
          var f = document.getElementById("fishb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("fishb");
            f.style.display = "none";
        }
  if (wind >= 10 && solar >= 5 && friendlybh == false) {
          var f = document.getElementById("friendlyb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("friendlyb");
            f.style.display = "none";
        }
  if (cresearch >= 100 && sresearch >= 500 && money >= 9000) {
          var f = document.getElementById("bribesb");
            f.style.display = "flex";
        }
  if (sresearch >= 5000 && money >= 10000 && wind >= 20 && solar >= 5 && hydro >= 1 && rfusionbh == false) {
          var f = document.getElementById("rfusionb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("rfusionb");
            f.style.display = "none";
        }
  if (sresearch >= 10000 && money >= 10000 && greenbh == false) {
          var f = document.getElementById("greenb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("greenb");
            f.style.display = "none";
        }
  if (cresearch >= 150 && money >= 100) {
          var f = document.getElementById("accountantb");
            f.style.display = "flex";
    var tt = document.getElementById("accountantd");
            tt.style.display = "flex";
        }
  if (tractor >= 5 && cresearch >= 50) { 
          var f = document.getElementById("combineb");
            f.style.display = "flex";
    var tt = document.getElementById("combined");
            tt.style.display = "flex";
        }
  if (mineralr == true) {
          var f = document.getElementById("mineralb");
            f.style.display = "flex";
    var tt = document.getElementById("minerald");
            tt.style.display = "flex";
        }
  if (mineralr == true && land >= 10) {
          var f = document.getElementById("minerb");
            f.style.display = "flex";
    var tt = document.getElementById("minerd");
            tt.style.display = "flex";
        }
  if (mineralr == true && oil > 500) {
          var f = document.getElementById("oilb");
            f.style.display = "flex";
    var tt = document.getElementById("oild");
            tt.style.display = "flex";
        }
  if (cresearch >= 150 && money >= 4500 && indig >= 5) {
          var f = document.getElementById("bribecb");
            f.style.display = "flex";
        }
  if (mineralr == true && miner >= 20) {
          var f = document.getElementById("pumpb");
            f.style.display = "flex";
    var tt = document.getElementById("pumpd");
            tt.style.display = "flex";
        }
  if (pump >= 50 && miner >= 10 && monopolizeobh == false) {
          var f = document.getElementById("monopolizeob");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("monopolizeob");
            f.style.display = "none";
        }
  if (land >= 50 && sresearch >= 100000) {
          var f = document.getElementById("shelterb");
            f.style.display = "flex";
    var tt = document.getElementById("shelterd");
            tt.style.display = "flex";
        }
  if (shelter + wealthy + impoverished >= 100 && monopolizesbh == false) {
          var f = document.getElementById("monopolizesb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("monopolizesb");
            f.style.display = "none";
        }
  if (laborlaws >= 20 && money >= 1000 && sresearch >= 1000) {
          var f = document.getElementById("hrb");
            f.style.display = "flex";
        }
  if (laborlaws >= 20 && money >= 500 && cresearch >= 1000) {
          var f = document.getElementById("prb");
            f.style.display = "flex";
        }
  if (land > 20 && money >= land * 200 && cresearch >= 300 && mineralrbh == false) {
          var f = document.getElementById("mineralrb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("mineralrb");
            f.style.display = "none";
        }
  if (sresearch > 1000 && paperlessbh == false) {
          var f = document.getElementById("paperlessb");
            f.style.display = "flex";
        } else {
          var f = document.getElementById("paperlessb");
            f.style.display = "none";
        }
}

//BUTTON FUNCTIONS
function seedClick() {
  if (seeds < 20 * land) {
  seeds ++;
  document.getElementById("seeds").innerHTML = seeds;
  }
}

function harvestClick() {
  if (seeds >= 20) {
    money += 40;
    seeds -= 20;
    harvestclicks++;
    document.getElementById("money").innerHTML = money;
    document.getElementById("seeds").innerHTML = seeds;
    document.getElementById("bug").innerHTML = bug;
  }
  if (tractor >= 1) {
    money += 10 * tractor;
  }
  if (fertilizer >= 1) {
    money += 5 * fertilizer;
  }
  if (cland > 0) {
    money += 50 * cland;
  }
}

function landClick() {
  if (money >= 30) {
    land ++;
    money -= 30;
    document.getElementById("land").innerHTML = land;
    document.getElementById("money").innerHTML = money;
    euse += 2;
  }
  if (land >= 15) {
    indig++;
    var df = document.getElementById("indigd");
            df.style.display = "none";
  }
}

function workerClick() {
  if (money >= 50) {
  workers ++;
  money -= 50;
  monmod5--;
  document.getElementById("workers").innerHTML = workers;
  document.getElementById("money").innerHTML = money;
  }
}

function tractorClick() {
  if (money >= 40) {
  tractor ++;
  money -= 40;
  carbon++;
  euse++;
  pollutants += 5;
  document.getElementById("tractor").innerHTML = tractor;
  document.getElementById("money").innerHTML = money;
  }
}

function catchBug() {
  if (bug > 0) {
    bug--;
    cbugs++;
  }
}

function fertilizerClick() {
  if (money >= 10) {
  fertilizer ++;
  money -= 10;
  pollutants++;
  }
  if (sresearch < 100) {
    badan--;
  }
}

function pesticideClick() {
  if (money >= 10) {
  pesticide ++;
  money -= 10;
  badan++;
  pollutants++;
  var bb = document.getElementById("pollutantsd");
            bb.style.display = "flex";
  } 
}

function solarClick() {
  if (money >= 200) {
  solar ++;
  money -= 200;  
  badan++;
  renew += 5;
  epro += 5;
  }
}

function sresearchClick() {
  if (money >= 250) {
  sresearchers ++;
  money -= 250;
  monmod5 -= 2;
  }
}

function cresearchClick() {
  if (money >= 100) {
  cresearchers ++;
  money -= 100;
  monmod5 -= 3;
  }
}

function bugcatcherClick() {
  if (money >= 20) {
    bugcatcher++;
    money -= 20;
    monmod5--;
  }
}

function compostClick() {
  if (cbugs > 0) {
    compost += cbugs * 3;
    cbugs -= cbugs;    
  }
}

function silkClick() {
  if (cbugs >= 100) {
    cbugs -= 100;
    silk++;
    monmod += 2;
  }
}

function hiveClick() {
  if (cbugs >= 30) {
    cbugs -= 30;
    hive++;
    monmod++;
  }
}

function bioClick() {
  if (compost >= 50) {
    compost -= 50;
    money += 100;
    epro++;
    renew++;
  } 
}

function gridClick() {
  if (compost >= 5000) {
    grid++;
    compost -= 5000;
    monmod += 15;
    renew += 10;
    epro += 10;
  }
}

function rbbotClick() {
  if (sresearch >= 200 && cbugs >= 200) {
    rbbotbh = true;
    alert("This is the first step to greatness. The bugbots can change the world.")
    var a = document.getElementById("bbotb");
            a.style.display = "flex";
    var b = document.getElementById("rbbotb");
            b.style.display = "none";
    var a = document.getElementById("bbotd");
            a.style.display = "flex";
  }
}

function bbotClick() {
  if (sresearch >= 300 && cbugs >= 50) {
    bbot++;
    cbugs -= 50;
    euse++;
  }
}

function bcbbotClick() {
  if (sresearch >= 400 && bbot >= 25) {
   bcbbot++;
   bbot -= 25;
    euse++;
  }
}

function automateClick() {
  if (bbot >= 1000) {
  automatebh = true;
  automate = true;
  monmod += 200;
  var b = document.getElementById("automateb");
            b.style.display = "none"; 
    euse +=5;
  }
}

function sbbotClick() {
  if (cresearch >= 100) {
    sbbotbh = true;
    var b = document.getElementById("bbotd");
            b.style.display = "none";
    var ps = document.getElementById("sbbotb");
            ps.style.display = "flex";
  }
}

function authoritarianClick() {
  if (bbot >= 1000) {
    alert("You've done it. Show off your victory. Take a screenshot.");
    authoritarianbh = true;
    authoritarian = true;
    var ps = document.getElementById("authoritarianb");
            ps.style.display = "none";
  }
}

function socialismClick() {
  if (automate == true && bbot >= 1000) {
  alert("You've done it. Show off your victory. Take a screenshot.");
  socialismbh = true;
  socialism = true;
  var ps = document.getElementById("socialismb");
            ps.style.display = "none";
  }
}

function windClick() {
  if (money >= 100) {
  wind++;
  money -= 100;
  badan += 2;
  epro ++;
  }
}

function excessClick() {
  if (epro > euse) {
    monmod += epro - euse;
  }
}

function clandClick() {
  if (land > 0 && money >= 200) {
    land--;
    cland++;
  }
  if (indig > 0) {
    indig--;
  }
}

function vegClick() {
  if (seeds >= 300 || tree >= 20) {
   veg += 20; 
  }
}

function treeClick() {
  tree++;
}

function convertClick() {
  if (sresearch >= 200 && money >= 1000) {
    convertbh = true;
    convert = true;
    money -= 1000;
    var q = document.getElementById("convertb");
    q.style.display = "none";
  }
}

function hydroClick() {
  if (money >= 500) {
    hydro++;
    money -= 500;
  }
  
}

function fishClick() {
  if (sresearch >= 400 && money >= 500) {
    fishbh = true;
  badan -= hydro * 3;
    money -= 500;
  var q = document.getElementById("fishb");
    q.style.display = "none";
  }
}

function friendlyClick() {
  if (sresearch >= 300 && money >= 400) {
    friendlybh = true;
  animal -= wind * 2 + solar;
  money -= 400;
  var q = document.getElementById("friendlyb");
    q.style.display = "none";
  }
}

function bribesClick() {
  if (cresearch >= 100 && sresearch >= 500 && money >= 10000) {
    money -= 10000;
  }
}

function rfusionClick() {
  if (sresearch >= 5000 && money >= 10000) {
    rfusionbh = true;
    money -= 10000;
    var q = document.getElementById("fusionb");
    q.style.display = "flex";
    var qq = document.getElementById("rfusionb");
    qq.style.display = "none";
  }
}

function fusionClick() {
  if (sresearch >= 10000 && money >= 20000) {
    money -= 20000;
    var ii = document.getElementById("emonopolize");
    ii.style.display = "flex";
    var iii = document.getElementById("fusionb");
    iii.style.display = "none";
    epro += 100;
  }
}

function emonopolizeClick() {
  if (money >= 30000) {
    
    money -= 30000;
    //increase money interval
    var q = document.getElementById("emonopolizeb");
    q.style.display = "none";
  }
}

function greenClick() {
  if (sresearch >= 10000 && money >= 1000) {
    greenbh = true;
    money -= 1000;
    var q = document.getElementById("greenb");
    q.style.display = "none";
    var q = document.getElementById("demob");
    q.style.display = "flex";
    //display narrative div
  }
}

function demoClick() {
  if (sresearch >= 100000 && money >= 10000) {
    money -= 10000;
    var q = document.getElementById("demob");
    q.style.display = "none";
    //display narrative div
  }
}

function accountantClick() {
  if (cresearch >= 100 && money >= 100) {
    accountant++;
    money -= 100;
    monmod5 -= 2;
  }
}

function combineClick() {
  if (money >= 100) {
    money -= 100;
    combine++;
    euse += 2;
  }
}

function mineralClick() {
  money += 20 * mineral;
  mineral -= mineral;
  
}

function minerClick() {
  if (money >= 75) {
  miner++;
  money -= 75;
  monmod5--;
  }
}

function oilClick() {
  exporto= true;
  var f = document.getElementById("oilb");
            f.style.display = "none";
}

function bribecClick() {
  if (cresearch >= 200 && money >= 5000) {
    laborlaws = 0;
    indig = 0;
    money -= 5000;
    var f = document.getElementById("bribecb");
            f.style.display = "none";
    monmod += 10;
  }
}

function pumpClick() {
  if (money >= 500) {
    money -= 500;
    pump++;
    euse++;
  }
}

function monopolizeoClick() {
  monopolizeobh = true;
  monopolizeo = true;
  var f = document.getElementById("monopolizeob");
            f.style.display = "none";
  var h = document.getElementById("spaceb");
            h.style.display = "flex";
  monmod += 100;
}

function spaceClick() {
  if (sresearch >= 1000 && cresearch >= 100000 && money >= 12000) {
    money -= 12000;
    var f = document.getElementById("rocketb");
            f.style.display = "flex";
    var g = document.getElementById("spaceb");
            g.style.display = "none";
  }
}

function rocketClick() {
  if (money >= 1000000000) {
    money -= 1000000000;
    var f = document.getElementById("rocketb");
            f.style.display = "none";
    var k = document.getElementById("spaceob");
            k.style.display = "flex";
    euse += 10;
  }
}

function spaceoClick() {
  if (money >= 100000) {
    money -= 100000;
    spump++;
    var f = document.getElementById("exportsob");
            f.style.display = "flex";
  }
}

function exportsoClick() {
  exportso = true;
  var f = document.getElementById("rocketb");
            f.style.display = "none";
}

function shelterClick() {
  if (sresearch >= 100000 && money >= 100000) {
    money -= 100000;
    shelter++;
    var f = document.getElementById("wealthyb");
            f.style.display = "flex";
    var j = document.getElementById("impoverishedb");
            j.style.display = "flex";
  }
}

function wealthyClick() {
  if (cresearch >= 1000000 && shelter > 0) {
    shelter--;
    wealthy++;
    monmod +=5;
  }
}

function impoverishedClick() {
  if (sresearch >= 500000 && shelter > 0) {
    shelter--;
    impoverished++;
    monmod += 3;
  }
}

function monopolizesClick() {
  if (shelter + wealthy + impoverished >= 100 && money >= 5000000) {
    monopolizesbh = true;
    money -= 5000000;
    monpolizes = true;
    var f = document.getElementById("monopolizesb");
            f.style.display = "none";
    var f = document.getElementById("cauthoritarianb");
            f.style.display = "flex";
    monmod += 15;
  }
}

function cauthoritarianClick() {
  if (monpolizes == true && money >= 1000000000 || cresearch >= 1000000000 && money >= 1000000000) {
    cauthoritarianbh = true;
    money -= 1000000000;
    var f = document.getElementById("cauthoritarianb");
            f.style.display = "none";
    //hide button;
  }
}

function hrClick() {
  if (laborlaws >= 20 && money >= 1000 && sresearch >= 1000) {
    laborlaws -= laborlaws;
    //set labor law interval
  }
}

function prClick() {
  if (laborlaws >= 20 && money >= 500 && cresearch >= 1000) {
    laborlaws -= laborlaws;
    pr++;
    //set labor law interval
  }
}

function mineralrClick() {
  if (land > 20 && money >= land * 200) {
    mineralrbh = true;
    mineralr = true;
    money -= land * 200;
  }
  //show hire miner and sell minerals
  //hide button
}

function paperlessClick() {
  if (money > 10000 && sresearch > 1000) {
    paperlessbh = true;
    alert("This did nothing.")
  }
  
}



//VARIABLE REFRESH DISPLAY VALUES
//update this
window.setInterval(function(){
      document.getElementById("money").innerHTML = money;
      document.getElementById("seeds").innerHTML = seeds;
      document.getElementById("workers").innerHTML = workers;
      document.getElementById("land").innerHTML = land;
      document.getElementById("tractor").innerHTML = tractor;
      document.getElementById("clicks").innerHTML = clicks;
      document.getElementById("fertilizer").innerHTML = fertilizer;
      document.getElementById("pesticide").innerHTML = pesticide;
      document.getElementById("cresearch").innerHTML = cresearch;
      document.getElementById("sresearch").innerHTML = sresearch;
      document.getElementById("solar").innerHTML = solar;
      document.getElementById("bug").innerHTML = bug;
      document.getElementById("cbugs").innerHTML = cbugs;
      document.getElementById("sresearchers").innerHTML = sresearchers;
      document.getElementById("cresearchers").innerHTML = cresearch;
      document.getElementById("bugcatcher").innerHTML = bugcatcher;
      document.getElementById("compost").innerHTML = compost;
      document.getElementById("silk").innerHTML = silk;
      document.getElementById("hive").innerHTML = hive;
      document.getElementById("bio").innerHTML = bio;
      document.getElementById("bbot").innerHTML = bbot;
      document.getElementById("sbbot").innerHTML = bbot;
      document.getElementById("bcbbot").innerHTML = bcbbot;
      document.getElementById("wind").innerHTML = wind;
      document.getElementById("cland").innerHTML = cland;
      document.getElementById("veg").innerHTML = veg;
      document.getElementById("tree").innerHTML = tree;
      document.getElementById("hydro").innerHTML = hydro;
      document.getElementById("accountant").innerHTML = accountant;
      document.getElementById("combine").innerHTML = combine;
      document.getElementById("mineral").innerHTML = mineral;
      document.getElementById("miner").innerHTML = miner;
      document.getElementById("pump").innerHTML = pump;
      document.getElementById("oil").innerHTML = oil;
      document.getElementById("spump").innerHTML = spump;
      document.getElementById("shelter").innerHTML = shelter;
      document.getElementById("wealthy").innerHTML = wealthy;
      document.getElementById("impoverished").innerHTML = impoverished;
      document.getElementById("laborlaws").innerHTML = laborlaws;
      document.getElementById("indig").innerHTML = indig;
      document.getElementById("grid").innerHTML = grid;
      document.getElementById("badan").innerHTML = badan;
      document.getElementById("image").innerHTML = image;
      document.getElementById("compuse").innerHTML = compuse;
      document.getElementById("pollutants").innerHTML = pollutants;
      document.getElementById("usage").innerHTML = usage;
}, 100);

//VARIABLE REFRESH OPACITY
window.setInterval(function(){
      if (seeds == land * 20) {
      var za = document.getElementById("seedb");
          za.style.opacity = "0.6";
      } else {
      var za = document.getElementById("seedb");
          za.style.opacity = "1";
      }
  if (seeds < 20) {
      var za = document.getElementById("harvestb");
          za.style.opacity = "0.6";
      } else {
      var za = document.getElementById("harvestb");
          za.style.opacity = "1";
      }
  if (bug < 1) {
      var za = document.getElementById("catchbugb");
          za.style.opacity = "0.6";
      } else {
      var za = document.getElementById("catchbugb");
          za.style.opacity = "1";
      }
  if (money >= 30) {
      var za = document.getElementById("landb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("landb");
          za.style.opacity = "0.6";
      }
  if (money >= 50) {
      var za = document.getElementById("workerb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("workerb");
          za.style.opacity = "0.6";
      }
  if (money >= 40) {
      var za = document.getElementById("tractorb");
          za.style.opacity = "1";
      } else {
      var za = document.getElementById("tractorb");
          za.style.opacity = "0.6";
      }
  if (money >= 10) {
      var za = document.getElementById("fertilizerb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("fertilizerb");
          za.style.opacity = "0.6";
      }
  if (money >= 10) {
      var za = document.getElementById("pesticideb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("pesticideb");
          za.style.opacity = "0.6";
      }
  if (money >= 200) {
      var za = document.getElementById("solarb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("solarb");
          za.style.opacity = "0.6";
      }
  if (money >= 250) {
      var za = document.getElementById("sresearchb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("sresearchb");
          za.style.opacity = "0.6";
      }
  if (money >= 100) {
      var za = document.getElementById("cresearchb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("cresearchb");
          za.style.opacity = "0.6";
      }
  if (money >= 20) {
      var za = document.getElementById("bugcatcherb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("bugcatcherb");
          za.style.opacity = "0.6";
      }
  if (cbugs > 0) {
      var za = document.getElementById("compostb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("compostb");
          za.style.opacity = "0.6";
      }
  if (cbugs >= 100) {
      var za = document.getElementById("silkb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("silkb");
          za.style.opacity = "0.6";
      }
  if (cbugs >= 30) {
      var za = document.getElementById("hiveb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("hiveb");
          za.style.opacity = "0.6";
      }
  if (compost >= 50) {
      var za = document.getElementById("biob");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("biob");
          za.style.opacity = "0.6";
      }
  if (compost >= 5000) {
      var za = document.getElementById("gridb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("gridb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 200 && cbugs >= 200) {
      var za = document.getElementById("rbbotb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("rbbotb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 300 && cbugs >= 50) {
      var za = document.getElementById("bbotb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("bbotb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 400 && bbot >= 25) {
      var za = document.getElementById("bcbbotb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("bcbbotb");
          za.style.opacity = "0.6";
      }
  if (bbot >= 1000) {
      var za = document.getElementById("automateb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("automateb");
          za.style.opacity = "0.6";
      }
  if (cresearch >= 100) {
      var za = document.getElementById("sbbotb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("sbbotb");
          za.style.opacity = "0.6";
      }
  if (bbot >= 1000) {
      var za = document.getElementById("authoritarianb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("authoritarianb");
          za.style.opacity = "0.6";
      }
  if (automate == true && bbot >= 1000) {
      var za = document.getElementById("socialismb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("socialismb");
          za.style.opacity = "0.6";
      }
  if (money >= 100) {
      var za = document.getElementById("windb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("windb");
          za.style.opacity = "0.6";
      }
  if (epro > euse) {
      var za = document.getElementById("excessb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("excessb");
          za.style.opacity = "0.6";
      }
  if (land > 0 && money >= 200) {
      var za = document.getElementById("clandb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("clandb");
          za.style.opacity = "0.6";
      }
  if (seeds >= 300 || tree >= 20) {
      var za = document.getElementById("vegb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("vegb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 200 && money >= 1000) {
      var za = document.getElementById("convertb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("convertb");
          za.style.opacity = "0.6";
      }
  if (money >= 500) {
      var za = document.getElementById("hydrob");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("hydrob");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 400 && money >= 500) {
      var za = document.getElementById("fishb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("fishb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 300 && money >= 400) {
      var za = document.getElementById("friendlyb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("friendlyb");
          za.style.opacity = "0.6";
      }
  if (cresearch >= 100 && sresearch >= 500 && money >= 10000) {
      var za = document.getElementById("bribesb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("bribesb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 5000 && money >= 10000) {
      var za = document.getElementById("rfusionb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("rfusionb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 10000 && money >= 20000) {
      var za = document.getElementById("fusionb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("fusionb");
          za.style.opacity = "0.6";
      }
  if (money >= 30000) {
      var za = document.getElementById("emonpolizeb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("emonopolizeb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 10000 && money >= 1000) {
      var za = document.getElementById("greenb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("greenb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 100000 && money >= 10000) {
      var za = document.getElementById("demob");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("demob");
          za.style.opacity = "0.6";
      }
  if (cresearch >= 100 && money >= 100) {
      var za = document.getElementById("accountantb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("accountantb");
          za.style.opacity = "0.6";
      }
  if (money >= 100) {
      var za = document.getElementById("combineb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("combineb");
          za.style.opacity = "0.6";
      }
  if (mineral > 0) {
      var za = document.getElementById("mineralb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("mineralb");
          za.style.opacity = "0.6";
      }
  if (money >= 75) {
      var za = document.getElementById("minerb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("minerb");
          za.style.opacity = "0.6";
      }
  if (oil > 0) {
      var za = document.getElementById("oilb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("oilb");
          za.style.opacity = "0.6";
      }
  if (cresearch >= 200 && money >= 5000) {
      var za = document.getElementById("bribecb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("bribecb");
          za.style.opacity = "0.6";
      }
  if (money >= 500) {
      var za = document.getElementById("pumpb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("pumpb");
          za.style.opacity = "0.6";
      }
  if (oil > 1000) {
      var za = document.getElementById("monopolizeob");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("monopolizeob");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 1000 && cresearch >= 100000 && money >= 12000) {
      var za = document.getElementById("spaceb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("spaceb");
          za.style.opacity = "0.6";
      }
  if (money >= 1000000000) {
      var za = document.getElementById("rocketb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("rocketb");
          za.style.opacity = "0.6";
      }
  if (money >= 100000) {
      var za = document.getElementById("spaceob");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("spaceob");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 100000 && money >= 100000) {
      var za = document.getElementById("shelterb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("shelterb");
          za.style.opacity = "0.6";
      }
  if (cresearch >= 1000000 && shelter > 0) {
      var za = document.getElementById("wealthyb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("wealthyb");
          za.style.opacity = "0.6";
      }
  if (sresearch >= 500000 && shelter > 0) {
      var za = document.getElementById("impoverishedb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("impoverishedb");
          za.style.opacity = "0.6";
      }
  if (shelter + wealthy + impoverished >= 100 && money >= 5000000) {
      var za = document.getElementById("monopolizesb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("monopolizesb");
          za.style.opacity = "0.6";
      }
  if (monpolizes == true && money >= 1000000000 || cresearch >= 1000000000 && money >= 1000000000) {
      var za = document.getElementById("cauthoritarianb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("cauthoritarianb");
          za.style.opacity = "0.6";
      }
  if (laborlaws >= 20 && money >= 1000 && sresearch >= 1000) {
      var za = document.getElementById("hrb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("hrb");
          za.style.opacity = "0.6";
      }
  if (laborlaws >= 20 && money >= 500 && cresearch >= 1000) {
      var za = document.getElementById("prb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("prb");
          za.style.opacity = "0.6";
      }
  if (land > 20 && money >= land * 200) {
      var za = document.getElementById("mineralrb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("mineralrb");
          za.style.opacity = "0.6";
      }
  if (money > 10000 && sresearch > 1000) {
      var za = document.getElementById("paperlessb");
          za.style.opacity = "1.0";
      } else {
      var za = document.getElementById("paperlessb");
          za.style.opacity = "0.6";
      }
}, 100);


//VARIABLE RUNNING INCREMENTS

//one sec intervals
window.setInterval(function(){
      if (workers >= 1 && seeds < 20 * land) {
        seeds += workers * 2;
      }
      if (tractor >= 1 && seeds < 20 * land) {
        seeds += workers * 2;
      }
      if (clicks > 0) {
        compuse += (1000 - clicks) * 2;
      }
      
      cbugs += 2 * bugcatcher;
      usage = epro - euse;
}, 1000);
      

//five second intervals
window.setInterval(function(){
      if (bug >= 1 && seeds > 0) {
        seeds -= bug;
      }
      
      if (bug > 0)
        bug -= 1 * bugcatcher;
      sresearch += sresearchers * 2;
      cresearch += cresearchers * 2;
      bbot += bcbbot * 2;
}, 5000);
      

//ten second intervals
window.setInterval(function(){
      if (pesticide < bug) {
        bug ++;
      }
      image -= indig * 2 + laborlaws * 5 + carbon * 3 + badan * 4;
      image += pr * 20;
}, 10000);

//30 second intervals
window.setInterval(function(){
        bug ++;
}, 30000);



//money intervals
//1 sec
window.setInterval(function(){
        money += monmod;
}, 1000);

//5sec
window.setInterval(function(){
        money += monmod5;
}, 5000);
