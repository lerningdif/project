const Joi = require('joi');
 
const PlaylistPayloadSchema = Joi.object({
  name: Joi.string().required(),
  playlistSong : Joi.string().required()
});
 
module.exports = { PlaylistPayloadSchema };
