// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async function handler(req, res) {

    const { method } = req;

    if (method == 'DELETE') {
        res.status(405).json({
            success: false,
            message: 'A Gateway Id is required'
        })
    }else{
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }
    

}
