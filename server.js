const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const nodemailer = require("nodemailer"); 

const users = require("./routes/api/users");
const department = require("./routes/api/department");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/department", department);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.post('/routes/api/feedback',(req,res) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'itsxperthub.test@gmail.com', // generated ethereal user
      pass: '03111998' // generated ethereal password
    }
  });

  const coHtml = `
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title>Feedback</title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}

		.ie-browser table {
			table-layout: fixed;
		}

		[owa] .img-container div,
		[owa] .img-container button {
			display: block !important;
		}

		[owa] .fullwidth button {
			width: 100% !important;
		}

		[owa] .block-grid .col {
			display: table-cell;
			float: none !important;
			vertical-align: top;
		}

		.ie-browser .block-grid,
		.ie-browser .num12,
		[owa] .num12,
		[owa] .block-grid {
			width: 500px !important;
		}

		.ie-browser .mixed-two-up .num4,
		[owa] .mixed-two-up .num4 {
			width: 164px !important;
		}

		.ie-browser .mixed-two-up .num8,
		[owa] .mixed-two-up .num8 {
			width: 328px !important;
		}

		.ie-browser .block-grid.two-up .col,
		[owa] .block-grid.two-up .col {
			width: 246px !important;
		}

		.ie-browser .block-grid.three-up .col,
		[owa] .block-grid.three-up .col {
			width: 246px !important;
		}

		.ie-browser .block-grid.four-up .col [owa] .block-grid.four-up .col {
			width: 123px !important;
		}

		.ie-browser .block-grid.five-up .col [owa] .block-grid.five-up .col {
			width: 100px !important;
		}

		.ie-browser .block-grid.six-up .col,
		[owa] .block-grid.six-up .col {
			width: 83px !important;
		}

		.ie-browser .block-grid.seven-up .col,
		[owa] .block-grid.seven-up .col {
			width: 71px !important;
		}

		.ie-browser .block-grid.eight-up .col,
		[owa] .block-grid.eight-up .col {
			width: 62px !important;
		}

		.ie-browser .block-grid.nine-up .col,
		[owa] .block-grid.nine-up .col {
			width: 55px !important;
		}

		.ie-browser .block-grid.ten-up .col,
		[owa] .block-grid.ten-up .col {
			width: 60px !important;
		}

		.ie-browser .block-grid.eleven-up .col,
		[owa] .block-grid.eleven-up .col {
			width: 54px !important;
		}

		.ie-browser .block-grid.twelve-up .col,
		[owa] .block-grid.twelve-up .col {
			width: 50px !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media only screen and (min-width: 520px) {
			.block-grid {
				width: 500px !important;
			}

			.block-grid .col {
				vertical-align: top;
			}

			.block-grid .col.num12 {
				width: 500px !important;
			}

			.block-grid.mixed-two-up .col.num3 {
				width: 123px !important;
			}

			.block-grid.mixed-two-up .col.num4 {
				width: 164px !important;
			}

			.block-grid.mixed-two-up .col.num8 {
				width: 328px !important;
			}

			.block-grid.mixed-two-up .col.num9 {
				width: 369px !important;
			}

			.block-grid.two-up .col {
				width: 250px !important;
			}

			.block-grid.three-up .col {
				width: 166px !important;
			}

			.block-grid.four-up .col {
				width: 125px !important;
			}

			.block-grid.five-up .col {
				width: 100px !important;
			}

			.block-grid.six-up .col {
				width: 83px !important;
			}

			.block-grid.seven-up .col {
				width: 71px !important;
			}

			.block-grid.eight-up .col {
				width: 62px !important;
			}

			.block-grid.nine-up .col {
				width: 55px !important;
			}

			.block-grid.ten-up .col {
				width: 50px !important;
			}

			.block-grid.eleven-up .col {
				width: 45px !important;
			}

			.block-grid.twelve-up .col {
				width: 41px !important;
			}
		}

		@media (max-width: 520px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col>div {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num8 {
				width: 66% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
<div style="background-color:transparent;">
<div class="block-grid" data-body-width-father="500px" rel="col-num-container-box-father" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" data-body-width-son="500" rel="col-num-container-box-son" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#0068A5;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:200%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 24px; color: #0068A5;">
<p style="font-size: 14px; line-height: 60px; text-align: center; margin: 0;"><span style="font-size: 30px;"><strong>New Feedback Registered</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<p style="font-size: 12px; line-height: 21px; color: #555555; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;"><span style="font-size: 18px;">Feedback Registered To</span></p>
<ul style="color: #555555; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 14px;">
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Department Name : <strong>${req.body.name}</strong></span></li>
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Department Coordinator Email : <strong>${req.body.email}</strong></span></li>
</ul>
<p style="font-size: 12px; line-height: 21px; color: #555555; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;"><span style="font-size: 18px;">Feedback From</span></p>
<ul style="color: #555555; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 14px;">
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Name : <strong>${req.body.sendername}</strong></span></li>
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Email : <strong>${req.body.senderemail}</strong></span></li>
</ul>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Courier New', Courier, monospace"><![endif]-->
<div style="color:#000000;font-family:'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; font-size: 12px; line-height: 14px; color: #000000;">
<p style="font-size: 14px; line-height: 36px; text-align: center; margin: 0;"><span style="font-size: 30px;"><strong><span style="line-height: 36px; font-size: 30px;">Feedback</span></strong></span></p>
<p style="font-size: 14px; line-height: 16px; text-align: center; margin: 0;"> </p>
<p style="font-size: 14px; line-height: 21px; text-align: center; margin: 0;"><span style="font-size: 18px;"><strong><span style="line-height: 21px; font-size: 18px;">${req.body.feedback}</span></strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>`

const seHtml = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}

		.ie-browser table {
			table-layout: fixed;
		}

		[owa] .img-container div,
		[owa] .img-container button {
			display: block !important;
		}

		[owa] .fullwidth button {
			width: 100% !important;
		}

		[owa] .block-grid .col {
			display: table-cell;
			float: none !important;
			vertical-align: top;
		}

		.ie-browser .block-grid,
		.ie-browser .num12,
		[owa] .num12,
		[owa] .block-grid {
			width: 500px !important;
		}

		.ie-browser .mixed-two-up .num4,
		[owa] .mixed-two-up .num4 {
			width: 164px !important;
		}

		.ie-browser .mixed-two-up .num8,
		[owa] .mixed-two-up .num8 {
			width: 328px !important;
		}

		.ie-browser .block-grid.two-up .col,
		[owa] .block-grid.two-up .col {
			width: 246px !important;
		}

		.ie-browser .block-grid.three-up .col,
		[owa] .block-grid.three-up .col {
			width: 246px !important;
		}

		.ie-browser .block-grid.four-up .col [owa] .block-grid.four-up .col {
			width: 123px !important;
		}

		.ie-browser .block-grid.five-up .col [owa] .block-grid.five-up .col {
			width: 100px !important;
		}

		.ie-browser .block-grid.six-up .col,
		[owa] .block-grid.six-up .col {
			width: 83px !important;
		}

		.ie-browser .block-grid.seven-up .col,
		[owa] .block-grid.seven-up .col {
			width: 71px !important;
		}

		.ie-browser .block-grid.eight-up .col,
		[owa] .block-grid.eight-up .col {
			width: 62px !important;
		}

		.ie-browser .block-grid.nine-up .col,
		[owa] .block-grid.nine-up .col {
			width: 55px !important;
		}

		.ie-browser .block-grid.ten-up .col,
		[owa] .block-grid.ten-up .col {
			width: 60px !important;
		}

		.ie-browser .block-grid.eleven-up .col,
		[owa] .block-grid.eleven-up .col {
			width: 54px !important;
		}

		.ie-browser .block-grid.twelve-up .col,
		[owa] .block-grid.twelve-up .col {
			width: 50px !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media only screen and (min-width: 520px) {
			.block-grid {
				width: 500px !important;
			}

			.block-grid .col {
				vertical-align: top;
			}

			.block-grid .col.num12 {
				width: 500px !important;
			}

			.block-grid.mixed-two-up .col.num3 {
				width: 123px !important;
			}

			.block-grid.mixed-two-up .col.num4 {
				width: 164px !important;
			}

			.block-grid.mixed-two-up .col.num8 {
				width: 328px !important;
			}

			.block-grid.mixed-two-up .col.num9 {
				width: 369px !important;
			}

			.block-grid.two-up .col {
				width: 250px !important;
			}

			.block-grid.three-up .col {
				width: 166px !important;
			}

			.block-grid.four-up .col {
				width: 125px !important;
			}

			.block-grid.five-up .col {
				width: 100px !important;
			}

			.block-grid.six-up .col {
				width: 83px !important;
			}

			.block-grid.seven-up .col {
				width: 71px !important;
			}

			.block-grid.eight-up .col {
				width: 62px !important;
			}

			.block-grid.nine-up .col {
				width: 55px !important;
			}

			.block-grid.ten-up .col {
				width: 50px !important;
			}

			.block-grid.eleven-up .col {
				width: 45px !important;
			}

			.block-grid.twelve-up .col {
				width: 41px !important;
			}
		}

		@media (max-width: 520px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col>div {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num8 {
				width: 66% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
<div style="background-color:transparent;">
<div class="block-grid" data-body-width-father="500px" rel="col-num-container-box-father" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" data-body-width-son="500" rel="col-num-container-box-son" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#0068A5;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:200%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 24px; color: #0068A5;">
<p style="font-size: 14px; line-height: 60px; text-align: center; margin: 0;"><span style="font-size: 30px;"><strong>Feedback Registered Successfully</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 14px; color: #555555;">
<p style="font-size: 12px; line-height: 21px; margin: 0;"><span style="font-size: 18px;">Feedback Registered To</span></p>
<ul>
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Department Name : <strong>${req.body.name}</strong></span><span style="font-size: 18px; line-height: 21px;"></span></li>
</ul>
<p style="font-size: 12px; line-height: 21px; margin: 0;"><span style="font-size: 18px;">Feedback From</span></p>
<ul>
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Name : <strong>${req.body.sendername}</strong></span></li>
<li style="font-size: 12px; line-height: 14px;"><span style="font-size: 18px; line-height: 21px;">Email : <strong>${req.body.senderemail}</strong></span></li>
</ul>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Courier New', Courier, monospace"><![endif]-->
<div style="color:#000000;font-family:'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; font-size: 12px; line-height: 14px; color: #000000;">
<p style="font-size: 14px; line-height: 36px; text-align: center; margin: 0;"><span style="font-size: 30px;"><strong><span style="line-height: 36px; font-size: 30px;">Feedback</span></strong></span></p>
<p style="font-size: 14px; line-height: 16px; text-align: center; margin: 0;"> </p>
<p style="font-size: 14px; line-height: 21px; text-align: center; margin: 0;"><span style="font-size: 18px;"><strong><span style="line-height: 21px; font-size: 18px;">${req.body.feedback}</span></strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>`

const seText = `
Feedback Registered Successfully

To
Department Name : ${req.body.name}

From
Name : ${req.body.sendername}
Email : ${req.body.senderemail}

Feedback:
${req.body.feedback}
`
const coText = `
New Feedback Registered

To
Department Name : ${req.body.name}
Coordinator Email : ${req.body.email}

From
Name : ${req.body.sendername}
Email : ${req.body.senderemail}

Feedback:
${req.body.feedback}
`

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Customer Feedback System" <itsxperthub.test@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "New Feedback Recieved from "+req.body.sendername, // Subject line
    text: coText, // plain text body
    html: coHtml // html body
  });

  let valid = true;

  transporter.sendMail({
    from: '"Customer Feedback System" <itsxperthub.test@gmail.com>', // sender address
    to: req.body.senderemail, // list of receivers
    subject: "Your Feedback Submitted Successfully", // Subject line
    text: seText, // plain text body
    html: seHtml // html body
  },
  function (err,info)
  {
	  if(err)
	  {
		  valid=false;
	  console.log(err)
	  }
	  else
	  console.log(info)
  });
  if(valid){
	return res.status(200).send({
		message: "Feedback Submitted Successfully"
	});
}else{
	return res.status(500).send({
		message: "Failed To Submit Feedback"
	});
}
})

const validateEmail = require("./validation/email");

app.post('/verifyemail',(req,res) => {

	const { errors, isValid } = validateEmail(req.body);

	if (!isValid) {
	return res.status(400).json(errors);
	}

	let transporter = nodemailer.createTransport({
	  host: "smtp.gmail.com",
	  port: 465,
	  secure: true, // true for 465, false for other ports
	  auth: {
		user: 'itsxperthub.test@gmail.com', // generated ethereal user
		pass: '03111998' // generated ethereal password
	  }
	});

	const text = `
	Hello, ${req.body.name}
	Verification code to verify your email
	${req.body.email}
	at CUSTOMER FEEDBACK SYSTEM	is ${req.body.otp}.


	Please enter this verification code to create your account at CUSTOMER FEEDBACK SYSTEM.
	
	
	Ignore this email if you have not requested verification code.`

	const html = `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
	<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
	<meta content="width=device-width" name="viewport"/>
	<!--[if !mso]><!-->
	<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<!--<![endif]-->
	<style type="text/css">
			body {
				margin: 0;
				padding: 0;
			}
	
			table,
			td,
			tr {
				vertical-align: top;
				border-collapse: collapse;
			}
	
			* {
				line-height: inherit;
			}
	
			a[x-apple-data-detectors=true] {
				color: inherit !important;
				text-decoration: none !important;
			}
	
			.ie-browser table {
				table-layout: fixed;
			}
	
			[owa] .img-container div,
			[owa] .img-container button {
				display: block !important;
			}
	
			[owa] .fullwidth button {
				width: 100% !important;
			}
	
			[owa] .block-grid .col {
				display: table-cell;
				float: none !important;
				vertical-align: top;
			}
	
			.ie-browser .block-grid,
			.ie-browser .num12,
			[owa] .num12,
			[owa] .block-grid {
				width: 500px !important;
			}
	
			.ie-browser .mixed-two-up .num4,
			[owa] .mixed-two-up .num4 {
				width: 164px !important;
			}
	
			.ie-browser .mixed-two-up .num8,
			[owa] .mixed-two-up .num8 {
				width: 328px !important;
			}
	
			.ie-browser .block-grid.two-up .col,
			[owa] .block-grid.two-up .col {
				width: 246px !important;
			}
	
			.ie-browser .block-grid.three-up .col,
			[owa] .block-grid.three-up .col {
				width: 246px !important;
			}
	
			.ie-browser .block-grid.four-up .col [owa] .block-grid.four-up .col {
				width: 123px !important;
			}
	
			.ie-browser .block-grid.five-up .col [owa] .block-grid.five-up .col {
				width: 100px !important;
			}
	
			.ie-browser .block-grid.six-up .col,
			[owa] .block-grid.six-up .col {
				width: 83px !important;
			}
	
			.ie-browser .block-grid.seven-up .col,
			[owa] .block-grid.seven-up .col {
				width: 71px !important;
			}
	
			.ie-browser .block-grid.eight-up .col,
			[owa] .block-grid.eight-up .col {
				width: 62px !important;
			}
	
			.ie-browser .block-grid.nine-up .col,
			[owa] .block-grid.nine-up .col {
				width: 55px !important;
			}
	
			.ie-browser .block-grid.ten-up .col,
			[owa] .block-grid.ten-up .col {
				width: 60px !important;
			}
	
			.ie-browser .block-grid.eleven-up .col,
			[owa] .block-grid.eleven-up .col {
				width: 54px !important;
			}
	
			.ie-browser .block-grid.twelve-up .col,
			[owa] .block-grid.twelve-up .col {
				width: 50px !important;
			}
		</style>
	<style id="media-query" type="text/css">
			@media only screen and (min-width: 520px) {
				.block-grid {
					width: 500px !important;
				}
	
				.block-grid .col {
					vertical-align: top;
				}
	
				.block-grid .col.num12 {
					width: 500px !important;
				}
	
				.block-grid.mixed-two-up .col.num3 {
					width: 123px !important;
				}
	
				.block-grid.mixed-two-up .col.num4 {
					width: 164px !important;
				}
	
				.block-grid.mixed-two-up .col.num8 {
					width: 328px !important;
				}
	
				.block-grid.mixed-two-up .col.num9 {
					width: 369px !important;
				}
	
				.block-grid.two-up .col {
					width: 250px !important;
				}
	
				.block-grid.three-up .col {
					width: 166px !important;
				}
	
				.block-grid.four-up .col {
					width: 125px !important;
				}
	
				.block-grid.five-up .col {
					width: 100px !important;
				}
	
				.block-grid.six-up .col {
					width: 83px !important;
				}
	
				.block-grid.seven-up .col {
					width: 71px !important;
				}
	
				.block-grid.eight-up .col {
					width: 62px !important;
				}
	
				.block-grid.nine-up .col {
					width: 55px !important;
				}
	
				.block-grid.ten-up .col {
					width: 50px !important;
				}
	
				.block-grid.eleven-up .col {
					width: 45px !important;
				}
	
				.block-grid.twelve-up .col {
					width: 41px !important;
				}
			}
	
			@media (max-width: 520px) {
	
				.block-grid,
				.col {
					min-width: 320px !important;
					max-width: 100% !important;
					display: block !important;
				}
	
				.block-grid {
					width: 100% !important;
				}
	
				.col {
					width: 100% !important;
				}
	
				.col>div {
					margin: 0 auto;
				}
	
				img.fullwidth,
				img.fullwidthOnMobile {
					max-width: 100% !important;
				}
	
				.no-stack .col {
					min-width: 0 !important;
					display: table-cell !important;
				}
	
				.no-stack.two-up .col {
					width: 50% !important;
				}
	
				.no-stack .col.num4 {
					width: 33% !important;
				}
	
				.no-stack .col.num8 {
					width: 66% !important;
				}
	
				.no-stack .col.num4 {
					width: 33% !important;
				}
	
				.no-stack .col.num3 {
					width: 25% !important;
				}
	
				.no-stack .col.num6 {
					width: 50% !important;
				}
	
				.no-stack .col.num9 {
					width: 75% !important;
				}
	
				.video-block {
					max-width: none !important;
				}
	
				.mobile_hide {
					min-height: 0px;
					max-height: 0px;
					max-width: 0px;
					display: none;
					overflow: hidden;
					font-size: 0px;
				}
	
				.desktop_hide {
					display: block !important;
					max-height: none !important;
				}
			}
		</style>
	</head>
	<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td style="word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
	<div style="background-color:transparent;">
	<div class="block-grid" data-body-width-father="500px" rel="col-num-container-box-father" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" data-body-width-son="500" rel="col-num-container-box-son" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 45px; padding-left: 45px; padding-top: 45px; padding-bottom: 45px; font-family: Arial, sans-serif"><![endif]-->
	<div style="color:#0068A5;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:200%;padding-top:45px;padding-right:45px;padding-bottom:45px;padding-left:45px;">
	<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 24px; color: #0068A5;">
	<p style="font-size: 14px; line-height: 60px; text-align: center; margin: 0;"><span style="font-size: 30px;"><strong>CUSTOMER FEEDBACK SYSTEM</strong></span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
	<div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<p style="font-size: 12px; line-height: 14px; color: #555555; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;"><em><span style="font-size: 26px; line-height: 31px;"><span style="line-height: 31px; font-size: 26px;">Hello, </span><span style="line-height: 31px; font-size: 26px;"><strong>${req.body.name}</strong></span></span></em></p>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Courier New', Courier, monospace"><![endif]-->
	<div style="color:#000000;font-family:'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<p style="font-size: 12px; line-height: 24px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"><span style="font-size: 20px;">Your email verification code to verify email</span></p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"> </p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"><strong><span style="font-size: 20px; line-height: 24px;">${req.body.email}</span></strong></p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"> </p>
	<p style="font-size: 12px; line-height: 24px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"><span style="font-size: 20px;">at <span style="color: #0000ff; font-size: 20px; line-height: 24px;">CUSTOMER FEEDBACK SYSTEM</span> is</span></p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"> </p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"><span style="color: #ffffff; font-size: 12px; line-height: 14px; background-color: #0000ff;"><strong><span style="font-size: 20px; line-height: 24px; background-color: #0000ff;">${req.body.otp}</span></strong></span></p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"> </p>
	<p style="font-size: 12px; line-height: 24px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"><span style="font-size: 20px;">Enter the verification code to complete your registration process.</span></p>
	<p style="font-size: 12px; line-height: 14px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"> </p>
	<p style="font-size: 12px; line-height: 24px; text-align: center; color: #000000; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; margin: 0;"><span style="font-size: 20px; color: #993366;">Ignore if you have not requested any verification code</span></p>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	</td>
	</tr>
	</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
	</body>
	</html>`

	// send mail with defined transport object
	
	  let valid = true;
	
	  transporter.sendMail({
		from: '"Customer Feedback System" <itsxperthub.test@gmail.com>', // sender address
		to: req.body.email, // list of receivers
		subject: "Email Verification Code", // Subject line
		text: text, // plain text body
		html: html // html body
	  },
	  function (err,info)
	  {
		  if(err)
		  {
			  valid=false;
		  console.log(err)
		  }
		  else
		  console.log(info)
	  });
	if(valid)
	{
		return res.status(200).json({mes:"Verification Code Sent Successfully"});
	}
	else
	{
		return res.status(400).json({email:"Invalid Email"});
	}
	})
