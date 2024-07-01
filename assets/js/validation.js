//  Email validation solution, source Rasel Mahmud: https://gist.github.com/rsmahmud/f6ad75b8a212a18720fd833b54ea6644
//  ... I used this script in unit 4. We had to find a piece of code, analyze it, then integrate it with improvements
//  ... I left here + it in ../home/welcome/index.html bc the assessor can hopefully see it cited twice.
//  ... here is what i changed from my .git log:
//  barquerohr: i modified flag var name && alerts for clarity, i also -rm val checks for brevity
                
    function Validate() {
        var email = document.getElementById("email").value;

        if(email == "") {
            alert("Empty email field. Provide your email id.");
            document.getElementById("email").focus();
            return false;
        }

        var len = email.length;
        var atcount = 0;
        var atpos;
        var dotAfterAtFound = false;

        for(var i = 0; i < len; i++) {
            if(email[i] == '@') {
                atpos = i;
                atcount++;
            }
            if(email[i] == ' ') {
                alert("Invalid email: unexpected character. Try again.");
                document.getElementById("email").focus();
                return false;
            }
        }

        if(atcount != 1 || email[len-1] == '.' || email[len-2] == '.' || email[atpos+1] == ".") {
            alert("Invalid email. Try again.");
            document.getElementById("email").focus();
            return false;
        }

        for(var i = atpos + 1; i < len; i++) {
            if(email[i] == ".") {
                dotAfterAtFound = true;
                break;
            }
        }

        if(!dotAfterAtFound) {
            alert("Invalid email: '.' character missing after '@'. Try again.");
            document.getElementById("email").focus();
            return false;
        }

        alert("Success.");
        return true;
    }