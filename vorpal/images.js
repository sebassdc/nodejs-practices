# /home/sebassdc/.nvm/versions/node/v5.6.0/bin/node
var sharp = require('sharp'),
	mmm = require('mmmagic'),
	Magic = mmm.Magic;

vorpal
	.command('resize <path> [width] [height]', 'Resize an image or all images in a folder')
	.action(function(args, cb) {
		const self = this;
		path = args.path;
		// if a width and height are defined when the command is called, set them
		if (args.width)
			width = args.width;
		if (args.height)
			height = args.height;
		// resize all images in a directory to a set width
		if (fs.lstatSync(path).isDirectory()) {
			this.prompt({
				type: 'confirm',
				name: 'continue',
				default: false,
				message: 'Resize all images in the folder? ',
			},
			function(result){
				if (result.continue) {
					files = fs.readdirSync(args.path);
					// skip the prompts if a width was supplied
					if (width)
						doResize(self);
					else
						getWidth(self);
				}
				else {
					cb();
				}
			});
		}
		// resize a single image
		else if (fs.lstatSync(args.path).isFile()) {
			// get the file name without the path
			files = [args.path.split("/").pop()];
			//get the path without the file name
			path = args.path.substr(0, args.path.lastIndexOf('/'))
			// skip the questions if a width was supplied
			if (width)
				doResize(self);
			else
				getWidth(self);
		}
	});
