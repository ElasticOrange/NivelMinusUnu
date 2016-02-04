$(document).ready(function()
{
	$(window).bind( 'scroll', function(e) 
    {
		parallaxScroll();
	} );

    // Menu links
    $('#menu-1').click(function(e)
    {
        $.scrollTo(0, 1000);
        e.preventDefault();
    });

    $('#menu-2').click(function(e)
    {
        $.scrollTo(642, 1000);
        e.preventDefault();
    });

    $('#menu-3').click(function(e)
    {
        $.scrollTo(1030, 1000);
        e.preventDefault();
    });

    $('#menu-4').click(function(e)
    {
        $.scrollTo(1300, 1000);
        e.preventDefault();
    });

    $('#menu-5').click(function(e)
    {
        $.scrollTo(1700, 1000);
        e.preventDefault();
    });

    $('#menu-6').click(function(e)
    {
        $.scrollTo(2149, 1000);
        e.preventDefault();
    });    

    // Galerie sala
    $('#galerie-sala').click(function(e)
    {
        e.preventDefault();

        $.fancybox.open(
                [
                    {
                        href: 'images/sala/1.jpg'
                    },
                    {
                        href: 'images/sala/2.jpg'
                    },
                    {
                        href: 'images/sala/3.jpg'
                    },
                    {
                        href: 'images/sala/4.jpg'
                    },
                    {
                        href: 'images/sala/5.jpg'
                    },
                    {
                        href: 'images/sala/6.jpg'
                    },
                    {
                        href: 'images/sala/7.jpg'
                    },
                    {
                        href: 'images/sala/8.jpg'
                    },
                    {
                        href: 'images/sala/9.jpg'
                    },
                    {
                        href: 'images/sala/10.jpg'
                    },
                    {
                        href: 'images/sala/11.jpg'
                    },
                    {
                        href: 'images/sala/12.jpg'
                    },
                    {
                        href: 'images/sala/13.jpg'
                    },
                    {
                        href: 'images/sala/14.jpg'
                    },
                    {
                        href: 'images/sala/15.jpg'
                    },
                    {
                        href: 'images/sala/16.jpg'
                    },
                    {
                        href: 'images/sala/17.jpg'
                    },
                    {
                        href: 'images/sala/18.jpg'
                    },
                    {
                        href: 'images/sala/19.jpg'
                    },
                    {
                        href: 'images/sala/20.jpg'
                    },
                    {
                        href: 'images/sala/21.jpg'
                    }
                ],
                {
                    openEffect: 'none',
                    closeEffect: 'none',
                    prevEffect: 'fade',
                    prevSpeed: 200,
                    nextEffect : 'fade',
                    nextSpeed: 200,
                }
            );
    });

    // Galerie sala
    $('#galerie-expozitie').click(function(e)
    {
        e.preventDefault();

        $.fancybox.open(
                [
                    {
                        href: 'images/expozitie/1.jpg'
                    },
                    {
                        href: 'images/expozitie/2.jpg'
                    },
                    {
                        href: 'images/expozitie/3.jpg'
                    },
                    {
                        href: 'images/expozitie/4.jpg'
                    },
                    {
                        href: 'images/expozitie/5.jpg'
                    },
                    {
                        href: 'images/expozitie/6.jpg'
                    },
                    {
                        href: 'images/expozitie/7.jpg'
                    },
                    {
                        href: 'images/expozitie/8.jpg'
                    },
                    {
                        href: 'images/expozitie/9.jpg'
                    },
                    {
                        href: 'images/expozitie/10.jpg'
                    }
                ],
                {
                    openEffect: 'none',
                    closeEffect: 'none',
                    prevEffect: 'fade',
                    prevSpeed: 200,
                    nextEffect : 'fade',
                    nextSpeed: 200,
                }
            );
    });
}); 

/* Scroll the background layers */

function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	$('#backgrounds').css('top',(0-(scrolled*1))+'px');
	$('#middles').css('top',(0-(scrolled*2))+'px');
	$('#foregrounds').css('top',(0-(scrolled*2.50))+'px');
}			
