import {Tweet} from "../models/tweetSchema.js"

export const createTweet = async (req,res) => {
    try {

        const {description,id} = req.body
        if(!description || !id)
        {
            return res.status(400).json({message:"All fields are required"})
        }
        
        await Tweet.create({
            description,
            userId:id
        })

        return res.status(400).json({message:"Tweet created successfully"})

    } catch (error) {
        console.log(error.message)
    }
}