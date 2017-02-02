function DayDiff(CurrentDate, compareDate) {
			var TYear=CurrentDate.getFullYear();
			var TDay=new Date(compareDate);
			TDay.getFullYear(TYear);
			var DayCount=(TDay-CurrentDate)/(1000*60*60*24);
			DayCount=Math.round(DayCount); 
			return(DayCount);
		}
		
$(document).ready(function() {
	
	$('#txtModal').modal('hide');
	$('.toggleModal').click(function(ev){
		ev.preventDefault();
		console.log("toggle modal executed");
		if (!!document.querySelector('body.modal-open')) {
			$('.modal').modal('hide');
		} else {
			console.log(this);
			var pid = $(this).data('modal');
			$.get('/modals/' + pid + '.txt', function(data){
				var headerRegex = /(?:<header>)(.|[\r\n])*(?:<\/header>)/g;
				var contentRegex = /(?:<content>)(.|[\r\n])*(?:<\/content>)/g;
				var headerContent = headerRegex.exec(data)[0];
				var bodyContent = contentRegex.exec(data)[0];
				document.querySelector("#txtModal").style.marginTop = document.querySelector(".navbar-header").offsetHeight+"px";
				$('#txtModal .modal-title').html(headerContent);
				$('#txtModal .modal-body').html(bodyContent);
				$('#txtModal').modal('show');
				document.querySelector('#txtModal').focus();
				$("#txtModal .modal-content").click();
			});
		}
	});
	
	$("#navbar.in a").not(".dropdown-toggle").click(function(event) { 
		$('.navbar-toggle').click();
	});
	
	$(document).click(function(event) { 
		if(!$(event.target).closest('#navbar').length) {
			if($('#navbar').is(".in")) {
				$('.navbar-toggle').click();
			}
		}        
	});
});