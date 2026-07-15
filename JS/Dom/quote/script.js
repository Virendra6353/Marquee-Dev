const bt = document.querySelector(".qb");
const para = document.getElementById("qu");


const quotes = [
  "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win. — Sun Tzu, The Art of War",

  "The supreme art of war is to subdue the enemy without fighting. — Sun Tzu, The Art of War",

  "Know your enemy and know yourself, and you can fight a hundred battles without disaster. — Sun Tzu, The Art of War",

  "Appear weak when you are strong, and strong when you are weak. — Sun Tzu, The Art of War",

  "All warfare is based on deception. — Sun Tzu, The Art of War",

  "The greatest victory is that which requires no battle. — Sun Tzu, The Art of War",

  "Opportunities multiply as they are seized. — Sun Tzu, The Art of War",

  "Move swift as the wind and closely formed as the forest. Attack like fire and be still as the mountain. — Sun Tzu, The Art of War",

  "If you know the enemy and know yourself, you need not fear the result of a hundred battles. — Sun Tzu, The Art of War",

  "In the midst of chaos, there is also opportunity. — Sun Tzu, The Art of War",

  "He who is prudent and lies in wait for an enemy who is not, will be victorious. — Sun Tzu, The Art of War",

  "There is no instance of a nation benefiting from prolonged warfare. — Sun Tzu, The Art of War",

  "The clever combatant imposes his will on the enemy, but does not allow the enemy's will to be imposed on him. — Sun Tzu, The Art of War",

  "Attack him where he is unprepared; appear where you are not expected. — Sun Tzu, The Art of War",

  "He will win who knows when to fight and when not to fight. — Sun Tzu, The Art of War",

  "The quality of decision is like the well-timed swoop of a falcon. — Sun Tzu, The Art of War",

  "Build your opponent a golden bridge to retreat across. — Sun Tzu, The Art of War",

  "Even the finest sword plunged into salt water will eventually rust. — Sun Tzu, The Art of War",

  "Energy may be likened to the bending of a crossbow; decision, to the releasing of a trigger. — Sun Tzu, The Art of War",

  "Treat your men as you would your own beloved sons, and they will follow you into the deepest valley. — Sun Tzu, The Art of War",

  "He who knows when he can fight and when he cannot will be victorious. — Sun Tzu, The Art of War",

  "To know your enemy, you must become your enemy. — Attributed to Sun Tzu"
];
bt.onclick = function(){                
    const quot = quotes[Math.floor(Math.random() * quotes.length)];
    para.textContent = quot;
};