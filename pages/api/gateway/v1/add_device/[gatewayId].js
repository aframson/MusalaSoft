// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import GateDataMain from '../../../../../Shema/app'

import DbConnect from '../../../../../utils/connection';

DbConnect();

export default async function handler(req, res) {

    const { gatewayId } = req.query;
    const { method } = req;

    // get todays date from
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    // a unique random number between 1 and 9000000
    const UniqueNumber = Math.floor(Math.random() * 9000000) + 1;


    if (method == 'PUT') {
        GateDataMain.findByIdAndUpdate(gatewayId, {$push:{
            devices: {
                uid_number:UniqueNumber,
                vendor:req.body.vendor,
                dateCreated:date,
                status:req.body.status
            }}
        }, { new: true, runValidators: true }, (err, data) => {
            if (err) {
                res.status(500).json({
                    status: 'error',
                    message: err
                })
            } else {
                if(data.devices.length > 10) {
                    res.status(200).json({
                        status: 'Too much devices',
                        message: 'Devices should not be more than 10 ',
                    })
                }else{
                    res.status(200).json({
                        status: 'success',
                        message: 'Device added',
                        data
                    })
                }
            }
        })
    } else {
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }


}
