jQuery(document).ready(function($){

	var timelineBlocks = $('.cd-timeline-block'),
	offset = 0.8;
 //console.log("code reachable ");
 //    type animation
    $(".element").typed({
        strings: ["Hello World", " i am John","I love the Web ", "Visual Designer","Front End Engineer","> $johnwilson"],
        typeSpeed: 0.1
    });
    //type animation test
	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
       //        alert("testing");
        //console.log("code reachable scrool function ");
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
     //     console.log("code reachable till the hide block ");
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
       // console.log("code reachable till the show block ");
	}
});
