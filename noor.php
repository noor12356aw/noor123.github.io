<?php
    $con = mysqli_connect("localhost", "root","")
    or die("Could not connect to the server");
    echo "Connected to the sever<br>";
    mysqli_select_db($con, "customers")
    or die("Could not connect to the DB");
    echo "Connected to DB<br><br>";

    Print("<h1>Click the button to print the data from table</h1>");
    print('<form action="" method="post">');
    print("<input type='submit' name='submit' value='Print Data'><br><br>");
    print("</form>");


    if(isset($_POST['submit']))
    {
     
    
    $dbp = mysqli_query($con, "select * from customers")
    or die ("Problem reading table");
    
    print("<table border=1 width=60%>");
    print ("<tr><th>Name</th><th>Email</th><th>Phone number</th><th>Total</th></tr>");
   
    while($row = mysqli_fetch_array($dbp))
    {
        print("<tr><td>".$row["Name"]."</td>");
        print("<td>".$row["Email"]."</td>");
        print("<td>".$row["Phone Number"]."</td>");
        print("<td>".$row["Total"]."</td></tr>");
    }
    }

    echo "</table>";
    mysqli_close($con);
?>