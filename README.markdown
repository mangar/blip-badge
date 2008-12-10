# Blip Badge

![Sample](http://blipbadge.marciogarcia.com/images/sample1.png "Sample")

## What

Do you want to show to everybody what are you listening on Blip.fm?
The best way is to put the Blip Badge on your personal website or your blog!
Try it now!


## Installation

Sample HTML to paste into your blog sidebar:

	<script>
	  BLIP_USERNAME = 'marciogarcia'
	</script>
	<script src="http://blipbadge.marciogarcia.com/blip-badge/v100/blip-badge.js" type="text/javascript"></script>

A full outline of available options:

	<script>
	  BLIP_USERNAME = 'marciogarcia'
	  BLIP_LIST_LENGTH = '5'
	  BLIP_FRAME_HEIGHT = '600px'
	  BLIP_DEBUG = 'true'
	  BLIP_STYLE = 'http://mangar.com.br/aaa.css';
	</script>
	<script src="http://blipbadge.marciogarcia.com/blip-badge/v100/blip-badge.js" type="text/javascript"></script>	

Only **BLIP\_USERNAME** is a required to badge get run.
The others parameter you can change to make the badge more sexy

- **BLIP\_LIST\_LENGHT** :: The default lenght of the music list is 10, if you want, you can change it for any size. Badge is prepared to provide a good look sizes: 5, 10, 15 and 20, more than 20 you have to change the BLIP_FRAME_HEIGHT for better view.
- **BLIP\_FRAME\_HEIGHT** :: The size of the badge. (default = 310px, good for 10 musics)
- **BLIP\_DEBUG** :: You can take a look on the real response header of the Blip.fm API (default = false)
- **BLIP\_STYLE** :: That's the best one. If the default stylesheet is not fitting well in your website, you can create a new one!

## Existing installations/demonstrations: 

- [Marcio Garcia (Blog BR)](http://blog.mangar.com.br "Marcio Garcia (Blog BR)")
- [BlipBadge website](http://blipbadge.marciogarcia.com "Blip Badge official website")

## License

This code is free to use under the terms of the MIT license.