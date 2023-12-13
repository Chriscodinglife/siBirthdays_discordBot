const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('birthdaypresent')
    .setDescription('Birthday Presents are ready for you! (MAYBE)!'),
  async execute(interaction) {
    // Replace 'XXXXX' with the actual user ID you want to match
    const targetUserId = process.env.TARGER_USER_ID;

    if (interaction.user.id === targetUserId) {
      // Replace 'YOUR_IMAGE_URL' with the URL of the image you want to send
      const imageUrl = 'https://www.digitalmomblog.com/wp-content/uploads/2023/01/funny-chewbacca-birthday-meme.jpg';
      
      // Replace 'YOUR_GIFT_CODE' with the actual gift code
      const giftCode = process.env.GIFT_CODE;

      await interaction.reply({
        content: `Happy Birthday! 🎉 Here's your gift:`,
        embeds: [
          {
            image: { url: imageUrl },
            description: `Use the following code to redeem your gift:\n\`${giftCode}\``,
          },
        ],
      });
    } else {
      await interaction.reply('No Birthday Present for you!!');
    }
  },
};