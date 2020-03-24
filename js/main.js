function grade(){
    var mat =parseInt(document.getElementById("math").value);
    var sci = parseInt(document.getElementById("science").value);
    var eng = parseInt(document.getElementById("english").value);
    var fil = parseInt(document.getElementById("filipino").value);
    var phy = parseInt(document.getElementById("pe").value);

    if ( mat <=100 && mat >=90 )
    {
        document.getElementById("reMath").textContent = "Excellent";
    }
    else if ( mat <=89 && mat >=80 )
    {
        document.getElementById("reMath").textContent ="Good";
    }
    else if ( mat <=79 && mat >=70 )
    {
        document.getElementById("reMath").textContent = "Average";
    }
    else if ( mat <= 69 && mat >=60)
    {
        document.getElementById("reMath").textContent = "Poor";
    }
    else
    {
        document.getElementById("reMath").textContent ="Fail";
    }


    if ( eng <=100 && eng >=90 )
    {
        document.getElementById("reEnglish").textContent = "Excellent";
    }
    else if ( eng <=89 && eng >=80 )
    {
        document.getElementById("reEnglish").textContent ="Good";
    }
    else if ( eng <=79 && eng >=70 )
    {
        document.getElementById("reEnglish").textContent = "Average";
    }
    else if ( eng <= 69 && eng >=60)
    {
        document.getElementById("reEnglish").textContent = "Poor";
    }
    else
    {
        document.getElementById("reEnglish").textContent ="Fail";
    }


    if ( sci <=100 && sci >=90 )
    {
        document.getElementById("reScience").textContent = "Excellent";
    }
    else if ( sci <=89 && sci >=80 )
    {
        document.getElementById("reScience").textContent ="Good";
    }
    else if ( sci <=79 && sci >=70 )
    {
        document.getElementById("reScience").textContent = "Average";
    }
    else if ( sci <= 69 && sci >=60)
    {
        document.getElementById("reScience").textContent = "Poor";
    }
    else
    {
        document.getElementById("reScience").textContent ="Fail";
    }


    if ( fil <=100 && fil >=90 )
    {
        document.getElementById("reFilipino").textContent = "Excellent";
    }
    else if ( fil <=89 && fil >=80 )
    {
        document.getElementById("reFilipino").textContent ="Good";
    }
    else if ( fil <=79 && fil >=70 )
    {
        document.getElementById("reFilipino").textContent = "Average";
    }
    else if ( fil <= 69 && fil >=60)
    {
        document.getElementById("reFilipino").textContent = "Poor";
    }
    else
    {
        document.getElementById("reFilipino").textContent ="Fail";
    }


    if ( phy <=100 && phy >=90 )
    {
        document.getElementById("rePe").textContent = "Excellent";
    }
    else if ( phy <=89 && phy >=80 )
    {
        document.getElementById("rePe").textContent ="Good";
    }
    else if ( phy <=79 && phy >=70 )
    {
        document.getElementById("rePe").textContent = "Average";
    }
    else if ( phy <= 69 && phy >=60)
    {
        document.getElementById("rePe").textContent = "Poor";
    }
    else
    {
        document.getElementById("rePe").textContent ="Fail";
    }

    if (mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && phy <= 100 && phy >= 90)
    {
        document.getElementById("rank").textContent="Top Honor Student";
    }
    else if (mat <= 69 && mat >= 0 && sci <= 69 && sci >= 0 && eng <= 69 && eng >= 0 && fil <= 69 && fil >= 0 && phy <= 69 && phy >= 0)
     {
         document.getElementById("rank").textContent="Repeater";
     }
    else if ((mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && phy <= 100 && phy >= 90) || (mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || (mat <= 100 && mat >= 90 && fil <= 100 && fil >= 90 && phy <= 100 && phy >= 90) || (mat <= 100 && mat >= 90 && eng <= 100 && eng >= 90 && phy <= 100 && phy >= 90) || (mat <= 100 && mat >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) || (fil <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && phy <= 100 && phy >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && phy <= 100 && phy >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && phy <= 100 && phy >= 90) )
    {
        document.getElementById("rank").textContent="Second Honorable Student";
    }
    else
    {
        document.getElementById("rank").textContent="None";
    }
}

 function getName(){
     var getName =prompt("Name:");
    
    if( getName != null)
    {
        document.getElementById('stdname').innerHTML = "Student Name:" + " " + getName;
    }
 }