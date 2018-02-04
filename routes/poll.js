var router=require('express').Router();
var Pusher=require('pusher');

var pusher = new Pusher({
    appId: '468881',
    key: 'dca22bab7469fa9b2613',
    secret: '25dd008cd2ce5d989cfb',
    cluster: 'ap2',
    encrypted: true
  });

router.get('/',(req,res)=>{
res.send("POLL");
});

router.post('/',function(req,res){
    pusher.trigger('framework-poll', 'framework-vote', {
        points:1,
        framework:req.body.framework
      });
      return res.json({success:true , message:"Thank you for voting"
    });
});

module.exports=router;