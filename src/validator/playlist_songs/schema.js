const Joi = require('joi');
 
const Playlist_songPayloadSchema = Joi.object({
  song_id: Joi.string().required(),
});
 
module.exports = { Playlist_songPayloadSchema };
