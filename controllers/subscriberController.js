import Subscriber from '../models/Subscriber.js'

//create new subscriber 
export const newSubscriber = async(req, res)=>{
    const newSubscriberEmail = new Subscriber(req.body);

    try{
        const saveSubscriber = await newSubscriberEmail.save();
        res.status(200).json({
            success:true,
            message:"Thankyou for subscribing!",
            data:saveSubscriber,
        });
    } catch(err){
        res.status(500).json({
            success:false,
            message:"Please try again!"
        })
    }
}

// get all subscriber

export const getSubscribers = async(req, res)=>{
    try{
        const subscribers = await Subscriber.find({});
        res.status(200).json({
            success:true,
            count: subscribers?.length,
            message:"All available subscriber",
            data:subscribers
        });
    } catch(err){
        res.status(404).json({
            success:false,
            message:"there are no any subscribers!"
        })
    }
}