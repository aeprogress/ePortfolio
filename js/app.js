
var val = 1;
function changeGoalsU() 
{
    var upDownFrame = document.getElementById("upDownFrame").style;
    var backgroundColorStyle = document.getElementById("tright1").style;
    var arrowUp = document.getElementById("buttonUp").style;
    var arrowDown = document.getElementById("buttonDown").style;
    var CBackgroundColor0 = document.getElementById("udc0").style;
    var CBackgroundColor1 = document.getElementById("udc1").style;
    var CBackgroundColor2 = document.getElementById("udc2").style;
    var goal = document.getElementById("goal").innerHTML;
    var goald ="";
    if(val == 1)
    {
        CBackgroundColor1.backgroundColor = "whitesmoke";
        CBackgroundColor0.backgroundColor = "black";
        backgroundColorStyle.backgroundColor = "rgb(189, 155, 142)";
        backgroundColorStyle.padding = "8% 10%";
        arrowUp.visibility = "hidden";
        upDownFrame.top = "38%";
        goal = 'Develop as many skills as I can.';
        document.getElementById("goal").innerHTML = goal;
        goald = "In order to achieve this goal, I plan to take courses outside" 
        + "the university curriculum. In addition, I will keep an eye open to the" 
        + "workshops inside and outside the university.";
        document.getElementById("goalDetail").innerHTML = goald;
        val = 0;
    }
    else if(val == 2)
    {
        CBackgroundColor2.backgroundColor = "whitesmoke";
        CBackgroundColor1.backgroundColor = "black";
        arrowDown.visibility = "visible";
        backgroundColorStyle.backgroundColor = "rgb(142, 165, 189)";
        backgroundColorStyle.padding = "8% 10%";
        goal = 'Graduate with GPA above 3.97/4';
        document.getElementById("goal").innerHTML = goal;
        goald = "As part of my education career, I aspire to maintain a high" 
        + "GPA. My current GPA is 3.97, that means I am taking the right steps" 
        + "towards achieving this goal. Furthermore, I plan to keep walking" 
        + "on the road of successes through hard work.";
        document.getElementById("goalDetail").innerHTML = goald;
        val = 1;
    }
}
function changeGoalsD()
{
    var upDownFrame = document.getElementById("upDownFrame").style;
    var backgroundColorStyle = document.getElementById("tright1").style;
    var arrowUp = document.getElementById("buttonUp").style;
    var arrowDown = document.getElementById("buttonDown").style;
    var CBackgroundColor0 = document.getElementById("udc0").style;
    var CBackgroundColor1 = document.getElementById("udc1").style;
    var CBackgroundColor2 = document.getElementById("udc2").style;
    var goal = document.getElementById("goal").innerHTML;
    var goald ="";

    if(val == 0)
    {
        CBackgroundColor1.backgroundColor = "black";
        CBackgroundColor0.backgroundColor = "whitesmoke";
        backgroundColorStyle.backgroundColor = "rgb(142, 165, 189)";
        backgroundColorStyle.padding = "8% 10%";
        arrowUp.visibility = "visible";
        upDownFrame.top = "10%";
        goal = 'Graduate with GPA above 3.97/4';
        document.getElementById("goal").innerHTML = goal;
        goald = "As part of my education career, I aspire to maintain a" 
        + "high GPA. My current GPA is 3.97, that means I am taking the" 
        + "right steps towards achieving this goal. Furthermore, I plan to" 
        + "keep walking on the road of successes through hard work.";
        document.getElementById("goalDetail").innerHTML = goald;
        val = 1;

    }
    else if(val == 1)
    {
        CBackgroundColor1.backgroundColor = "whitesmoke";
        CBackgroundColor2.backgroundColor = "black";
        arrowDown.visibility = "hidden";
        backgroundColorStyle.backgroundColor = "rgb(142, 189, 158)";
        backgroundColorStyle.padding = "8% 10%";
        goal = 'Start an (IT) career<br>with a respectable company.';
        document.getElementById("goal").innerHTML = goal;
        goald = "As part of the plan to achieve this goal, I will apply to" 
        + "Saudi Aramco’s scholarship programme as soon as I complete the" 
        + "60-credit hour requirement.";
        document.getElementById("goalDetail").innerHTML = goald;
        val = 2;

    }
}