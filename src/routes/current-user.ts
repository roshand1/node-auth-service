import express from 'express';
import { getRequest } from '../middleware/get-request';

const router = express.Router();

router.get('/api/users/currentuser', getRequest, (req, res) => {
  const claimsData = req.headers['claimsdata'];
  if (typeof claimsData !== 'undefined') {
    const base64encodedClaimsData = claimsData.toString().split('.')[1];
    const buff = new Buffer(base64encodedClaimsData, 'base64');
    const userClaimData = buff.toString('ascii');
    const userData = JSON.parse(userClaimData);
    res.send(userData.email);
  }
  res.send('User not found');
});

export { router as currentUserRouter };
