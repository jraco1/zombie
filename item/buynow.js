
var errorMsg = ["Insufficient cats",
                "Volcano in Pittsburg",
                "Seller eaten",
                "Wolfhounds on tail",
                "African blizzards",
                "Zombie ate my shorts",
                "Ran out of llama-themed wrapping paper",
                "Out of left-handed wingnuts",
                "carrots",
                "Delivery system bought out by Santa",
                "Mail-gremlin revolt",
                "Complete collapse of monetary system, convert all funds to mustache wax",
                "DON'T BLINK!!",
                "Delivery Alpcas haven't been braided",
                "Warehouse relocated to Moon, please contact Musk",
                "Unicorns stole my kidney",
                "The zombified llamas are harder to train than we thought",
                "Ran out of lint"];

function buynow() {
    
    var i = Math.floor (Math.random() * Math.floor (errorMsg.length));
    
    alert ("Error: " + errorMsg[i] + "!");
}