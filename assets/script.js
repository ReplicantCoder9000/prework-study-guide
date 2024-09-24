var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log('Here are the topics we learned through Prework:');

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    document.getElementById('html-section').getElementsByTagName('ul')[0].innerHTML = "<li>Let's study HTML!</li>";
  } else if (randomTopic === 'CSS') {
    document.getElementById('css-section').getElementsByTagName('ul')[0].innerHTML = "<li>Let's study CSS!</li>";
  } else if (randomTopic === 'Git') {
    document.getElementById('git-section').getElementsByTagName('ul')[0].innerHTML = "<li>Let's study Git!</li>";
  } else if (randomTopic === 'JavaScript') {
    document.getElementById('javascript-section').getElementsByTagName('ul')[0].innerHTML = "<li>Let's study JavaScript!</li>";
  } else {
    console.log('Please try again!');
  }
}

listTopics();
console.log('Which topic should we study first?');
selectTopic();