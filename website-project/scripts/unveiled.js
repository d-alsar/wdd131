const yearElement = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();

// This creates a copyright symbol element
const copyrightSymbol = document.createTextNode("© ");

// This adds the copyright symbol and year to the span element
yearElement.appendChild(copyrightSymbol);
yearElement.appendChild(document.createTextNode(currentYear));


const today = new Date();
const dayElement = document.querySelector("#lastModified");

dayElement.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(today)}</span>`;




const urbanLegends = [ //this was called temples 
    {
        legendName: "La siguanaba",
        legendDescription: "A tale of a woman who lures men near rivers, appearing beautiful but transforming into a horrifying figure",
        legendText: "The Salvadoran legend of La Siguanaba says that the woman, originally called Sihuehuet (beautiful woman), was a peasant girl that ascended to queen using her charms (and a witch's brew) to lure into marriage Tlaloc's son, Yeisun, who was a Nahuatl prince. After marriage, when her husband went to war, she had affairs with other men, and Cipitio was the child of this relationship. Sihuehuet was a bad mother, neglecting her son, leaving him alone to meet her lovers. To inherit the throne she concocted a plot to use another magic potion to poison Yeisun during a festival, and so claim the throne for her lover.[12] But the plan worked too well. Yeisun was transformed into a savage giant monster with two heads, who ravaged the attendants to the palace's feast. The guard struggled and defeated the creature, ending Yeisun's life. When Tlaloc found out about this, he sought the help of the almighty god, Teotl whom condemned and cursed Sihuehuet: She would be called Sihuanaba (hideous woman); she would be beautiful at first sight, but she would turn into a horrible abomination after luring her victims to isolated gorges. She was forced to wander the countryside, appearing to men who travelled alone at night. She is supposed to be seen at night in the rivers of El Salvador, washing clothes and always looking for her son, Cipitio, who was also cursed by Teotl to remain a boy for eternity.",
        legendImage: "images/la-llorona"
    },
    {
        legendName: "El cipitio",
        legendDescription: "El Cipitío is a mischievous, eternal child from Salvadoran folklore.",
        legendImage: "images/cipitio"
    },
    {
        legendName: "El Cadejo",
        legendDescription: "A mystical dog-like creature, one white for protection and one black to bring harm, appearing to travelers at night.",
        legendText: "In Guatemala, El Salvador, Honduras, Costa Rica, and Nicaragua, the dog-like creature is known as El Cadejo. It is said to look like a dog, has deer-like hooves, and moves like a deer. The white cadejos are benevolent and eat bell-like flowers that only grow on volcanoes. The white cadejo protects people, including drunks, vagabonds, and people with grudges from all evil footsteps, even La Siguanaba, and bad choices, which are sometimes caused by the cruel black cadejo. The black cadejo is malevolent and lures people to make bad choices. The black cadejo has glowing purple eyes and eats newborn babies.",
        legendImage: "images/el-cadejo"
    },
    {
        legendName: "La carreta Chillona",
        legendDescription: "A ghostly ox-cart that roams at night, announcing death with its eerie creaking",
        legendText: "This wagon appeared to a gossipy woman named Cirinla. It was a normal-sized wagon without oxen, but on the tips of the sticks that made up the stake it carried a human skull with a grotesque grin. The load of the wagon consisted of a pile of decapitated and bloody corpses that writhed like the tentacles of a thousand octopuses. The mule drivers, instead of a head, had a bunch of grass tied poorly, in their left hand they secured a sharp cuma and in their right hand a huge black whip, they danced as if they were dancing on hot fathoms, and with infernal laughter, they made whips explode. They sounded like furious lightning bolts on the flesh of those bodies; Behind her advanced strange beings with bald and flat heads, without a nose and a very wrinkled face, with a tremendous toothless snout, they shouted the names of all the people in the town who were liars, false and hypocrites. And as he said the names, the blows sounded like gunshots on the naked backs of the tortured bodies. Cirinla's curiosity was such that when she heard the noise of the Witch wagon she left her house to see it and her horror was so great that the next day she woke up dead in a pool of her own blood as a curious, gossipy, unruly, critical and judge And since then the Witch wagon could no longer be heard rolling on the cobbled floor of the streets of the peaceful little town.",
        legendImage: "images/carreta-chillona"
    },
    {
        legendName: "El padre sin cabeza",
        legendDescription: "El Padre Sin Cabeza is a ghostly figure from Salvadoran folklore, often described as the spirit of a priest who committed grave sins during his lifetime",
        legendText: "The origin of the legend of El Padre Sin Cabeza, or the headless priest can be traced to the Spanish colonization of El Salvador. In the Salvadoran version of the legend of the headless priest, he is the spirit of a priest that died in sin and without confession. Some say he had an affair and now his spirit roams the streets, cursed for eternity. Others say the spirit of the headless priest was killed during a revolt, he was fighting side by side with oppressed campesinos. After being captured, he was decapitated by the authoritative government of the time. Legend tells that the spirit of the headless priest can be seen leaving the front doors of a church, on Friday nights, especially during a New Moon. In San Salvador, the capital of El Salvador, he can be seen going from church to church, but in towns with only one church he wanders the streets and before the night is over, he can be seen entering the church again, through the church’s closed doors. Many claim to see him go through the doors and disappear in the bell tower of a church. Those who have seen this spirit, say that he is very tall, but missing his head. He is always holding a rosary in his hand and it is said only those out late at night encounter him. They feel a bone-chilling cold breeze and cannot speak from fear, for a few days after seeing him. They say he is searching for his head, and often appears at churches where priests have died in suspicious circumstances. Some say that if if you are out, late at night, a door to a church appears, seemingly out of nowhere, in front of you. Something compels you to enter the church and can hear a priest singing. The person (who is assumed to be full of sins) stays and when it is time for the consecration, the priest turns around and has no head and his hands are full of blood. Older folks tell stories of el padre sin cabeza appearing beneath leafy trees and frightening victims to the point they turn their lives around for the better.",
        legendImage: "images/headles-priest"
    },
    {
        legendName: "El caballero negro",
        legendDescription: "El Caballero Negro is a mysterious and ominous figure from Salvadoran folklore, often depicted as a dark, shadowy horseman",
        legendText: "He is a being that causes panic, whoever imagines that the devil appears to them dies of fear, since they imagine him as a monster, but as you know the devil is an intelligent demon, it would be absurd for him to present himself as an ugly animal would present itself in the most attractive way possible. They say that a long time ago some owners of farms suddenly disappeared and some later appeared in the pastures dead and inside nothing but grass, they say that when bad luck surrounded some people or for reasons of life a man became desperate, They invoked the devil for help. Without waiting, a thick whirlpool formed and a rider appeared, very elegant on a powerful horse, with shiny saddles and a large cape. His business was to buy souls. He granted some wishes to whoever invoked him in exchange for his soul. They say that the He offered money, women, luck, a future for his children and riches in exchange for his soul. The gentleman gave his clients seven years to enjoy everything he offered and came after seven years to take the soul he had purchased.",
        legendImage: "images/caballero"
    },

];


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // Collapse content
      content.style.maxHeight = null;
      this.textContent = "Show More"; // Change button text to "Show More"
    } else {
      // Expand content
      content.style.maxHeight = content.scrollHeight + "px";
      this.textContent = "Show Less"; // Change button text to "Show Less"
    }
  });
}