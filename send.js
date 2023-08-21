const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "snowj0940@gmail.com",
      pass: ""
   }
});

const mailOptions = {
   from: "snowj0940@gmail.com",
   to: "ranjithsundar10@rediffmail.com",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});