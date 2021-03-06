jQuery.noConflict(true);
var count=0;


$(function() {
	$('.chat-message').livequery(function() {
       // $(".chat-content").before("<br>");
       if(count === 0){
			
       		//Let's hide some stuff we don't need
			$('.chat-title').hide();
			$('.chat-content').hide();	
			$('#controlbox').hide();			


			//And get ourselves set up
		    $(".chat-content").before("<br>");
			$('.chatbox').after('<div class="border-div"></div>');
			$('.border-div:first').css('display', 'none');
			$('.border-div:last').css('display', 'none');

			//for each chatbox       	
       		$('.chatbox').each(function(){

       			// Get our info
				var name = $.trim($(this).children('.chat-head').text());
				var message = $.trim($(this).children('.chat-content').html());
				id = $.trim($(this).attr('id')) + '-button';
				var txt = "<ul class='txt'><li class='name'> " + name + " </li><li class='message'> "+ message +" <li></ul>";
				var right_bar_button='';


				//Add our next button
				if(name != 'ContactsRooms'){
					right_bar_button = "<div class='side_button' id='"+id+"'><img src='../images/page_framework/RightButton.svg'><p>View</p> </div>";	
				}


				//Back from full convo
				// var back_full_convo = "<div class='side_button' id='"+id+"'><img src='../images/page_framework/LeftButton.svg'><p>Back</p> </div>";	
				// var back_compose = "<div class='side_button' id='"+id+"'><img src='../images/page_framework/LeftButton.svg'><p>Back</p> </div>";	


				var clicky = 'div#'+id;

				
				// console.log('pic '+pic);
				$(this).children('div.chat-head.chat-head-chatbox').after(right_bar_button);
				$(this).children('div.chat-head.chat-head-chatbox').after(txt);


			  });

			start();
			count++;
       }

       console.log('message added');
       
	});

});


		

function start(){
	var id='';
	//View full convo
	$('.side_button').on('click', function(){
		// frame
		$('.side_button').hide();
		$('.border-div').hide();
		$('.chatbox').hide();
		$('.chat-message').show();
		$(this).parent().css('display', 'block');
		id = $(this).parent().attr('id');
		// alert(id);

		//buttons
		$('#compose_button').show();
		$('#back_full_convo').show();
	})
	$('#back_full_convo').on('click', function(){
		$('.side_button').show();
		$('.border-div').show();
		$('.chatbox').show();
		$('.chat-message').hide();

		$('#compose_button').hide();
		$('#back_full_convo').hide();

	})

	//Compose Reply	
	$('#compose_button').on('click',function(){
		$('.chat-message').hide();
		$('.chat-textarea').show();
		$('.sendXMPPMessage').css('height', '200px');
		$('.sendXMPPMessage').css('width', '200px');

		//
		$('#compose_button').hide();
		$('#back_full_convo').hide();
		$('#back_reply').show();
		$('#post_button').show();	
	})

	$('#back_reply').on('click', function(){
		// $('.chatbox').show();

		$('.chat-message').show();
		$('.chat-textarea').hide();
		$('.sendXMPPMessage').css('height', '0');
		$('.sendXMPPMessage').css('width', '0');

		// $(this).parent().css('display', 'block');
		$('#'+id).show();
		// alert(id);

		
		$('#compose_button').show();
		$('#back_full_convo').show();
		$('#back_reply').hide();
		$('#post_button').hide();			
	});

	//Post
	$('#post_button').on('click', function(){
	// $('textarea.chat-textarea').on('click', function() {
		// alert('posted');
		// $('.sendXMPPMessage').submit();
		// $('.chat-textarea').submit();
		// var enter = 13;
		// var e = jQuery.Event("keydown");
		// console.dir(e);
		// e.which = 13; // some value (backspace = 8)
		// $('textarea.chat-textarea').trigger(e);

		var e = jQuery.Event("keypress", {keyCode: 13});
		e.which = 13; 
		// $('textarea.chat-textarea').on('keypress', function(e) {
		//    console.log(e.which);
		// });
		$('textarea.chat-textarea').trigger(e);

		// $(document).trigger(e);​
	});

	$('textarea.chat-textarea').keypress(function(e){
		console.log('caught');
		console.log(e);
	});


};

