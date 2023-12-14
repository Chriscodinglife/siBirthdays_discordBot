const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('birthdaypresent')
    .setDescription('Check if you have a birthday present lined up!'),
  async execute(interaction) {
    // Replace 'XXXXX' with the actual user ID you want to match
    const targetUserId = process.env.TARGET_USER_ID;

    if (interaction.user.id === targetUserId) {
      // Replace 'YOUR_IMAGE_URL' with the URL of the image you want to send
      const happyBirthdayGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTMwZzQycG5henQxbXpuZ2JmZDg3bTFvZWh2MTdzbTc3Z2c3OHRweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LzwcNOrbA3aYvXK6r7/giphy.gif';
      const giftCardImage = 'https://assets-prd.ignimgs.com/2023/07/04/amazongcprimeday-1688429706725.jpg';

      // Replace 'YOUR_GIFT_CODE' with the actual gift code
      const giftCode = process.env.GIFT_CODE;

      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId('redeemButton')
          .setLabel('Redeem My Gift Bitchessss')
          .setStyle('PRIMARY')
          .setURL('https://www.amazon.com/gc/redeem')
      );

      await interaction.reply({
        content: `Happy Birthday ${interaction.user.username}! 🎉 Here's your birthday gift:`,
        embeds: [
          {
            image: { url: happyBirthdayGif },
            description: `Here's to another great year for you! Guess what? You earned an awesome gift! 😮`,
          },
          {
            image: { url: giftCardImage },
            description: `Use the following code to redeem your gift online:\n\`${giftCode}\``,
          }
        ],
        components: [row],
      });
    } else {
      await interaction.reply('Wo buddy. No Birthday Present For you.');
    }
  },
};