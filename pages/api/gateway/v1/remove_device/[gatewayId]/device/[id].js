// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from 'mongoose';
import GateDataMain from '../../../../../../../Shema/app';
import DbConnect from '../../../../../../../utils/connection';

DbConnect();

export default async function handler(req, res) {

    const { gatewayId,id} = req.query;
    const { method } = req;

    if (method == 'DELETE') {
        GateDataMain.findByIdAndUpdate(gatewayId,{$pull:{devices: {uid_number:parseInt(id)}}
        }, { new: true, runValidators: true }, (err, data) => {
            if (err) {
                res.status(500).json({
                    status: 'error',
                    message: err
                })
            } else {
                res.status(200).json({
                    status: 'success',
                    message: 'Device removed',
                    data
                })
            }
        })
    } else {
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }


}
