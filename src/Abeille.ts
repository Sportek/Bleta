import { BaseCommand, Command } from 'ioc:factory/Core/Command'
import { CommandInteraction, MessageEmbed } from 'discord.js'

@Command({
  scope: 'GUILDS',
  options: {
    name: 'bleta',
    description: 'Commande pour parler à bleta',
    options: []
  }
})
export default class Abeille extends BaseCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    const message = ["Salut je suis Bleta! 👋", "Hola! Como estas?", "Je vous aime 🥰", "Vive Berlin (la ville biensûr) 🏙️", "Passez une très belle journée!", "🐝🐝🐝", "Amour et paix, butinage et pollinisation 🌺", "Vive l'Ukraine! 👍", "Bizzzzz les Russes 👎", "Vive le Québec!", "Bizzzzzzzzzzzz", "Pourquoi tu déranges la reines des abeilles? 👑", "Vive les abeilles 💝", "Tape moi pas ou j'te pique ⚔️", "Ils ont des chapeaux ronds vive la Bretagneeeeeeeeeeeeeuh, ils ont des chapeaux ronds, vive les Bretontontons!", "Trois p'tits chats chats chats 🐈🐈🐈"]
    const random = message[Math.floor(Math.random() * message.length)];
    const embed = new MessageEmbed()
      .setDescription(random)
      .setColor("#FFE001")
    await interaction.reply({embeds: [embed]})
  }
}