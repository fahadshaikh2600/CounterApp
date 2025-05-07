
// variable in defined

let counter = document.getElementById('display');

let count = 0;

//update to teh avle in counter upadte fucntion is made 

function update () {
  counter.value = count;
}

// add button

function increment(){
count++;
update();
};

//minus button

function decrement(){
  if (count > 0) {
    count--;
  };
  update()};

// reset button  

  function reset(){
count = 0;
update();
};
// thank you //
