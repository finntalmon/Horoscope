var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "That date does not exist!"];
var message = [
        "The Capricorn is resilient and strong. Social, warm, and friendly, are those who hold the Capricorn zodiac sign.",
        "The Aquarius spirit is intelligent, sociable, and also introverted. Logic rules the heart of the Aquarius when it comes to finding balance and peace.",
        "Pisces may not be the biggest doer of the zodiac, but they are definitely one of the most creative, and also one of the most psychic!",
        "Aries are fearless adventurers that are always looking for excitement in life. Whether it’s blazing new trails or overcoming challenges,",
        "The Taurus is resilient and strong, just like the Bull that symbolizes this unique zodiac sign. Social, warm, and friendly, are those who hold the Taurus zodiac sign.",
        "Geminis are known for their gift of gab. The core feeling of Gemini is one of enthusiasm and youthfulness.",
        "Cancer zodiac signs have a strong connection to their feelings and emotions and are strong empathizers that make outstanding lifelong friends.",
        "Leo is considered the warmest and most generous sign of the Zodiac. This is what makes Leos such natural teachers, entertainers, and managers.",
        "Virgo zodiac sign are compassionate, relationship-focused individuals. The Virgo zodiacs have a lot of love to give, and hold incredibly high standards for themselves",
        "The Libra is an amazing communicator and intellectual that enjoys taking the time to properly process and understand his or her emotions and feelings.",
        "The key to any Scorpio’s success is to learn how to compromise. That can be hard for Scorpio, for you don’t suffer fools lightly, and you don’t take criticism kindly",
        "A person born under the Sagittarius sign is quick to try new things and this openness and curiosity helps to attract opportunities. ",
        "Please enter another date."];
var images = ['Images/capri.png','Images/aquari.png','Images/pisces.png','Images/aries".png','Images/taurus.png','Images/gemini.png','Images/cancer.png','Images/leo.png','Images/virgo.png','Images/libra.png','Images/scorpio.png','Images/sagittarius.png','Images/error.jpg'];
var sign = 0;

    function retrieveHoroscope(month,day){
    if(month==0){
        if(day <=19){
            return 0;
        }
        if (day>=20){
            return 1;
            }
        }

    if(month==1){
        if(day <=18){
            return 1;
        }
        if (day>=19 && day <= 28){
            return 2;
        }
        if(day >= 29) {
            return 12;

        }
    }

    if(month==2){
        if(day <=20){
            return 2;
        }
        if (day>=21){
            return 3;
        }
    }

    if(month==3){
        if(day <=20){
            return 3;
        }
        if (day>=21 && day <= 30){
            return 4;
        }
        if(day > 30){
            return 12;
        }
    }
    if(month==4){
        if(day <=21){
            return 4;
        }
        if (day>=21){
            return 5;
        }
    }
    if(month==5){
        if(day <=20){
            return 5;
        }
        if (day>=21){
            return 6;
        }
        if(day > 30){
            return 12;
        }
    }
    if(month==6){
        if(day <=22){
            return 6;
        }
        if (day>=23 && day <= 30){
            return 7;
        }
    }
    if(month==7){
        if(day <=22){
            return 7;
        }
        if (day>=23){
            return 8;
        }
    }
    if(month==8){
        if(day <=22){
            return 8;
        }
        if (day>=23 && day <= 30){
            return 9;
        }
        if(day > 30){
            return 12;
        }
    }
    if(month==9){
        if(day <=22){
            return 9;
        }
        if (day>=23){
            return 10;
        }
    }
    if(month==10){
        if(day <=21){
            return 10;
        }
        if (day>=22 && day <= 28){
            return 11;
        }
        if(day > 30){
            return 12;
        }
    }
    if(month==11){
        if(day <=21){
            return 11;
        }
        if (day>=22){
            return 12;
        }
    }

}



function onSubmit() {
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var username = document.getElementById('username').value;
    var number = retrieveHoroscope(month,day);
    var signText = signs[number];
    var messageText = message[number];
    var birthday = findBirthday(month,day);
    document.getElementById('image').src = images[number];
    if(number == 12){
        document.getElementById('horoscope').innerHTML = signText + " " + messageText;
    }else{
        document.getElementById('horoscope').innerHTML = username + " " + birthday + " you are a " + signText + ": " + messageText;
    }
}

function findBirthday(month, day){
    var bday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(day == currentDay && month == currentMonth){
        bday = "Happy Birthday! ";
    }
    return bday;
}