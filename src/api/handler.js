/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import { Router } from 'express';
import Promise from 'bluebird';
import mongoose from 'mongoose';

const router = new Router();

mongoose.connect('mongodb://localhost/test');
let Message=mongoose.model('Message', { name: String,message:String });

router.get('/api/postmessage', async (req, res, next) => {
  try {
      console.log(req.query);
      let msg=new Message(req.query);
      msg.save();
      res.status(200).send({response:"success"});

  } catch (err) {
    next(err);
  }
});

router.get('/api/getmessagelist', async (req, res, next) => {
  try {

      Message.find(function (err, list) {
          res.status(200).send(list);
      });


  } catch (err) {
    next(err);
  }
});

export default router;
