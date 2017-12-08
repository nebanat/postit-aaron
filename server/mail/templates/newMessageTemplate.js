/* eslint-disable*/
const newMessageTemplate = (username,message,group) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="min-height: 100%; background-color: #f3f3f3 !important;" xml:lang="en">&#13;
    <head>&#13;
      &#13;
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />&#13;
      <meta name="viewport" content="width=device-width" />&#13;
      <title>My Basic Email Template Subject</title>&#13;
      <!-- <style> -->&#13;
    </head>&#13;
    <body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; background-color: #f3f3f3 !important; margin: 0; padding: 0;" bgcolor="#f3f3f3 !important"><style type="text/css">
  a:hover { color: #147dc2 !important; }
  a:active { color: #147dc2 !important; }
  a:visited { color: #2199e8 !important; }
  h1 a:visited { color: #2199e8 !important; }
  h2 a:visited { color: #2199e8 !important; }
  h3 a:visited { color: #2199e8 !important; }
  h4 a:visited { color: #2199e8 !important; }
  h5 a:visited { color: #2199e8 !important; }
  h6 a:visited { color: #2199e8 !important; }
  table.button:hover table tr td a { color: #fefefe !important; }
  table.button:active table tr td a { color: #fefefe !important; }
  table.button table tr td a:visited { color: #fefefe !important; }
  table.button.tiny:hover table tr td a { color: #fefefe !important; }
  table.button.tiny:active table tr td a { color: #fefefe !important; }
  table.button.tiny table tr td a:visited { color: #fefefe !important; }
  table.button.small:hover table tr td a { color: #fefefe !important; }
  table.button.small:active table tr td a { color: #fefefe !important; }
  table.button.small table tr td a:visited { color: #fefefe !important; }
  table.button.large:hover table tr td a { color: #fefefe !important; }
  table.button.large:active table tr td a { color: #fefefe !important; }
  table.button.large table tr td a:visited { color: #fefefe !important; }
  table.button:hover table td { background: #147dc2 !important; color: #fefefe !important; }
  table.button:visited table td { background: #147dc2 !important; color: #fefefe !important; }
  table.button:active table td { background: #147dc2 !important; color: #fefefe !important; }
  table.button:hover table a { border: 0 solid #147dc2 !important; }
  table.button:visited table a { border: 0 solid #147dc2 !important; }
  table.button:active table a { border: 0 solid #147dc2 !important; }
  table.button.secondary:hover table td { background: #919191 !important; color: #fefefe !important; }
  table.button.secondary:hover table a { border: 0 solid #919191 !important; }
  table.button.secondary:hover table td a { color: #fefefe !important; }
  table.button.secondary:active table td a { color: #fefefe !important; }
  table.button.secondary table td a:visited { color: #fefefe !important; }
  table.button.success:hover table td { background: #23bf5d !important; }
  table.button.success:hover table a { border: 0 solid #23bf5d !important; }
  table.button.alert:hover table td { background: #e23317 !important; }
  table.button.alert:hover table a { border: 0 solid #e23317 !important; }
  table.button.warning:hover table td { background: #cc8b00 !important; }
  table.button.warning:hover table a { border: 0px solid #cc8b00 !important; }
  .thumbnail:hover { box-shadow: 0 0 6px 1px rgba(33, 153, 232, 0.5) !important; }
  .thumbnail:focus { box-shadow: 0 0 6px 1px rgba(33, 153, 232, 0.5) !important; }
  &gt;</style>&#13;
      <span class="preheader" style="display: none !important; visibility: hidden; mso-hide: all !important; font-size: 1px; color: #f3f3f3; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"></span>&#13;
      <table class="body" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background-color: #f3f3f3 !important; height: 100%; width: 100%; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" bgcolor="#f3f3f3 !important">&#13;
        <tr style="vertical-align: top; text-align: left; padding: 0;" align="left">&#13;
          <td class="center" align="center" valign="top" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;">&#13;
            <center data-parsed="" style="width: 100%; min-width: 0 !important;">&#13;
  &#13;
                <table align="center" class="container float-center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 95% !important; float: none; background-color: #fefefe; margin: 0 auto; padding: 0;" bgcolor="#fefefe"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left" valign="top">&#13;
                    &#13;
                  <table class="row header" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; background-color: #6a1b9a; padding: 0;" bgcolor="#6a1b9a"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">&#13;
                    <th class="small-12 large-12 columns first last" style="width: 100% !important; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; display: inline-block !important; margin: 0 auto; padding: 0 16px;" align="left"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; padding: 0;"><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left">&#13;
                &#13;
                      <table class="spacer" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; padding: 0;"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td height="16px" style="font-size: 16px; line-height: 16px; word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; mso-line-height-rule: exactly; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; margin: 0; padding: 0;" align="left" valign="top"> </td></tr></tbody></table> &#13;
                      &#13;
                      <h4 class="text-center" style="text-align: center; color: #ffffff; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; word-wrap: normal; font-size: 24px; margin: 0 0 10px; padding: 0;" align="center">PostIt Messaging</h4>&#13;
                    </th>&#13;
                  <th class="expander" style="visibility: hidden; width: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left"></th></tr></table></th> &#13;
              &#13;
              <table align="center" class="container float-center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 95% !important; float: none; background-color: transparent; margin: 0 auto; padding: 0;" bgcolor="transparent"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left" valign="top">&#13;
              &#13;
                <table class="spacer" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; padding: 0;"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td height="16px" style="font-size: 16px; line-height: 16px; word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; mso-line-height-rule: exactly; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; margin: 0; padding: 0;" align="left" valign="top"> </td></tr></tbody></table> &#13;
                &#13;
                <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; padding: 0;"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">&#13;
                  <th class="small-12 large-12 columns first last" style="width: 100% !important; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; display: inline-block !important; margin: 0 auto; padding: 0 16px;" align="left"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; padding: 0;"><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left">&#13;
                    &#13;
                    <h1 style="color: inherit; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; word-wrap: normal; font-size: 34px; margin: 0 0 10px; padding: 0;" align="left">Howdy, ${username}</h1>&#13;
                    <p class="lead" style="color: #000000; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.6; font-size: 20px; margin: 0 0 10px; padding: 15px 0 0;" align="left">The below message was posted in <strong>${group}</strong></p>&#13;
            &#13;
                    <table class="callout" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; margin-bottom: 16px; padding: 0;"><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><th class="callout-inner primary" style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; width: 100%; background-color: #f5f5f5; margin: 0; padding: 10px; border: 0px;" align="left" bgcolor="#f5f5f5">&#13;
                      <p style="color: #000000; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; margin: 0 0 10px; padding: 15px 0 0;" align="left">${ message }</p>&#13;
                    </th><th class="expander" style="visibility: hidden; width: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left"></th></tr></table>&#13;
                  </th>&#13;
  <th class="expander" style="visibility: hidden; width: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; margin: 0; padding: 0;" align="left"></th></tr></table></th>&#13;
                </tr></tbody></table>&#13;
                <table class="wrapper secondary" align="center" style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background-color: #ffffff; padding: 0;" bgcolor="#ffffff"><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="wrapper-inner" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; margin: 0; padding: 20px;" align="left" valign="top">&#13;
              &#13;
                  <table class="spacer" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; padding: 0;"><tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td height="16px" style="font-size: 16px; line-height: 16px; word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; mso-line-height-rule: exactly; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; margin: 0; padding: 0;" align="left" valign="top"> </td></tr></tbody></table> &#13;
              &#13;
                  &#13;
                </td></tr></table>&#13;
              </td></tr></tbody></table>&#13;
              &#13;
            &#13;
          &#13;
        </tr>&#13;
      </tbody></table>&#13;
      <!-- prevent Gmail on iOS font size manipulation -->&#13;
     <div style="display: none; white-space: nowrap; font-variant: normal; font-style: normal; line-height: normal; font-weight: normal; font-size: 15px; font-family: courier;">                                                             </div>&#13;
    </td></tr></tbody></table></center></td></tr></table></body>&#13;
  </html>
  `
}

export default newMessageTemplate;