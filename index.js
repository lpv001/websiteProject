 // Add active class to the current button (highlight it)
       var header = document.getElementById("navbar-nav");
       var example = header.getElementsByClassName("nav-act");
       for (var i = 0; i < example.length; i++) {
        example[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
       }
