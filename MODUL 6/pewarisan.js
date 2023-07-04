function MailService(sender) {
  this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
};

function WhatsAppService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;
WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
};

function EmailService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;
EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

const WhatsApp = new WhatsAppService("+6283852167611");
const email = new EmailService("dhanirhama2001@gmail.com");
WhatsApp.sendMessage("Hello", "+6287766651861");
WhatsApp.sendBroadcastMessage("Hello", ["+6285850323098", "+6282234567890"]);
email.sendMessage("Hello", "dhanirhama1987@gmail.com");
email.sendDelayedMessage("Hello", "dhanirhama1987@gmail.com", 3000);

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");