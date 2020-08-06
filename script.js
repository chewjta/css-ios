function batt(){
        let a;
        a= document.getElementById("animation");
        a.innerHTML= "&#xf240;";
        a.style.color = "green";
        setTimeout(function(){
            a.innerHTML = "&#xf241;";
        },1500);

setTimeout(function(){
            a.innerHTML = "&#xf242;";
            a.style.color="orange";
        },3000);

setTimeout(function(){
            a.innerHTML = "&#xf243;";
            a.style.color="red";
        },4500);

setTimeout(function(){
            a.innerHTML = "&#xf244;";
            a.style.color="red";
        },6000);
}
        batt();
        setInterval(batt,15000);

