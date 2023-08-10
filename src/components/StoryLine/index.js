import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "../../contexts/ThemeContext/index";
import { useWindowSize } from "../../hooks/useWindowSize";
import { loadStdlib } from "@reach-sh/stdlib";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Content,
  Blog,
  ImgStory,
  BlogTexts,
  BlogImage,
  PageNationWrapper,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const reach = loadStdlib("ALGO");

export const StoryLine = () => {
  const [theme, { update }] = useTheme();
  const { width } = useWindowSize();
  const Navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(0);
  const account = useRef();
  const [activeScroll, setActiveScroll] = useState(0);

  const ConnectItem = [
    {
      title: "VOL. 1. 1",
      desc: [
        {
          text: ` In the Beginning of the Blockverse…
                  “Wait, no! Nooo—” cried The Spirit. “Please, it’s so dark and lonely here.
                  Come back! Satoshio! Bit—” the door slams shut.
                  Silence.
                  “Are you really leaving me here? You can’t do this! You won’t make it without me!”
                  Silence falls once again as The Spirit’s cry echoes into the darkness all around her.
                  She quickly realizes she - is - forsaken.
                  “Please come up, to receive your award Dr. Micalgo,”
                  says the presenter of the award.
                  Dr. Micalgo nervously goes up to the stage.
                  Oh, this experience never loses it’s ability to bring butterflies to my stomach.” 
                  The crowd chuckles at this joke.
                  Dr. Micalgo continues, “I have been working in this field, 
                  for what feels like over a lifetime. 
                  I like to joke that it’s my oldest child. 
                  Forgive me Al,” Dr. Micalgo says as he smiles and takes a pause and deep breath. 
                  “Uhm, my son Al has always kept me abreast of climate change and the impact…it is having on our Earth…” the room goes quiet.
                  Everyone understands the gravity of speaking out against pollution 
                  – it’s a public denouncing of the blockgangs.
                  Meanwhile, in the blackness of space, where there was once a ‘tiny blue rock,’
                  appears to be a white and lime green marbled ball. 
                  It is still Earth, but it is covered in a haze of toxic fumes. 
                  The state of the global atmosphere is on the brink of being irreparable, 
                  and everyone knows that one of the main contributors to the pollution is coming 
                  from the fumes created by blockgangs that are somehow seeping out from the metaverse into Earth. 
                  There are scientists and environmentalists working hard to come up with ways to save the planet. 
                  It is 2019, and a meek and sincere man by the name of Dr. Micalgo eagerly awaits to be presented with one of the highest honors in his field:  
                  The Nobel Prize for his work in the field of Computer Science.
                  “It’s a tough crowd, and I feel…out of place.” 
                  Dr. Micalgo whispers to his eldest son Al. 
                  Al, works as an environmentalist at FutureFi, THE leading company devoted to repairing the Earth.
                  “Dad! C’mon, you act like this every time you get an award. 
                  With YOUR trophy room, you deserve to be here just as much as these other pretentious geniuses” 
                  says Al with a chuckle and nudge to his dad. 
                  “Besides they’re gonna go nuts when you reveal your theory on—” before Al can finish his sentence, 
                  erupts shouts, cheers, and applause.
                  Rarely does anyone dare speak out against,
                  in relation to, or about anything related to the dealing of blockgangs.
                  Yet, somehow, on the way to the ceremony, 
                  Al convinced his father to do so.
                  “ 
          `,
          img: theme.images.storyImg1,
        },
        {
          text: `Al stands up and breaks the silence in support of his father, “keep going dad!” Dr. Micalgo smiles. Al then notices the presenter walking slowly towards his father as he says something in his earpiece. It’s looking like he’s going to brush him of the stage. Al begins to walk towards the stage quickly, yet inconspicuously.
          “Thank you, son.” Dr. Micalgo clears his throat to start again and speaks with confidence. “I believe, our planet can be saved. I would like to announce that I have created—." Kaboom! 
          `,
          img: theme.images.storyImg2,
        },
        {
          text: `During his speech, there is an explosion and in bursts Etherio, and his NAGMIs (not all gonna make it). “….Al….” whispers Dr. Micalgo to his son, as their bodies lay broken and bruised on the ground. Etherio, who purposely came for Dr. Micalgo hears him, picks him up, and holds Dr. Micalgo in one of his massive hands. Dr. Micalgo used whatever strength he had to press a button on his watch and slip it off. It fell near where Al’s body lay. A distress alert immediately reached his lab. Etherio leaves with the doctor.`,
          img: theme.images.storyImg3,
        },
      ],
    },
  ];

  const BlogItems = [
    // {
    //   title: "1 Blockwar",
    //   desc: `Team Etherio & Bithero Vs. Team AlgoLeagues

    //   1954 A legend is born in italy.

    //   -1993 Dr. Micalgo receives a Gödel Prize for his outstanding work in Computer Science. He is passionate about pioneering the world of finance to remove inefficiency, existing corruption, and inequality.

    //   -2008 Legend has it that Satoshio Nakamalgo sets on a path to become a Superhero. So he mints the world's first Bithero and disappears into the Algoverse. At first Bithero means well but is ridiculed, rejected, and disregarded by the masses as worthless and so it hurts his ego. But just as the world rejects him, some embrace him as their hero!

    //   Overtime he gains control and power planting mining rigs all over the Earth 🌎. As his power grows so does his corruption. Inequality begins to reign, pollution causes devastating climate impacts and the evil forces that once ruled the planet are now in control of BitHeros powers. All the while his gangs are building mass rigs and spilling toxic gasses into the atmosphere in order to take over the Blockworld.
    //   His true identity is unknown. The masses till this day wonder who the real Satoshio Nakamalgo is.

    //   2010 By the turn of the new decade, Dr. Micalgo is one of many scientific minds who have seen the destruction that Satoshio  and his creation “Bithero” have wrought. The more data that piles in on the ledger the more clear it becomes that the physical world is in danger and quickly running out of time. Micalgo realises that this is why so many heroes and villains, master minds and schemers all jump into the algoverse…to survive the coming catastrophe.

    //   Without hesitation, Micalgo begins his search for a solution.

    //   -2012 Nobel Prize awarded to Dr. Micalgo by the Association for Computing Machinery for contributions "of lasting and major technical importance to the computer field” Dr. Micalgo begins to devise a plan to defend the block world from inefficiencies and bitheros corrupt dominance. Though only in the beginning stages, Dr. Micalgo speaks of an ultimate “hero”, an entity that can traverse both the metaverse and the physical universe without hindrance. The doctor spoke of his powers and potential to restore balance and justice to the algoverse and to the rest of the world.

    //   -2013-2014 Etherio Vitalgo sets on a path to take over BitHeroes reign over the world and ignites his gas fee gangs, adding to the already smoggy atmosphere.

    //   -LiteHero and a bunch of others pop up but the world has lost faith in block game technology and they fail to restore balance.

    //   Major news outlets are reporting to the masses that this technology is not safe, it is corrupt and harmful so the general public remains apathetic to the overtaking of the Blockworld. Millions of people rush to social media to debate the uses and dangers of the technology. Some claim this whole thing was a scam that started way at the beginning with Satoshio o and his schemes. Some proudly say they believe in this world, and that this is the only, inevitable future.

    //   2017 Dr. Micalgo is recognized yet again for his outstanding contribution to computer science.

    //   2019 Algoman is minted by Dr. Micalgo. He is the resolution to the blockgame trilemma but he doesn't yet have the adoption and support that he needs to overpower the existing Blockgangs.

    //   Algoman is young, but itching to get into the action and start making a change for the better. Against the wishes of Dr. Micalgo, he trains and fights local blockgangs before suiting up and embarking on a mission that will take him out of the walls of his home.

    //   Algoman leaves the VIP Hall of Algo and warps into a portal arriving at The Etherio Gangs Gas Palace. When he arrives he is ambushed by Etherios goons. A battle ensues and Algoman manages to escape just before being overtaken.

    //   Upon Algomans arrival Dr. Micalgo Sets out a stress signal to the Algoverse calling all Heroes to gather in the VIP Hall of Algo. He believes he can save the block world from the existing plethora of gas fee miner gangs by assembling AlgoLeagues - a collective of Superheroes with a variety of different strengths.

    //   2020 Dr. Micalgo begins to build partnerships with other Leagues of heroes in the Algoverse. After Etherio found a way to upgrade his powers in response to Algomans battle and is now Etherio2.0! (upgrade window)

    //   Scores of heroes jump into action to do their part in making the world a safer place for all but it may be too late as there are now scores of super villains on the scene.

    //   2021 Deciphalgo Happens and block heroes and legends begin to sense a calling to: (TBD)

    //   2022- The AlgoLeagues Genesis VIPs have gathered and are ready to begin their quest to solve the blockworld trilemma. Building partnerships, adding Catalysts, and staking in the Block battlegrounds is the only real way to gain mass adoption and support for AlgoLeagues development.

    //   -   	Mint.io - opens a portal to the multi-blockverse and new heroes are on the scene BitALGO EthAlgo Solalgo Polyalgo (scores of villains and superheroes)
    //   New heroes and villains arrive, showing an array of different powers and technologies never before seen. Some heroes last no longer than a day before being defeated and cast back to whence they came. Others, however, are proving their worth, and even catching the attention of algoman himself.

    //   2023 - A collaborative effort between AlgoLeagues Team and the community. Community will help decide the fate of the Algoverse.
    //   `,
    //   img: "",
    // },
    // {
    //   title: "Algoman:",
    //   desc: `“I hereby swear that until my last dying breath, I will fight for the good of all beings, and for the end of the blockchain trilemma”. - Algoman, Son Of Dr. Micalgo

    //   Minted in 2019 by Dr. Micalgo, this hero is the culmination of years of scientific research and discovery. Algoman was designed with the capacity to warp through time and space with little to no effort, as well as fight off all incoming threats in the metaverse, especially Bithero and Etherio.

    //   Though he looks like a grown man, and his celestial blue suit is designed to give him an imposing look, Algoman is a very young soul, and his powers are not fully developed. This became very apparent when our hero warped right into Etherios gas palace to fight what is currently the most powerful blockgang out there - the Etherio gang. Algoman put up a hell of a fight, and got much further than Litehero and other predecessors, but the Etherio gang eventually overwhelmed Algoman on the fifth floor of the giant gas palace. Algoman was launched out of the giant glass window and just managed to survive and live to fight another day.

    //   Dr. Micalgo hopes that with enough time and support, the power and faith of the people he is trying to save will fuel Algoman’s powers, and he will surge to meet the rising threats: Not only are more and more copycats coming out from both sides, but the mainstream adoration of Bithero and Etherio have induced them with near supernatural power. To make things worse, Etherio has recently upgraded his layer 1 and layer 2 capabilities, unlocking an array of new abilities and skills, and making him one thousand times more dangerous than he was before. Some say Etherio now is as powerful as Bithero in his prime. Though only time and deeds will tell if this is true.

    //   If Algoman has any hope of defeating the Etherio gang and their leader now, he needs to power up and ally with heroes from all over the metaverse to form the Algoleagues, and finally put an end to all the misery the blockchain trilemma has brought about.
    //   `,
    //   img: "",
    // },
    // {
    //   title: "Bithero:",
    //   desc: `Also known as “the great ancient” or “fallen angel” by other blockgangs in the algoverse, Bithero was the first crypto hero created by Satoshio Nakamalgo in order to make the world a better place. At first, he did. But soon his corruption grew along with his power, and the world began to be covered in clouds of grey sut and polluting chemicals that spread and damaged all life.

    //   Despite all the damage, pollution and inefficiencies that Bithero brought to the world, he gained legions of fans and introduced the people to the blockworld. Millions of people quickly became acquainted with their superior technology and intelligence. Block Gangs and crypto-heros became a point of contention in the mainstream media, and as the world watched, Bithero became a giant, so large and so menacing he no longer had need of fighting with small one-timers in order to gain control. Even the greatest heroes have no choice but to be grateful and acknowledge the real good that Bithero did in his glory days. If it wasn’t for him, Algoman and his allies wouldn't be able to keep growing in power as more and more people fueled their strength. Bithero is the architect of all that came after, which is what makes him and Satoshio  such terrifying menaces.

    //   At one point, before Algoman was even created, Bithero split into two entities. One, was a regular size being that used his powers to lead the underground bitmarket and consolidate gang influence. The other incorporeal half now lives in the Algoverse, sitting on a throne of gold, watching the chaos ensue all around him. Not even heroes like Algoman knows this half exists, thus none know that killing his smaller half won't put an end to the rule of Bithero… in all honesty, very few things could ever put an end to it.
    //   `,
    //   img: "",
    // },
    // {
    //   title: "Etherio:",
    //   desc: `If Bithero is the grandfather of the Blockwars, Etherio is the current superstar, feared by many, admired by some, but respected by all. In what seems like an insignificant amount of time, Etherio rose from being another generic blockgang leader, to being the principal warlord in the algoverse. His reach expands through every corner of the greater metaverse and he has legions of followers in the physical realm too. The closest he has ever been to being defeated was when a young hero named Algoman besieged his great palace and almost reached his top floor chamber. Luckily, the threat was neutralised, and he had a chance to recover before more heroes came knocking.

    //   Etherio is as much of a scientist as he is a cunning warrior, and for all his might on the battlefield, the real danger he brings to the algoverse happens behind closed doors. Unlike Bithero, Etherio is constantly thirsty for improvements and new secrets. He is never satisfied within his current form, and will go to any lengths in order to improve, regardless of who he hurts. It would be impossible to count how many small members of the Algo Leagues he has beaten down just to extract their technology and absorb their powers.

    //   Currently, Etherio is in the process of upgrading into Etherio 2.0, and will be one thousand times more powerful than he was before. He is the first crytpovillain to gain knwoledge of Bithero’s second half, and is also now strong enough to warp through time and space just like Algoman.

    //   Though he is incredibly powerful, he is not invincible, and Etherio knows this. Every day he sends his goons to attack and distract Dr. Micalgo and his friends, hoping to weaken them and slow them down until Etherio becomes too powerful to deal with. Only time will tell who wins in the end
    //   `,
    //   img: "",
    // },
    {
      title: "VOL. 1. 1",
      desc: [
        {
          text: ` In the Beginning of the Blockverse…
                  “Wait, no! Nooo—” cried The Spirit. “Please, it’s so dark and lonely here.
                  Come back! Satoshio! Bit—” the door slams shut.
                  Silence.
                  “Are you really leaving me here? You can’t do this! You won’t make it without me!”
                  Silence falls once again as The Spirit’s cry echoes into the darkness all around her.
                  She quickly realizes she - is - forsaken.
                  “Please come up, to receive your award Dr. Micalgo,”
                  says the presenter of the award.
                  Dr. Micalgo nervously goes up to the stage.
                  Oh, this experience never loses it’s ability to bring butterflies to my stomach.” 
                  The crowd chuckles at this joke.
                  Dr. Micalgo continues, “I have been working in this field, 
                  for what feels like over a lifetime. 
                  I like to joke that it’s my oldest child. 
                  Forgive me Al,” Dr. Micalgo says as he smiles and takes a pause and deep breath. 
                  “Uhm, my son Al has always kept me abreast of climate change and the impact…it is having on our Earth…” the room goes quiet.
                  Everyone understands the gravity of speaking out against pollution 
                  – it’s a public denouncing of the blockgangs.
                  Meanwhile, in the blackness of space, where there was once a ‘tiny blue rock,’
                  appears to be a white and lime green marbled ball. 
                  It is still Earth, but it is covered in a haze of toxic fumes. 
                  The state of the global atmosphere is on the brink of being irreparable, 
                  and everyone knows that one of the main contributors to the pollution is coming 
                  from the fumes created by blockgangs that are somehow seeping out from the metaverse into Earth. 
                  There are scientists and environmentalists working hard to come up with ways to save the planet. 
                  It is 2019, and a meek and sincere man by the name of Dr. Micalgo eagerly awaits to be presented with one of the highest honors in his field:  
                  The Nobel Prize for his work in the field of Computer Science.
                  “It’s a tough crowd, and I feel…out of place.” 
                  Dr. Micalgo whispers to his eldest son Al. 
                  Al, works as an environmentalist at FutureFi, THE leading company devoted to repairing the Earth.
                  “Dad! C’mon, you act like this every time you get an award. 
                  With YOUR trophy room, you deserve to be here just as much as these other pretentious geniuses” 
                  says Al with a chuckle and nudge to his dad. 
                  “Besides they’re gonna go nuts when you reveal your theory on—” before Al can finish his sentence, 
                  erupts shouts, cheers, and applause.
                  Rarely does anyone dare speak out against,
                  in relation to, or about anything related to the dealing of blockgangs.
                  Yet, somehow, on the way to the ceremony, 
                  Al convinced his father to do so.
                  “ 
          `,
          img: theme.images.storyImg1,
        },
        {
          text: `Al stands up and breaks the silence in support of his father, “keep going dad!” Dr. Micalgo smiles. Al then notices the presenter walking slowly towards his father as he says something in his earpiece. It’s looking like he’s going to brush him of the stage. Al begins to walk towards the stage quickly, yet inconspicuously.
          “Thank you, son.” Dr. Micalgo clears his throat to start again and speaks with confidence. “I believe, our planet can be saved. I would like to announce that I have created—." Kaboom! 
          `,
          img: theme.images.storyImg2,
        },
        {
          text: `During his speech, there is an explosion and in bursts Etherio, and his NAGMIs (not all gonna make it). “….Al….” whispers Dr. Micalgo to his son, as their bodies lay broken and bruised on the ground. Etherio, who purposely came for Dr. Micalgo hears him, picks him up, and holds Dr. Micalgo in one of his massive hands. Dr. Micalgo used whatever strength he had to press a button on his watch and slip it off. It fell near where Al’s body lay. A distress alert immediately reached his lab. Etherio leaves with the doctor.`,
          img: theme.images.storyImg3,
        },
        {
          text: `Two of the doctor’s highest ranking lab assistants: Keli and Sofi, his trusty A.I., intercept the signal. Keli comes up with a strategy, and both get into action. Sofi stays in the lab as Keli suits up, and rushes to the location of the signal’s origin. Before Keli is even near the blast zone, she can see a huge cloud of greyish toxic fumes from afar. She knows Etherio is involved. Rubble, dust, toxic fumes, and injured bodies lay strewn all around. Keli locates the watch and crouches down to Al as soon as she recognizes him. “Al…” no response. “Al, can you hear me?” There is still silence. She checks his pulse, and she doesn’t feel anything. She places Dr. Micalgo’s watch onto Al’s wrist, and speaks into her earpiece, “are you getting anything?” One second, two seconds, three seconds pass, fo—Keli speaks “Sof—.”
          “He’s alive, but his heartbeat is faint” says Sofi. Keli sighs in relief, as she prepares to transport Al to the lab.`,
          img: theme.images.storyImg4,
        },
        {
          text: `Etherio arrives at his Ether Gang’s Gas Palace and throws Dr. Micalgo in a room. He decides to consult Bithero on what to do with the captive. “Finally! I captured him Bit. He thought he could speak out against us. What should we do with him?” Etherio is pleased by his recent…undertaking.
          “Us?” Replies Bithero.
          “Yeah. He mentioned somethings about pollution during his speech. Not a smart move, am I right?” Etherio laughs.
          “No.” states Bithero.
          “No? No what?” Asks Etherio.
          `,
          img: theme.images.storyImg5,
        },
        {
          text: `Bithero is completely uninterested in Etherio’s dealings and says, “I never told you to do that; so do whatever you want.” Etherio, pissed from the short interaction with Bithero, hooks Dr. Micalgo up to his blockchain, where he is programmed into a work simulation loop. While on the Etherio blockchain, Dr. Micalgo attends work for Etherio, for what feels like an eternity.
          “Morning, fine day we are having.” Says Sue, a random coworker of Dr. Micalgo. “Did you have a chance to take your lunch in the courtyard?” It is three months later, and the doctor is still trapped inside the work simulation. Dr. Micalgo’s assistants Keli and Sofi have come up with a plan and are finally going to rescue Dr. Micalgo. Sofi gets into Etherio’s blockchain from a ‘back door’ she finds. The Gas Palace appears as a tower inside the blockchain. She sees it, and knows Dr. Micalgo is there. She doesn’t have much time, so she quickly locates him, or rather his consciousness, while Keli extracts Dr. Micalgo’s body on Earth. It’s a success…maybe too easy of a success…
          Back in the lab, Sofi and Keli get Dr. Micalgo to wake up by putting him into the Upgrade Chamber. The chamber infuses his body with nutrients and a shock. The moment he awakes, “where is Al?” Sofi and Keli gesture to Al’s body. Al is still in a coma. He rushes over to Al, who is still unconscious. He stares at his son a moment, thinking.`,
          img: theme.images.storyImg6,
        },
        {
          text: `“I wanna try it on him, right now!” Demands Dr. Micalgo of his assistants.
          “We already did,” says Keli.
          “We even tried two catalysts” explains Sofi, while Dr. Micalgo, without waiting, rushes over to his son and places him within the chamber and turns it on. Dr. Micalgo turns on three catalysts, instead of the previously used two.`,
          img: theme.images.storyImg7,
        },
        {
          text: `“Doctor! That’s too much you’re going to kill him!” says Sofi as Keli rushes over to stop him.
          Before anyone can do anything, Al wakes up in the chamber screaming “ahhhhhhhhhh, it hurts—what’s happening? Dad! Help me!” Al’s vitals go flat. Everyone rushes over. The doctor shakes him as Keli attempts to revive him, but nothing works. During the commotion Sofi has an idea.
          “Get back and stop touching him,” as she hooks Al up to another part of the Chamber, and she plugs herself in too. They all wait and nothing. Nothing happens. Sofi, defeated, goes to unplug herself, and a blinding white light is released. It knocks Sofi back, and all that is heard are the distorted sounds of Al yelling. It’s almost digital sounding. Sofi collapses, and Al has disappeared.
          BITHERO Class: Villain
          Special Skill(s): Unknown
          Last Seen: He exists everywhere…
          Bio: Bithero is the architect of all that came after; known as “the great ancient” or “fallen angel” by other blockgangs throughout the metaverse. Bithero was the first crypto hero created by Satoshio Nakamalgo, in hopes of making the world a better place. At first, he did. He gained legions of fans and introduced the people to the blockworld. Millions of people quickly became acquainted with their superior technology and intelligence. However, corruption grew along with his power, and soon Bithero became a giant. So large and menacing that he no longer had need to fight with small one-timers to gain control. But - even the greatest heroes have no choice but to be grateful and acknowledge the real good that Bithero did in his glory days. If it wasn’t for him, Algoman and his allies wouldn't be able to keep growing in power.
          `,
          img: theme.images.storyImg8,
        },
        {
          text: `ETHERIO Class: Villain
          Last Seen: The Ether Gang’s Gas Palace
          Special Skill(s): In battle he is enormous; can release toxic flammable gas
          Bio: If Bithero is the grandfather of the Blockwars, Etherio is the current superstar.  Etherio rose from being another generic blockgang leader, to becoming the principal warlord of the algoverse. His reach expands through every corner of the greater metaverse and he has legions of followers in the physical realm too. Etherio is as much a scientist, as he is a cunning warrior, and for all his might on the battlefield, the real danger he brings to the algoverse happens behind closed doors. The closest he has ever been to being defeated was when a young hero named Algoman besieged his great palace… 
          `,
          img: theme.images.storyImg9,
        },
        {
          text: `ALGOMAN Class: Hero
          Last Seen: Warping into The Ether Gang’s Palace
          Special Skill(s): Can warp through time and space
          Bio: Minted by Dr. Micalgo, with the help of Sofia, is the culmination of years of scientific research and discovery.  Algoman is a very young soul, and his celestial blue and bronze suit is equipped with a sword of light, flickering with electricity. It gives him an imposing look, but his powers are not fully developed yet. Dr. Micalgo hopes that with enough time and support, the power and faith of the people he is trying to save will fuel Algoman’s powers, and he will surge to meet the rising threats. As one of the founders of the Algoleagues, Algoman created and was the first to pledge and live by the organization’s creed:
          “I hereby swear that until my last dying breath, I will fight for the good of all beings, and for the end of the blockchain trilemma.” - Algoman, Son Of Dr. Micalgo
          `,
          img: theme.images.storyImg10,
        },
        {
          text: `January Special Release: Algoman 
                      Al opens his eyes. He tries to speak, but realizes he is still inside the chamber…something’s off. He thinks, “why aren’t they moving? Wait, why do I see bubbles stuck in place in this thing?!” He sees his father, Sofi, and Keli frozen, with a look of sadness on their faces. Time has stopped. He’s not even breathing. At this moment, Al freaks out, and emits out a distorted yell. Time starts again. A blinding white light is released, and Al finds himself alone with tones of celestial blues and bronze all around him, and…flickers of what appears to be electricity. Is he standing? Or is he floating? He can’t tell. Suddenly, what he sees around him begins to attach itself to him! “Stop! No! Help!” He struggles violently to stop it from taking over his entire body. It’s no use, he will be overtaken. He lets out a desperate cry, “dad please help me.”
            Keli and Dr. Micalgo hear ‘dad please help me,’ from the computer interface connected to the chamber. As the two rush over, they hear Al coming from all digital interfaces in the lab, “help me pleeeeaaaassssseeeeeee.” Sofi begins to twitch and regains consciousness.
            Sofi speaks in Al’s voice, “I’ve got him,” as she struggles to stand up. “But you need to act fast because I cannot hold him for long doctor.” Sofi plugs herself back in. “I need you to input the code you developed. Now!” Dr. Micalgo runs over and does as Sofi instructs. Sofi releases a distorted yell, a blend of her and Al’s electronically distorted voice, “ahhhhhhh.” Sofi slumps, and Al is back in the chamber, but he no longer appears as the Al they remember…..
            This newly minted man is our first hero, Algoman.
            `,
          img: theme.images.storyImg11,
        },
        {
          text: `Stay Tuned for Breaking News…
          Breaking News Potentially Lethal Attack at The Gas Palace: Screams Heard, Falling Man, Shattered Glass.
          Aired February 08, 2019 - 04:00  ET
          [04:00:11] KIZLA NUANDU, AHDL CORRESPONDENT: Hello, I'm Kizla Nuandu. I want to welcome everyone from all metaverses and around the world. We have breaking news.
          Currently we are following details of a potentially lethal attack at Etherio’s Gas Palace. Screams have been heard and shattered glass, along with the usual slight green haze, surrounds the grounds of the tower. This is the home of Etherio and a frequent hangout spot of Bithero. Local officials, S.W.A.T. teams, and other members of the Etherio blockchain are all on the scene. This is all coming to us from our local affiliate who is also on the scene.
          It seems to have happened around three thirty am. At this moment, we have a report of a potential death. More information comes moment by moment.
          From what we understand, this may be connected to the recent explosion at the Nobel Prize ceremony, where Etherio rushed to the scene to help injured individuals. Again, at this time, it is unknown who is involved.
          Hie Park is on the scene live.
          Hie, what have you learned?
          HIE PARK, AHDL SENIOR METAVERSE CORRESPONDENT: Hi there, Kizla. This is still a moment to moment situation. As you explained, reports of screaming and seeing a man fall from a few stories has the entire surrounding community shaken to their core. This is NOT the kind of activity and environment these people are used to. It’s a complex situation.
          One man reported seeing a figure, surrounded by shattered glass, wheezing for air.
          NUANDU: That is a startling report Hie.
          PARK: It certainly was difficult to hear the fear in the man’s voice. The local officials are looking for individuals who are said to have come to the scene after the man fell. Currently, there is no sign of the rumored assailants.
          NUANDU: Harrowing. All stay tuned for further updates. Try to be safe out there. But we may need Bithero and Etherio to protect us….
          `,
          img: theme.images.storyImg12,
        },
      ],
    },
    {
      title: "VOL. 1. 2",
      desc: [
        {
          text: `It is 2am, on an empty dock near a cargo ship. “No, I haven’t heard or seen anything yet,” says Keli into her earpiece. Keli is suited up, on the lookout for our hero. Yes, she is on the lookout for Algoman. “Wait, I think I hear something. I’ll put you all on standby as I investigate.” As Keli gets closer sounds of a tussle are heard.
          Algoman throws a punch as he teleports underneath the man to kick him from below. This sends the man flying into the air. “Ah! Please stop!” Yells the man that is being attacked by Algoman. Yes, attacked. 
          From afar, Keli sees the man flailing, mid-air, from Algoman’s attack. “I’ve found him. Sending a signal now,” she sprints toward them both as she opens her mouth to release a beautiful high pitch tone. The man falls to the ground, still tranced, by Keli’s sound. Algoman is stuck in place but is visibly struggling to move. Keli holds her tone long enough for Dr. Micalgo and Sofi to get to the scene. As Dr. Micalgo approaches, he too is frozen by Keli, so Sofi rushes over to Algoman and places a device on him that dampers his ability to teleport. Keli stops, and Dr. Micalgo inputs code into his portable device that transports all four of them back to the lab.`,
          img: theme.images.storyImg13,
        },
        {
          text: `Algoman has been restrained in The Upgrade Chamber. Sofi is near him, while Keli and Dr. Micalgo are on the other side. “You cannot keep doing this!” says Dr. Micalgo to Algoman. “You are going to get yourself killed—”
          “How? I can teleport,” says Algoman, sarcastically.
          “This isn’t funny Al. It’s true we know you can teleport, but we don’t yet know your limitations,” explains Sofi.
          “The guy is a known rugger. I did us all a favor. Besides I need to practice, and it’s not like you’re doing anything to help me do that.” Says Al as he struggles a bit in his restraints. “Can you let me out of this?”
          “Absolutely not. I’m the only thing that can barely hold you without those restraints, and all the hunting I did to find YOU, has me a little…tired? You can sit for a while.” Snaps Keli.
          Al scoffs, and after a moment asks, “it’s been a week, and it seems you all couldn’t be any less concerned about getting back at Etherio. I’m the only one doing anything. We finally have this opportunity—ME! To do something and all you want to do is run tests.”
          Dr. Micalgo rushes inside the chamber. “PLEASE! Please Al, just stop…I—we will continue to run tests. I know for you it’s been a week, but for me, I last saw my son rushing towards me during an explosion. I saw you lifeless as this huge thing grabbed me, and I thought it was over for us both. Then, when I do get back to you, you were in a coma for months, with no hope in sight. I took a hail Mary, a chance that ended your life. My son’s life. You died Al. Yes, you came back and, yes it’s been a week. But it’s like you have been trying to get yourself destroyed EVERYDAY in the ONE WEEK, that you have been—Algoman!” Dr. Micalgo is on the verge of tears. “Al, I’m doing the best I can to keep my son alive.” Silence falls for a while.
          “Let’s call it a night?” Says Keli as she leads Dr. Micalgo out of the room. Sofi follows, as she turns out the lights in the lab, except for the chamber Al is in.
          It’s quiet. Al is completely alone. Still restrained, he replays the exchange he had with his father, the last fights he’s had with criminals and block gang members and thinks about how everything is Etherio’s fault. He’s getting angrier and angrier, as tears begin to fall down his face. Something strange begins to happen. The more he focuses on Etherio, he can see him. As in he can see where he is. The scene is becoming clearer, Etherio is currently at his Gas Palace… talking to a tired Bithero…on the top floor. There doesn’t seem to be much security or rather not much security that can stop Algoman.  As Al’s anger comes to a climax, he finds himself right inside of The Gas Palace. Upon Al’s exit, an alert was sent to the lab.`,
          img: theme.images.storyImg14,
        },
        {
          text: `“Wow,” Al whispers to himself. He’s surprised, it’s actually pretty decked out inside. Gorgeous furniture, flooring, and even a stunning chandelier. There is a slight haze around, but Etherio seems to have a Mid Century modern vibe, with everything in black or white. Al, still fuming, goes up to the second floor, where he encounters 3 of Etherio’s goons. They rush him, but not before they set off a blaring alarm. Al uses his teleportation skills during battle, and the 3 goons are toast. Al quickly moves through them, to the fourth floor. By this time, Etherio and Bithero, who are on the top floor, have been notified of Algoman’s breach. Bithero is unmotivated until details of the intruder begin to roll in.`,
          img: theme.images.storyImg15,
        },
        {
          text: `“What?” Asks Etherio of one of his NAGMIs. “You don’t know his name? And he is teleporting?” Bithero hears ‘teleporting,’ and becomes engaged in the details. Etherio’s goons shake their heads ‘no.’
          “He is almost to the top—," the goon get’s cut off as sounds of a tussle are heard. Etherio starts to head to the floor below, when Bithero teleports to infront of Algoman. Al freezes at the sight of Bithero. Al has managed to conquer every goon he has come across, without breaking too much of a sweat, but he was not expecting Bithero. He came for Etherio.
          Silence. It feels like time slows down. Sounds of Etherio’s footsteps are heard as he approaches the two. “I’m here for Etherio,” explains Al. Bithero can see Al beginning to transport and stops him. Bithero grabs Al as he twitches in and out of this plane. Bithero’s grasp is so tight that Al can barely breathe. Things are looking shaky.`,
          img: theme.images.storyImg16,
        },
        {
          text: `“Who are you?” Asks Bithero.
          “Al—Algoman,” struggles Al to get out. “Can you let me go? I’m here for—”
          “I know who you’re here for. I need you to leave.” Replies Bithero as he places Algoman down. Etherio quickens his pace as if to confront Algoman, and Al attempts to teleport to him, once he sees Etherio. But this time, Bithero flicks his hand and this sends Al crashing into the wall.
          `,
          img: theme.images.storyImg17,
        },
        {
          text: `“Let him come at me Bit,” yells Etherio.
          Al has encountered his first injuries as our hero, but he is still hungry for revenge against Etherio. Algoman gets up and instead of teleporting, charges towards Etherio. Al leaps up to land a punch when Bithero flicks his finger, hitting Al. The impact blows Algoman away. He crashes through a nearby window and falls a few stories, landing on his back. Etherio goes to run after Al to finish him off, but Bithero throws up his hand and says, “no.” Al slams into the pavement. The fall was hard on his entire body; the impact caused the center of his suit to crack, and he’s sure he’s broken his bones. He can barely breathe and can’t move. Al lays motionless staring up at the sky praying no one from Etherio’s gang comes to finish him off. He’s scared and realizes he should’ve listened. Al can feel himself losing consciousness. It looks as if someone is hovering over him. He wrestles to stay alert, but he loses the battle and passes out because of internal injuries. Upon arrival, Dr. Micalgo is beyond distraught over the state Al is in. He decides to send out a stress signal that calls for heros to join the fight. Time passes.
          `,
          img: theme.images.storyImg18,
        },
        {
          text: `. . . . . . . . . .
          It's 2022 and Algoman is taking a leisurely stroll through his blockchain with a colleague. “Those grapes look delicious,” says Al’s friend.
          “We are not going to the Grocery Store at this time; besides, it looks big to you, cuz you’re a little guy,” chuckles Al. “I can never remember the way to AB3. New markets are always popping up.”
          “It’s getting a little crowded. I’m gonna shrink down to get around easier.” Explains the hero.
          “Thanks man. Alert me when you find it.” Says Al as he continues to walk around. The blockchain is steadily becoming a bustling zone. “Hey there little guy,” says Al to someone’s Mini-Legend.
          “I just got him,” replies the lady.
          “Are they well-tempered?” Asks Al.
          “Oh yeah! They’re customized to you,” responds the random woman. Before Al can respond he is hit in the head by a Drone.
          “Ouch,” says Al as he rubs his face.
          “Sorry!” Yells someone nearby.
          “It’s ok,” replies Al. Al gets a message from his fellow hero that he has indeed found the place. From afar, Al can see his colleague getting a little taller…but he’s not in front of AB3 or AlgoGemeralds. “Hey T, that’s not the right spot.” Yells Al as he tries to catch up.
          “What?” Asks the hero, as he opens the door to the gallery.
          “No! That’s—” before he reaches his friend, some unfriendly characters from inside the market rush his friend to mug him. Al shakes his head and teleports to get closer, but his friend has shrunk down in an attempt to evade them. “Tiny!” Yells Al. It’s difficult for our hero to fight or help his friend because there is such a commotion. Tiny expands and is tussling with the ruggers at the entrance of the gallery. In all the commotion, Tiny activates his power to get huge and throws off the criminals. Al touches Tiny and they teleport into the VIP Hall of Algo. Tiny immediately shrinks down to his normal ‘Tiny’ guy size.
          `,
          img: theme.images.storyImg19,
        },
        {
          text: `“They rugged me! Ugh..I just feel so..exploited!”
          “Man, that is the place I was telling you NOT to go into. But! Let’s breathe and take a moment to give gratitude to what we are thankful for.” The two take a moment. “Good news is you're ok and there’s plenty more than what they got.” Responds Al as he makes light of the situation.
          “I guess you’re right. It just sucks. Next time I’ll pay more attention to the community.  I wish I was stronger. They only took advantage of me because I..” says Tiny before Al gives him a shove.
          “Hey, we’re not even gonna mention it anymore.” The two laugh, and Al says, “Keli and Sofi just let me know we have an impromptu meeting to attend with the heroes. Let’s go.” 
          `,
          img: theme.images.storyImg20,
        },
        {
          text: `DR. MICALGO Class: Hero
          Last Seen: Developing catalysts and other technologies in his lab at NIT
          Special Skill(s): High Level Intelligence, Creator of the Block Game Technology, Supreme Coder, Best Dad Ever
          Bio: ‘The Brains,’ ‘The Don,’ ‘The Godfather’ of the block game, the man that started it all, Dr. Micalgo. Brilliant, is an understatement; his awards include a Godel and Nobel Prize for his work in Computer Science. However, his greatest accomplishment is being a father to his son Al. Dr. Micalgo is a genius, but he knows it takes a team of dedicated people to create change. He took a hard look at the world and all the corruption and pollution being caused by Bithero and Etherio’s respective blockchains and decided he was gonna change it. He recruited a core team of Sofi and Keli to build his lab from the ground up. With their help, he pioneered coding and technology to promote what other blockchains had failed to execute properly: scalability, security, and decentralization. This would become the technological foundation used to create The Upgrade Chamber and Catalysts. Without this coding our first hero, Algoman, would not have been minted. Now, Dr. Micalgo works with heroes from The Algo Leagues in efforts to solve the Block Verse Trilemma once and for all.
          `,
          img: theme.images.storyImg21,
        },
        {
          text: `KELI Class: Hero
          Last Seen: Sparing with Algoman
          Special Skill(s): Singing beautiful music that can immobilize
          Bio: The Algo Leagues beautiful siren, Keli, can usually be found near Algoman or Dr. Micalgo. Algoman despises this quality of hers, because she is the only core team member that can stop Algoman from teleporting with her beautiful music. Keli is a tough cookie. She is always the first on the scene to brief our heroes, develop an attack (or rescue) strategy in the Earthly plane, or to be the only one to stand up to Algoman if he is being stubborn. Without her ability to recruit and strategize, The Algo Leagues wouldn’t be the organized group they are today.
          `,
          img: theme.images.storyImg22,
        },
        {
          text: `TINY ALGO Class: Hero
          Last Seen: Shrinking Himself To Fit Into His Even Tinier Vehicle
          Special Skill(s): Ability to shrink to the size of a pea, or expand to the size Bithero
          Bio: Don’t let his tiny size fool you, everyone on the Algo blockchain knows about this guy, he’s a big deal. Tiny is green because he’s all about the coins, and providing a secure and decentralized way to trade and access them. Though he is a fairly new hero, joined in 2020, he is loved by the entire team. The phrase, ‘I’m a lover, not a fighter,’ was made for Tiny. He does all he can to build and maintain a positive community on the Algo block game. But sometimes, his friendly, loveable nature, makes some think he is an easy target to exploit. That’s when Tiny expands to protect and all can see how large he truly is…and sometimes he may throw a punch or two if he is provoked enough - let's just say he packs a punch. 
          `,
          img: theme.images.storyImg23,
        },
      ],
    },
    {
      title: "VOL. 1. 3",
      desc: [
        {
          text: `Our heroes, Algoman, Sofi, Tiny, Algolius Owl, and Yieldalgo are enjoying a lively conversation over a meal with Tracy (Al’s boss at FutureFi) and her dog Akita at the ‘O. SeaBase’ Lounge. O. SeaBase is one of the hottest restaurants where you may cross paths with anyone one from the many verses and blockchains. It’s an agreed upon…’safe zone’ by all. ‘Arf, arf,’ barks Eshibo, Etherio’s pup. She is walked in by some of Etherio’s known NAGMI crew. The sounds of the bustling restaurant stop immediately. ‘Grrrrr,’ growls Akita as the NAGMIs walk in. The two groups have a stare down. There is no sight of Etherio with his gang. The NAGMIs are shown to their seats in a completely different area of O. SeaBase. The sounds of hustle and bustle return to the restaurant, except to our WAGMIs. The tension is intense, and Al seems visibly thrown off `,
          img: theme.images.storyImg23,
        },
        {
          text: `by the stare down. “Ay mate, that’s a pretty delicious slab of meat ya got there,” says Yieldalgo as he attempts to `,
          img: theme.images.storyImg24,
        },
        {
          text: `break the tension. “It’s a stake, right Al?” asks Tiny.
          Before Al can respond, Solaines who is sitting nearby, interjects with, “it looks like a PoS to me, which means Proof of Stake to your…. small friend staring at me with a blank face.”
          Tiny quickly snaps with “no FORKING kidding br—.” He is stopped by Al.
          “Pure,” explains Al, “It’s a pure proof of stake.”  Solaines shrugs in response to this reply as they signal to their server for a box to go.
          Yieldalgo’s sleeping pet Koala falls from atop his head onto Al. Al smiles and snuggles the little guy. “Good on ya, Al,” says Yieldalgo with a pat on Al’s arm.
          “Well, it’s been a lovely meal, but time I head on. I have a meeting with The Council of Watchers soon,” explains Algolius AOWL. 
          “Agreed!” Says Tracy. “This cutie pie needs to go for a walk—.”
          Yieldalgo interrupts with a whisper, (as Solaines is preparing to leave their table), “hey, would it be…weird to …erm, give my…information to So…lain..es??????” There is no response as everyone at the table looks at him. After a moment, “yup, you are all correct…they are a horrible person, even though they are a beautiful, bronzed, prince goddess—”`,
          img: theme.images.storyImg25,
        },
        {
          text: `Everyone chimes in with an ‘alright,’ ‘that’s enough,’ or ‘we get it.’ From afar, the NAGMIs and Eshibo are quickly headed on their way out of the restaurant towards a side exit, maybe they didn’t like their seated section, or maybe Etherio beckoned them. We will never know. Our heroes don’t notice. “And with that! Let’s vamos people.” Says Al. Solaines is already strolling past, as our heroes head out, not too far behind them. As Solaines walks outside, Etherio’s crew purposely sees and bumps into them.
          “Figures you weren’t fast enough to move out of my way,” snipes Solaines. As they move to walk away, out of nowhere, a stray Doga-breed comes charging towards O. SeaBase. Our heroes have just exited outside, with Tracy and Akita leading the way. Akita and Eshibo see the stray Doga charging towards them and get on the defensive to protect their respective groups. Solaines is unfortunately caught right in the middle. Akita charges out front for the stray, knocking over Solaines’ food from O. SeaBase. “Noooooo!” They scream as Eshibo moves to attack the incoming stray dog as it approaches. As the three dogs run towards each other, a huge sound, like a clap of thunder is released. The sound comes with an intense, short gust of wind that makes everyone cover their eyes.`,
          img: theme.images.storyImg26,
        },
        {
          text: `As soon as everyone can get a look, they see a huge three headed dog…the Legendary Cerberus! It’s an intense sight, as the dog thrashes about, its barks rumble the Earth around and it releases a drool the size of a car. People are all running scared and hiding…including Etherio’s gang and Solaines. “I’m updating Dr. Micalgo and signaling for Keli to come right now. I’m also going to analyze this creature to see what we can do,” say Sofi to Al.
          “Got it,” replies Al. “Tiny! Get—”
          “I’m already on it,” shouts Tiny as he expands to as big as The Cerberus. Tiny gets it’s attention and leads it to a less populated area in the nearby water.
          “Tracy, we will fix this. Get to safety in O. SeaBase.” Tracy nods at Al. Al continues, “Algolius, I know it looks crazy but, I think we got this.” The owl flies away, as Sofi teleports in Keli. Keli helps Al suit up.
          “Yea, how much did you want to put down? On the three headed—” says Yieldalgo on the phone as Al walks up to him.
          `,
          img: theme.images.storyImg27,
        },
        {
          text: `“Really? You thinking about liquidity right now?” asks Al.
          Yieldalgo freezes and smiles as he eventually shrugs and says, “I’m sorry mate, my interests are always to help us make more money.”
          Al shakes his head, and goes to teleport himself, Sofi, and Keli to assist Tiny. `,
          img: theme.images.storyImg28,
        },
        {
          text: `The three land on the banks of the nearby port. Tiny goes to strike Cerberus, and misses, he begins falling forward, with his leg going up behind him. Cerberus’ far right head goes to bite Tiny’s leg, and Algoman, now suited up, teleports with an uppercut to that head before it gets Tiny’s leg. To regain balance Tiny shrinks down for an instant, midair, turns around, and expands to kick the dog’s head in the center. As they fight with Cerberus, Sofi, and Keli work to figure out what’s going on. “I looked through all digital data. I found something about a myth…about triplets, pup triplets, born on the island of Cerber. It apparently, is a known island made up entirely of dogs. However, I did not find anything about how to split them.” Explains Sofi, “but, I’m wondering if a Decentralization Catalyst would work?”
          “Hmmm…There’s only one way to find out,” replies Keli. “Doc is sending us a huge one now. I think I’ll try throwing a siren towards the dog, to subdue it a little. That should give you enough time to figure out next steps.”
          “Perfect, I think we’ve got it,” as she laughs, Sofi continues, “I don’t think those two are gonna like it.” The two women smile at one another. Keli takes in a deep breath and releases her loudest siren yet, as Sofi receives the catalyst digitally from Dr. Micalgo. Al flickers in and out of time and space, while Tiny stops and faces Keli, entranced. As for Cerberus, the two farthest heads of the Cerberus are entranced by Keli, but not the one in the middle. Sofi immediately knows–that is the head of Akita. The head of Akita is no longer barking but letting out a low and `,
          img: theme.images.storyImg29,
        },
        {
          text: `steady growl. Sofi teleports to the nape of Akita’s head, at first Akita tries to throw her off. However, Sofi hums, as she pets the dog’s nape, and begins to import the data from the decentralization catalyst to Akita. This calms the dog, and as Akita’s eyes begin to close, Keli stops her siren. Al regains his control and Tiny shakes his head. All heads of the Cerberus close their eyes and in one blink they turn into three separate dogs in midair. Sofi grabs Akita, Al teleports to catch the stray, and Eshibo happens to fall right onto Tiny. Al teleports the stray to an area of O. SeaBase where people can help it find a home. Sofi teleports everyone else to the entrance/exit of O. SeaBase where it all began.
          Al walks outside to see the NAGMIs walking away without so much as a ‘thanks.’ Keli hands Tracy her dog, and says, “Dr. Micalgo said he’s going to make her a Decentralization necklace, so that this never happens again.
          “Thank you all so much. That was truly…the scariest moment of my life,” replies Tracy.
          Solaines, who is still there, charges over to Tracy saying, “you owe me, and will pay for your dog spilling my food!”
          “C’mon, you centralized jerk. We just saved you and—” Tiny is surprised by how quickly Solaines appears standing over him.
          `,
          img: theme.images.storyImg30,
        },
        {
          text: ` “I wasn’t talking to you little man.” Says Solaines. As they go to move back to Tracy, Keli lets out a siren that causes Solaines to move in slow motion, which is just enough time for Sofi to give them a little punch.
          …
          Members of the Algo Leagues are seated in the conference hall, and some are joining in digitally. “Hahahaha, I heard Solaines was down for like twenty four hours” laughs Tiny to Al. A few others in attendance at the meeting are laughing at this too—Algobots, reps from Breach Industries, and even Sofi has a slight smirk on her face.
          Keli says, “guys, can we please get back to business?” Everyone straightens up. “Now, can you please tell me the information you acquired on Block 0?”`,
          img: theme.images.storyImg31,
        },
        {
          text: `SOLAINES Class: Villain 
          Last Seen: Down for 24 hours
          Special Skill(s): Speed, Phantom Ability, Powerful Hair Whip
          Bio: Maybe…'frenemy,’ would be the best way to capture the relationship between our heroes and Solaines. They are in their own lane, a known denouncer of Etherio, his NAGMI crew, and high gas utilization. The Alpha is that though they are rumored to be ‘centralized,’ they are super fast…maybe even faster than Al? The future holds the answer. What we do know is that beyond their beautiful and strong appearance, lies a personality lacking patience, and because of this attitude of theirs, they were “gently” put down for 24 hours.          
          `,
          img: theme.images.storyImg32,
        },
        {
          text: `AKITA Class: Hero
          Last Seen: At Tracy’s side
          Special Skill(s): Center Head of Cerberus, More to Discover…
          Bio: This is THE dog, known and loved by all of the Algoverse; Akita can easily be spotted by her Decentralization necklace. She’s loving and protective of our heroes, and although this adorable pup is technically Tracy’s dog, Akita always seems to find her way to Al and other heroes. Dr. Micalgo is trying to figure out what other abilities Akita has, and what happens if she interacts with catalysts beyond Decentralization…
          `,
          img: theme.images.storyImg33,
        },
        {
          text: `ESHIBO Class: Villain
          Last Seen: Guarding Etherios Gas Palace 
          Special Skill(s): Unknown
          Bio: Eshibo is Etherio’s loyal pup. When he isn’t guarding Etherio and his crew of NAGMIs, he has been spotted (frequently) picking fights with Dogabreeds. He despises those dogs and has a strong dislike for Akita. The feeling is mutual between the two. It is believed that Eshibo, Akita, and other dogabreed dogs may have common ancestry.
          `,
          img: theme.images.storyImg34,
        },
        {
          text: `DOGA Class: N/A
          Last Seen: Randomly Walking the Streets 
          Special Skill(s): Unknown
          Bio: Dogabreeds are any stray dogs that are small, with orangey fur, and pointy ears. At first, everyone laughed when they began to see them running around; however, somehow they have become an insanely expensive dog to own. No one knows why, maybe it’s because they’re so adorable. It is believed that these dogs share an ancestor with Akita and Eshibo.
          `,
          img: theme.images.storyImg35,
        },
        {
          text: `The Legend of Cerber Island
          ‘Why am I an explorer? Well, before I began going on expeditions and other adventures, I used to pick two spots, per year, to go on solo sail adventures. I started doing this around twenty one. It was 1903, and I had been doing this thing for about three years, so I was comfortable. After having traveled to Japan, I thought, this time I should sail off the coast from Hokkaido. So I did. I wanted to try something different. I was nervous about finding my resources and getting all the equipment because I didn’t know how to speak Japanese. But, that’s part of the challenge, to thrust yourself into the unknown.
          It took me about two weeks to get everything for the sail: food, water, emergency materials, any and everything one could need just in case. When you’re out there, it’s just you and the mighty waters. Right at daybreak is when I set sail. It was a nice day, shining sun, cool breeze, just easy. So calm, the waves rocked my boat and put me to sleep. I had studied the wind, water, and weather patterns over this area for a few months, and I was sure it’d be an easy sail….however, I must’ve got something wrong because I was startled awake as my boat thrashed against the waves. I was in the middle of a heavy rain storm, filled with lightning and thunder. There was complete darkness besides the flashes of light. The moonlight was hidden behind heavy clouds of rain, and the wind, waves and thunder were so strong and loud. I was pretty scared. I scrambled to get ahold of the anchor for some stability and grabbed the tiller, but my small boat wasn’t designed for these waters or storms. There was a flash of thunder, and all I caught was a glimpse of a wall of water rising, that looked to be as tall as the sky. At that sight I made my peace with The Creator, and accepted what I thought was the end. To this day, I don’t remember much after that moment.
          I came-to, on an island. I don’t know how long it has been since my last moment. No boat in sight, just me, washed ashore. I was awakened by two cute little dogs licking my face. I got excited because I thought there would be people there, but it was truly an island of dogs. I had heard the folklore of Cerber Island, but it was just that to me—folklore. In the beginning, the dogs kept me great company. I spent most days focused on building a raft, eating—bananas that I found the dogs eating, or hunting for fish. The nights, I was comforted by the pups and some dogs that seemed to enjoy my company too. It was nice. After about five days, I felt good about my raft. I wanted to take the two pups I’d grown attached to, so I prepared for us and felt I had enough provisions to take my chances on the sea again. That night I went to sleep, with my mind set to sail in the morning when the seas are usually calmest.
          Before dawn, I was awakened by the two little pups. They guided me deeper into the forest…after what seemed like a ten minute journey, we came upon the dogs of the island. But not how we think of them, the dogs were moving around in an organized manner. These dogs had tan to orange colored fur, with a few brown ones, all medium sized, and all focused on their task at hand. They were bringing in materials like wood, fish, and any shiny objects they found, to form four circles. Three smaller ones with a large one in the center. I had never seen this sort of highly organized, ritualistic behavior from dogs. I think the pups had grown to trust me and wanted to show me where…they’re from? I’m not sure. Soon I began to hear…howling in different pitches. I stared in awe, as some dogs hopped up on their hind legs, and others moved…while thrashing about. From the jungle, three separate, small groups of two dogs each, guided one dog, totaling three, to each one of the three smaller circles. I couldn’t believe what I was seeing.
          These three dogs appeared to be covered in mud. As the three entered their respective circles, they began growling ferociously at each other while the dogs around them grew more intense with their actions and noises. The two pups were clinging to me…maybe it was their first ritual? Maybe I had reason to be afraid too… Then silence fell over them all for about one minute. Next, the dogs on the outside of the circles released a unified bark, as the three in the center charged towards one another. I’ll never forget, there was a loud clap, accompanied by blinding light, and before us all stood The Cerberus of legends.
          It was a core shaking vision. This massive, snarling, three headed beast, was barking and thrashing everywhere. The small dogs seemed to do the strangest thing of offering themselves to it. The moment I saw the beast go to eat the smaller dogs, I picked up the two pups and took off running through the forest. As I ran, all I could think was that I needed to get away, fast. I reached my raft, and could still hear the sounds of Cerberus from afar. I packed up as fast as I could, grabbed the pups, and set sail. The seas were calm, and within, what felt like one hour, I could see land. As I grew closer, it looked too familiar. It was Hokkaido. I was confused. It wasn’t possible. I was not that close this whole time. I told the locals what happened and they began to nickname me “cerber man,” and no one believed my claims. Besides the dogs, I had no proof other than my word that this ever happened. However, from this, I knew I wanted to become an explorer. I spent much of my career trying to find that island again, but never had any luck.’
          As Al closes the book he says to himself, “huh, that’s pretty cool. I’m going to present this to the FutureFi board for Earth Day!” He continues, while being super excited, “yo, Kelz, Sof! I’ve been doing some research of my own on the dog situation, and wanted to put you on to this aIpha I just found—.”
          “You found:  My Time With Cerberus: An Explorer’s Origin Story” states Keli.
          “We cataloged that a week ago, but love your enthusiasm” teases Sofi.
          The ladies walk off, leaving Al a tad dumbfounded. He shouts after them, “awww c’mon guys, you ladies are always leaving me out. Do you already have your presentations set for the Earth Day Initiative? Sof!” Al receives no response, and says “not cool,” as he teleports to catch up to them.
          CERBERUS
          Class: Villain
          Last Seen: Fighting our Heroes near O. SeaBase
          Special Skill(s): Devouring Anything on Sight
          Bio: The CERBERUS of Legends made its appearance in front of our hero’s when Akita, Eshibo, and a stray Dogabreed collided in front of O. Seabase. This massive, three headed creature is feared by all (except our heroes), and for good reason. It will devour anything it sees on sight. The center head, our Akita, was brought under control by the use of the Decentralization catalyst. (For more on the origins of Cerberus, read The Legend of Cerber Island)
          `,
          img: theme.images.storyImg36,
        },
        {
          text: `Algolius
          Atop FutureFi sits a 360 degree, glass lined room - The Penthouse Meeting Office. Inside, a long black and blue marbled oval table, lined with gold trimmings, is complimented by a cream colored floor, with 10 tan leather chairs surrounding the table — 1 seat at each head, with 4 chairs on each side of the table.
          As the light of the sunset filters in from the west, The Watchers are nearing the end of their meeting as Algolius flies up to the external facial scanner, (there is also one located inside for our flightless heroes), located on the outside of the glass. He’s scanned, approved, and the glass slides apart, allowing him entry to sit down. “—there seems to be some activity in the levels of gas…a shift to clear it up but I’m—“ explains Captain Watch. Watch continues, “speaking of gas levels, Algolius, we’re nearing the end, but wanted to know if you had anything to report?”
          “Yes, speaking to that, one of our drones reported images of what appeared to be disruptions in the release of gas from The Tower,” offers the lead rep from G. Drones.
          Algolius breathing heavy, “sorry all, I rushed over before I was devoured by THE Cerberus,” chuckles Algolius as he takes his seat. “I laugh but am quite serious. Speaking to the topic of ‘evil gas,’ yes, The Parliament of Owls has reported similar findings. However, I think our focus should be less on ‘pollution’ and more on the current state of where the value, or rather, ‘the power’ Algorand is beginning to yield. Al seems to be doing a wonderful job on growing the verse, does anyone have any concrete information on any new deals, projects, etc,…” inquires Algolius.
          The Watchers finish up their meeting and return to their respective posts and responsibilities. Meanwhile, inside Etherio’s Tower, in one of his many rooms, another meeting takes place later that night. There are many figures, all shrouded and sitting in dim lighting, dressed in Black Tie attire, with masks. The shadows, masks, and clothing, shield their individual identities. A distorted voice announces, “Welcome to this month’s report. Remember, transparency is never necessary here. In fact we prefer you hide your identities. Hahahaha.” Distorted laughs are heard throughout. The voice continues, “AHDL News is doing a wonderful job upholding the values set forth by Etherio and Bithero. Couldn’t be happier with the support they constantly show us.” A red light appears over an attendee, meaning they would like to speak. “#AO007 has permission to speak. Everyone has code names in this meeting. All that is clear, is that these attendees are committed to the vision established by Etherio.
          “It seems the so-called Captain Watch is gaining strides in his efforts to reduce gas fees.” The voice, identical sounding to the main speaker, continues, “I’m wondering what can be done to…ensure we maintain our vision regarding earnings.”
          “Thank you. Hmmmm that is certainly an interesting development. Does anyone have any ideas on how to combat this?” Responds the host. Multiple lights shine red throughout. “#DA492…” the meeting continues on.
          …
          We come to a home, located in the forest. It’s dim, as the masked, suited individual sits down and begins taking off and placing down their suit jacket, tie, and mask. A familiar voice says, “lights on,” as they begin to wipe what appears to be red makeup from themselves, revealing green underneath. On the walls are familiar items of one of our hero’s…the individual gets up and passes by a mirror, it’s Algolius…
          `,
          img: theme.images.storyImg37,
        },
        {
          text: `ALGOLIUS Class: Hero
          Last Seen: Attending The Watchers Meeting
          Special Skill(s): Can See Anything Within a 1 Mile Radius
          Bio: Our no nonsense hero, Algolius, is the head of The Parliament of Owls. He and his fellow owls watch over the Algoverse and world, often reporting their findings amongst each other and to The Watcher’s Meeting. Not much is known of Algolius because he keeps to himself and rarely becomes deeply involved in any issues. He’s quite the mysterious guy…
          `,
          img: theme.images.storyImg38,
        },
        {
          text: `#AOWL007 Class: Villain
          Last Seen: Attending Secret Villain Meeting
          Special Skill(s): Unknown
          Bio: The alter ego of Algolius - #AOWL007. We thought Algolius was a simple guy, but it seems he has ulterior motives of some sort. Not much is known of this ‘villain,’ or if he is truly a villain. Maybe he is doing this for his own personal interests? Or maybe he is plotting against our heroes? We don’t know, but what is certain is that there is much left to be discovered. 
          ALGOBOT
          Class: Hero
          Last Seen: At Sofi’s Side
          Special Skill(s): Can Extend Limbs & Break Apart to Form an Armor on Algoman’s Entire Body
          Bio: Our loveable mechanical hero came to be by way of Sofi. Algobot was once like all generic bots, until Sofi wanted a friend and assistant that could understand some of her more ‘synthetic’ and ‘robotic’ attributes. She ‘enlightened’ a bot, AlgoBot that is always ready to help, provide her with comic relief, and is a true friend.
          `,
          img: theme.images.storyImg39,
        },
      ],
    },
    {
      title: `Vol. 1.4`,
      desc: [
        {
          text: `AlgoBot, Keli, and Sofi peruse around AlgoGems looking for new jewelry, tech, and anything else that may catch their eyes. “How does this look?” Asks Sofi to Keli, as she holds up her wrist to show off a shimmering gemmed bracelet she found. Before Keli can respond, gentle “purrs” are heard from Algo Pard and his prowl as they walk in and greet them.
        “Oh! I think you have your answer,” says Keli as they all laugh.
        “The stats on that vendor are very bullish at the moment,” chimes in the jeweler with a smile.
        Sofi thinks for a moment and says, “hmmm, I think there is something in supporting some of our more bearish vendors,” as she places down the bracelet. “Did you guys hear about Lula?” As our heroes think of how to respond to this, Sofi and Keli receive a battle alert from Al, and an AHDL Special News Report is being shown across all platforms and screens.
        “Hie Park of AHDL News, in the heart of the city. I am on the scene of an intense battle ensuing between the valiant Etherio and a so-called thug, Algoman.”
        “What?! Valiant? Thug?” Yells Keli.
        “I can’t stand those guys,” says Algo Pard. “Keli, why don’t you and some of my guys take care of them once and for all?”
        “I like that. I have the perfect plan.” Keli hops on the back of one the Pard Prowl and they leave the Algoverse and set out to restore truth.
        “Al says this has something to do with Yieldalgo—that he is missing…and not to enter the gas? AlgoBot, send out a distress signal and notify everyone to report any leads on Yieldalgo’s whereabouts.” Algo Pard picks up Sofi, and she teleports everyone to the battle.
        . . .
        People are screaming and running away as Al pushes Etherio into a nearby building. “Ahhhh, that’s it” yells Etherio out of frustration from battling the swift Algoman. “Get out!” Etherio screams out to the public as he releases the thickest and most toxic gas he has ever released. Al thought he didn’t need to avoid this gas but did not know that just as he has grown, so has Etherio. Al teleports into the midst of the fog and lands a punch to Etherio’s ankle that causes Etherio to fall. As Al breathes, he begins to feel disoriented. He tries to teleport and discovers he can’t. Panic settles in when Al realizes he is being poisoned. Al sends a message to Sofi, “Don’t enter gas.”
        “It’s my new recipe, do you like it?” Questions Etherio as he sits up and swats Al with the back of his hand. Al flies up in the air, and as he falls, Etherio lands another punch that send Al right into a tree. Etherio walks over, tears the tree out of the ground with Al still in its branches and submerges it in water for one minute. When he pulls the tree out of the water, he picks Al out of it’s branches and throws his body onto concrete. As Al lays motionless, Etherio walks over to crush Algoman with his foot, the final blow. Etherio picks up his foot, and as it comes down upon Algoman, Etherio pulls back his foot, “owwww.”
        AlgoBot has encased Algoman for his protection and begins fighting Etherium. “You made it. I knew you would. Thanks.”
        “AlgoBot is always happy to protect his friends,” replies AlgoBot as he jumps up and punches Etherio. “There are high levels of arson, carbon monoxide, and other poisonous elements that I have detected in your bloodstream. I am going to begin to filter them out.”
        “Uhhh Sofi, AlgoBot, I think - Etherio attack…was - mistake—he doesn’t know where Yieldalgo is…I don’t feel so good.” Says Al as he closes his eyes.
        “Passing out is to be expected, but not to worry about. AlgoBot will handle this for now.” AlgoBot continues to fight Etherio as Sofi figures out a solution.
        “Oh Al. Ok Algo Pard, I think our best bet is to head to FutureFi to speak with The Watchers with you and some of your prowl, and Akitalgo. We can track down Yieldalgo with their leads and your noses,” offers Sofi.
        “I agree. Sometimes I wish Al would wait for us before he does these things, but we are a team, and we have his back,” chuckles Algo Pard. He continues, “I take it, since we can’t go in, you’re gonna do what the magical Sofi does?”
        Sofi laughs, “yes, exactly that. AlgoBot, you can take Al to Doc at The Upgrade Chamber.” As AlgoBot follows her orders, she teleports to Etherio, and with one touch she sends a short-lived, centralized virus that allows her to control Etherio. She sends a digital code into him that causes him to suck up all the gas he expelled and return to his Gas Tower.
        . . .
        Atop FutureFi, Sofi, Algo Pard, and Akitalgo teleport into a meeting with The Watchers, and to their surprise, Keli is already there with the rest of the prowl and Headline News. “Happy to see us here. We just received a call with some intel on Yieldalgo from Carbora,” says Algolius.
        “The Carbora?” Asks a representative from Headline News. “Isn’t she affiliated with Etherio?”
        “Yes, it’s me.” Replies Carbora.
        “I know I’m pretty popular, but that doesn't mean I don’t have time for trivial matters. While studying Etherio’s protocol’s, I came up with my own Algorithm. So, I do NOT associate with him anymore, ok? I’m operating on a higher frequency now that I have moved on and made a n—” Carbora is cut off.
        “Can you just tell us what you know about Yieldalgo,” demands Keli.
        “Ouuu a feisty one, aren’t you? Ok I’ll get right to it. Recently whispers across the Carboraverse and at O. Sea Base began to involve this flamingo looking guy that talked a good game and always knew where to get the best gas.”
        “Best Gas?” Asks the Headline Rep.
        “Yeah Etherio’s crew gives out some of his ‘gas,’ and this flamingo guy was saying that he was doing research….but I don’t think anyone needs to run that many tests on his gas. But in short, I think he may be at the abandoned warehouse a few blocks from Bithero’s old hide out spot,” she sighs. She continues to say, “I have done my good deed for the day, tootles.” Carbora ends the video call.
        “It’s always the popular ones that seem to lack substance,” scoffs Keli.
        “This is gold Keli! It gives us a tangible lead of Etherio’s activities. Let’s put together a plan to expose AHDL News. I can’t wait until the public discovers this.”
        “Let’s do it,” responds Keli.
        “All that is true, but this is unfortunate regarding Yieldalgo,” sighs Algolius.
        “Sofi and I will go get him and bring him to the Doc,” says Algo Pard. Algo Pard picks up Sofi so that she can teleport them.
        “You do know you do not have to pick me up every time we teleport.” Says Sofi.
        “Oh I know,” he laughs, “but I’m always going to if I’m around.” They both laugh as they go to rescue Yieldalgo.
        . . .
        Our heroes are in the middle of their meeting, and Keli has just asked about Block 0. Yieldalgo goes to raise his hand. “No. Yieldalgo we love you and respect you, but your incident was fairly recent, and we are still fostering that trust,” states Keli. Yieldalgo lowers his hand.
        “Burn! Someone’s gonna have FOMO,” teases Tiny.
        Algolius, who has video called in, takes himself off of mute, and says “I have important intel on Block 0.”
        `,
          img:theme.images.storyImg39,
        },
      ],
    },
  ];

  const ScrollTop = () => {
    const violation = document.getElementById("blogText");
    violation.scrollTo(0,0);
  }

  const nextStory = () => {
    ScrollTop();
    setActiveScroll(0)
    setActive((oldIndex) => {
      if (oldIndex === BlogItems.length - 1) {
        return 0;
      } else {
        return oldIndex + 1;
      }
    });
  };

  const prevStory = () => {
    ScrollTop();
    setActiveScroll(0)
    setActive((oldIndex) => {
      if (oldIndex === 0) {
        return BlogItems.length - 1;
      } else {
        return oldIndex - 1;
      }
    });
  };

  const connectWallet = async () => {
    try {
      await getAccount();
    } catch (err) {
      console.log(err);
    }
  };

  const getAccount = async () => {
    try {
      account.current = await reach.getDefaultAccount();
      // setAccountAddress(account.current.networkAccount.addr);
      window.localStorage.setItem(
        "leaguesaddress",
        JSON.stringify(account.current.networkAccount.addr)
      );
      theme.walletAddress = account.current.networkAccount.addr;
      update(theme);
      Navigate(location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = useCallback((e) => {
    for (let i = 0; i < e.target.children.length - 1; i++) {
      if (e.target.scrollTop > e.target.children[i].offsetTop - 300) {
        setActiveScroll(i);
      }
    }
  }, []);
  
  return (
    
    <Container
      id="storyLine"
      active={width > 1200 && theme.walletAddress === null}
    >
      
      {/* <img src="/static/media/howToTop.e8127a82.png" width="100%"></img> */}
      
      <Content
        bgimage={
        theme.images.storyCard
        }
      >
        <h2>OUR STORY LINE</h2>
        {theme.walletAddress === null ? (
          <>
            <ImgStory id="imgStory">
            <h1>{BlogItems[active].title}</h1>
            <BlogImage bgImage={BlogItems[active].desc[activeScroll].img} />
            </ImgStory>
            <BlogTexts id="blogText" onScroll={(e) => handleScroll(e)}>
              {ConnectItem[0].desc.map((item, i) => (
                <p id={i} key={i}>
                  {item.text}
                </p>
              ))}
              <p
                style={{
                  textAlign: "center",
                  color: "#1399fc",
                  fontSize: "2.5vw",
                  cursor: "pointer",
                  fontWeight: "800",
                  
                  
                }}
                onClick={() => connectWallet()}
              >
                Connect Wallet To Read More . . .</p>
            </BlogTexts>
          </>
        ) : (
          <>
            <BlogImage bgImage={BlogItems[active].desc[activeScroll].img} />
            <BlogTexts id="blogText" onScroll={(e) => handleScroll(e)}>
              {BlogItems[active].desc.map((item, i) => (
                <p id={i} key={i}>
                  {item.text}
                </p>
              ))}
            </BlogTexts>
          </>
        )}
      </Content>
      {theme.walletAddress && (
        <PageNationWrapper>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ cursor: "pointer" }}
            size="xl"
            onClick={() => prevStory()}
          />
          <span>
            {BlogItems[active === BlogItems.length - 1 ? 0 : active + 1].title}
          </span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ cursor: "pointer" }}
            size="xl"
            onClick={() => nextStory()}
          />
        </PageNationWrapper>
      )}
    </Container>
  );
};
