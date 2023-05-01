let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const guess =  Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'Please Enter The Number !';
    }else if(guess===secretNumber){
        document.querySelector('.message').textContent='Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent = secretNumber;
        let hscore = Number(document.querySelector('.highscore').textContent);
        if(hscore===0)
        {
            hscore = score;
            document.querySelector('.highscore').textContent = hscore;
        }else if(score >= hscore ){
            hscore = score;
            document.querySelector('.highscore').textContent = hscore;
        }else{
            hscore = hscore;
            document.querySelector('.highscore').textContent = hscore;
        }
    }else if(guess>secretNumber){
        if(score>1)
        {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent='Too High';
        }else{
            document.querySelector('.message').textContent='You Lost Try Again';
            document.querySelector('.score').textContent='0';
        }
    }else if(guess<secretNumber){
        if(score>1)
        {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent='Too Low';
        }else{
            document.querySelector('.message').textContent='You Lost Try Again';
            document.querySelector('.score').textContent='0';
            document.querySelector('body').style.backgroundColor='red';
        }
        
    }
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent = 20;
    // document.querySelector('.highscore').textContent = 0;
    document.querySelector('.number').style.width='15rem';
})