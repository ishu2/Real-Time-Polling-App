var form=document.getElementById('vote-form');

// Form submit event
form.addEventListener('submit',e=>{
    var choice=document.querySelector('input[name=framework]:checked').value;
    var data={framework : choice};

    fetch('http://localhost:2000/poll',{
        method:'post',
        body:JSON.stringify(data),
        headers:new Headers({
            'Content-Type':'application/json'
        })
    })
      .then(res=> res.json())
      .then(data=> console.log(data))
      .catch(err=> console.log(err));

    e.preventDefault();
});

var dataPoints=[
    {label:'PHP' , y:0},
    {label:'Ruby On Rails' , y:0},
    {label:'Java' , y:0},
    {label:'NodeJs' , y:0}
];

var chartContainer=document.querySelector('#chartContainer');

if(chartContainer){
    var chart=new CanvasJS.Chart('chartContainer',{
        animationEnabled:true,
        theme:'theme1',
        title:{
            text:'Framework results'
        },
        data:[
            {
                type:'column',
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();

    Pusher.logToConsole = true;

    var pusher = new Pusher('dca22bab7469fa9b2613', {
      cluster: 'ap2',
      encrypted: true
    });

    var channel = pusher.subscribe('framework-poll');
    channel.bind('framework-vote', function(data) {
      dataPoints=dataPoints.map(x=>{
          if(x.label==data.framework){
             x.y+=data.points;
             return x;
          }else{
              return x;
          }
      })
    });

}


























































