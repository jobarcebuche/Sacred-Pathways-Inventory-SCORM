function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bwqBCfEtPM":
        Script1();
        break;
      case "60Ce7ntcCPj":
        Script2();
        break;
  }
}

function Script1()
{
  var a = GetPlayer();
let sum = a.GetVar("EnthusiasticWorship") + a.GetVar("Sensation");
let ave = sum / 2;
a.SetVar("AVESENTH", ave);
}

function Script2()
{
  var a = GetPlayer();
let avesol = (a.GetVar("EnthusiasticWorship") + a.GetVar("QuietPrayer")) / 2;
let avecom = (a.GetVar("Caregiving") + a.GetVar("SocialJustice")) / 2;
a.SetVar("ASCECON", avesol);
a.SetVar("CARSOC", avecom);
}

