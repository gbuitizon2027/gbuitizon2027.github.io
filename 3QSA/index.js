const CUSTOMERS = ['Cinnamoroll', 'Keroppi', 'Kuromi', 'Melody', 'Hello Kitty', 'Badtz Maru'];
const TYPES = ['drink', 'plate', 'bowl', 'any'];
const FLAVORS = ['avocado', 'strawberry', 'chocolate', 'any'];

const PROBLEMATICS = ['orderDisplay', 'tape', 'plate', 'bowl', 'avocado', 'strawberry', 'chocolate'];

let process = document.getElementById('process');
let check = document.getElementById('check');

let characterDiv = document.getElementById('characterDiv');
let character = document.getElementById('character');
let orderElement = document.getElementById('order');
let chef = document.getElementById('chef');
let finalOrder = document.getElementById('finalOrder');

let currentType = document.getElementById('currentType');
let currentFlavor = document.getElementById('currentFlavor');

class Order {
  constructor(customer, type, flavor) {
    this.customer = customer,
    this.type = type,
    this.flavor = flavor,
    this.processed = false
  }
};

let currentOrder = {
  customer: '',
  type: '',
  flavor: ''
};

let score = 0;
let highScore = 0;

// both any   10pts
// one any    15pts
// none any   20pts
// yes this is RNG-based who cares no one does!!!
// if you get it wrong then game over

function startGame(){
  document.getElementById('title').classList.add('d-none');
  document.getElementById('titleControls').classList.add('d-none');
  
  endDisappear();

  for (let i = 0; i < PROBLEMATICS.length; i++){
    document.getElementById(PROBLEMATICS[i]).classList.remove('d-none');
  };

  changePics();
  
  animateCustomerIn();

  document.getElementById('scoreDisplay').innerHTML = `SCORE: ${score}`;
};

function titleScreen(){
  document.getElementById('title').classList.remove('d-none');
  document.getElementById('titleControls').classList.remove('d-none');

  endDisappear();

  for (let i = 0; i < PROBLEMATICS.length; i++){
    document.getElementById(PROBLEMATICS[i]).classList.add('d-none');
  };
};

function endDisappear(){
  document.getElementById('end').classList.add('d-none');
  document.getElementById('gameOver').classList.add('d-none');
};

function createOrder(){
  let order = new Order(CUSTOMERS[Math.floor(Math.random() * 6)], TYPES[Math.floor(Math.random() * 4)], FLAVORS[Math.floor(Math.random() * 4)]);

  return order;
};

let customerOrder = createOrder();

console.log(customerOrder);

function selectIngredient(kind, variant){
  chef.classList.remove('purinSelect');

  if (!currentOrder.processed){
    switch (kind){
      case 'type':
        currentOrder.type = variant;
        currentType.innerHTML = variant;
        break;
      case 'flavor':
        currentOrder.flavor = variant;
        currentFlavor.innerHTML = variant;
        break;
      default:
        console.log('uh oh');
    }
  
    if (currentOrder.type != '' && currentOrder.flavor != ''){
      process.disabled = false;
      process.classList.remove('d-none');
    }

    chef.classList.add('purinSelect');
    setTimeout(() => {
      chef.classList.remove('purinSelect');
    }, 300);
    
    console.log('Current order:', currentOrder);
  }
};

function processIngredients(){
  console.log('You have completed the ingredients!');
  currentOrder.processed = true;

  process.disabled = true;
  process.classList.add('d-none');

  chef.classList.add('purinMix');
  setTimeout(() => {
    chef.classList.remove('purinMix');

    let finalOrderImg = `images/orders/` + currentOrder.type + currentOrder.flavor + `.png`
    document.getElementById('finalOrder').src = finalOrderImg;
    finalOrder.classList.remove('d-none');
    finalOrder.classList.add('finalOrderIn');

    check.disabled = false;
    check.classList.remove('d-none');
  }, 1500);

  console.log(currentOrder);

  currentFlavor.innerHTML = '&nbsp;';
  currentType.innerHTML = '&nbsp;';
};

function checkOrder(){
  finalOrder.classList.add('d-none');

  if (customerOrder.type == 'any' || customerOrder.flavor == 'any'){
    function anyChecker(){
      if (customerOrder.type == 'any' && customerOrder.flavor == 'any'){
        return 'both';
      } else {
        return customerOrder.type == 'any' ? 'type' : 'flavor';
      }
    };

    let any = anyChecker();

    console.log('Any =', any);

    switch (any){
      case 'type':
        currentOrder.flavor == customerOrder.flavor ? correctOrder() : wrongOrder();
        break;
      case 'flavor':
        currentOrder.type == customerOrder.type ? correctOrder() : wrongOrder();
        break;
      default:
        correctOrder();
    };
  } else {
    if (currentOrder.type == customerOrder.type && currentOrder.flavor == customerOrder.flavor) {
      correctOrder();
    } else {
      wrongOrder();
    }
  }

  // makes a new order

  tentativeOrder = createOrder();
  do {
    tentativeOrder = createOrder();
  } while (tentativeOrder.customer == customerOrder.customer);
  customerOrder = tentativeOrder;

  console.log('New order:', customerOrder);

  restartButtons();
  console.log('New current order:', currentOrder);

  animateCustomerOut();
  setTimeout(() => {
    characterDiv.classList.remove('customerOut');
    orderElement.classList.remove('orderPopOut');
    changePics();
    orderElement.classList.remove('d-none');
  }, 1000);

  // change the pics

  animateCustomerIn();
};

function correctOrder(){
  if (customerOrder.type == 'any' && customerOrder.flavor == 'any') {
    score += 10;
  } else if (customerOrder.type == 'any' || customerOrder.flavor == 'any') {
    score += 15;
  } else {
    score += 20;
  }
  document.getElementById('scoreDisplay').innerHTML = `SCORE: ${score}`;
};

function wrongOrder(){
  alert(`Uh oh, ${customerOrder.customer} didn't order this...`);

  document.getElementById('end').classList.remove('d-none');
  document.getElementById('gameOver').classList.remove('d-none');

  score > highScore ? highScore = score : highScore = highScore
  document.getElementById('lastScore').innerHTML = score;
  document.getElementById('highestScore').innerHTML = highScore;

  score = 0;

  animateCustomerOut();
}

function restartButtons(){
  check.disabled = true;
  check.classList.add('d-none');

  currentOrder.type = '';
  currentOrder.flavor = '';
  currentOrder.processed = false;
};

function animateCustomerIn(){
  characterDiv.classList.add('customerIn');

  setTimeout(() => {
    orderElement.classList.add('orderPopOut');
    orderElement.classList.remove('d-none');
  }, 3000);
}

function animateCustomerOut(){
  orderElement.classList.remove('orderPopOut');
  setTimeout(() => {
    orderElement.classList.remove('d-none');
  }, 1000);

  characterDiv.classList.remove('customerIn');
  characterDiv.classList.add('customerOut');
}

function changePics(){
  let characterImg = `images/characters/` + customerOrder.customer + `.png`;
  character.src = characterImg;
  
  let orderImg = `images/orders/` + customerOrder.type + customerOrder.flavor + `.png`
  document.getElementById('orderImg').src = orderImg;
}
