const Joi = require('joi');
 
const Playlist_songPayloadSchema = Joi.object({
  playlist_id: Joi.string().required(),
  song_id: Joi.string().required(),
});
 
module.exports = { Playlist_songPayloadSchema };