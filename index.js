import { Router } from 'express';
import request from 'request';

module.exports = ({ config }) => {
  const api = Router();

  api.get('/feed', (req, res) => {
    const { limit } = req.query;
    const { pageId, accessToken } = config.extensions.instagram;
    const url = `https://graph.facebook.com/v3.2/${pageId}/media`;

    request(
      {
        url,
        json: true,
        qs: {
          limit,
          fields: 'media_url,caption,permalink',
          access_token: accessToken
        }
      },
      (error, response, body) => {
        let apiResult;
        const errorResponse = error || body.error;

        if (errorResponse) {
          apiResult = { code: 500, result: errorResponse };
        } else {
          apiResult = { code: 200, result: body.data };
        }

        res.status(apiResult.code).json(apiResult);
      }
    );
  });

  return api;
};
