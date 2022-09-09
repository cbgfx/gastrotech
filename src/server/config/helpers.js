// Helper method that does any needed processing (users, links, etc.), then send the email
//TODO: Fix Emails
const sendEmails = async (transport, userInfo) => {
  if (userInfo) {
    let htmlBody = publicEmailHTML(userInfo);

    const message = {
      from: "NPC Tracker <noretort@npc-tracker.com>",
      to: userInfo.email,
      subject: "Your Username & Password!",
      html: htmlBody,
    };

    await performSend(transport, message)
      .then((info) => {
        console.log("Email sending info: ", info);
      })

      .catch((error) => {
        console.log("!!! Error sending email: ", error);
      });
  } else {
    console.log("Email not available. Will not email");
  }
};

const performSend = (transport, message) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(message, function (err, info) {
      if (err) {
        reject(err.message);
      } else {
        resolve(info);
      }
    }); // transport
  }); //promise
};

//------ Email's HTML body

// Helper method that returns the email's HTML body and css
const publicEmailHTML = (emailData) => {
  return `
        <!DOCTYPE html>
          <html>
            <head>
              <title>GastroTech Password Recovery</title>
            </head>
            <body>
              <div style="background: #2e4057; color: #e29b30">
                <div style="color:#e29b30; font-size: 35px; font-weight:bold; margin: 50px">Username & Password Recovery</div>
                <div style="margin: 30px">
                  Dear ${emailData.name},
                  <div>Please find below, your:</div>
                  <ul>
                    <li>Username: ${emailData.username} </li>
                    <li>New Password: ${emailData.password}</li>
                  </ul>
                </div>
                <div style="margin: 30px; margin-bottom:50px">
                  We highly recommend you change this password to something you can easily remember!
                  <br />- NPC Tracker Team
                  <div>&nbsp;</div>
                </div>
              </div>
            </body>
          </html>
      `;
};

const generateRandomPassword = () => {
  var pass = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
};

module.exports = {
  sendEmails,
  generateRandomPassword,
};
