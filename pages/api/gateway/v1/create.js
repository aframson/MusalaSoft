// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import GateDataMain from '../../../../Shema/app'

import DbConnect from '../../../../utils/connection';

DbConnect();

export default async function handler(req, res) {

    const { method } = req;

    if (method == 'POST') {
        GateDataMain.create(req.body, (err, data) => {
            if (err) {
                res.status(500).json({
                    status: 'error',
                    message: err
                })
            }
            res.status(200).json({
                status: 'success',
                data
            })
        })

    }else{
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }
    

}
