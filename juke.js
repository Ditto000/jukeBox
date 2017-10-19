


function Jukebox() {
    	this.audio = new Audio();
    	this.audio.src = "01 Pray You Catch Me.m4a";
    	this.playSong = function() {
    		this.audio.play()
    	}
    }

    var myJukebox = new Jukebox();
    $("#selection").on("change", function(){
    	myJukebox.audio.src = document.getElementById('selection').value;
    	});
    
	$("#play").on("click", function(){
    	myJukebox.playSong(); 
        });
    	
    $('#pause').on("click", function(){
        myJukebox.audio.pause()
    	});